const ApiError = require('../errors/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')
const userService = require('../services/user-service')


class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('A user with this email already exists'))
        }
        const userData = await userService.registration(email, password, role);
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData)

    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('The password you entered is incorrect'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token, user})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        const reqToken = req.headers.authorization.split(' ')[1]
        const user = jwt.decode(reqToken)
        return res.json({token, user})
    }

    async logout(req,res) {
        res.clearCookie('token');
        return res.json('logout')
    }
}

module.exports = new UserController()

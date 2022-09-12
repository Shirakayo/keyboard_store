const ApiError = require("../errors/ApiError");
const {User, Cart} = require("../models/models");
const bcrypt = require("bcrypt");
const mailService = require("./mail-service")
const tokenService = require("./token-service");
const UserDto = require('../dtos/user-dto')
const uuid = require('uuid')


class UserService {
    async registration(email, password, role) {
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const activationLink = uuid.v4()


        const user = await User.create({email, role, password: hashPassword, activationLink})
        await Cart.create({userId: user.id});

        await mailService.sendActivation(email, activationLink);

        const userDto = new UserDto(User)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(user.id, tokens.refreshToken)
        return {
            ...tokens,
            role: user.role
        }
    }

    async login() {

    }
}

module.exports = new UserService()
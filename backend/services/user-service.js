const {User, Cart} = require("../models/models");
const bcrypt = require("bcrypt");
const mailService = require("./mail-service")
const tokenService = require("./token-service");
const UserDto = require('../dtos/user-dto')
const uuid = require('uuid')
const ApiError = require("../errors/ApiError");


class UserService {
    async registration(email, password, role) {
        if (!email || !password) {
            throw ApiError.badRequest('Incorrect email or password')
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            throw ApiError.badRequest('A user with this email already exists')
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const activationLink = uuid.v4()


        const user = await User.create({email, role, password: hashPassword, activationLink})
        await Cart.create({userId: user.id});

        await mailService.sendActivation(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(User)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(user.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }

    async login(email, password) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            throw ApiError.internal('User not found')
        }
        const comparePassword = await bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            throw ApiError.internal('The password you entered is incorrect')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(user.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        const user = await User.findOne({activationLink})
        if (!user) {
            throw ApiError.badRequest('Incorrect activation link')
        }
        user.isActivated = true;
        await user.save();
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = await tokenService.validateRefreshToken(refreshToken);
        console.log(userData)
        const tokenFromDataBase = await tokenService.findToken(refreshToken);
        console.log(tokenFromDataBase)
        if (!userData || !tokenFromDataBase) {
            throw ApiError.UnauthorizedError();
        }
        const id = userData.id
        const user = await User.findOne({where:{id}})
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(user.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken);
    }
}

module.exports = new UserService()
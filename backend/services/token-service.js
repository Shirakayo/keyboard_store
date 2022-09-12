const jwt = require('jsonwebtoken')
const {Token} = require("../models/models");

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET_KEY, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(id, refreshToken) {
        const tokenData = await Token.findOne({userId: id})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await Token.create({userId: id, refreshToken});
    }
}

module.exports = new TokenService()
const nodemailer = require('nodemailer')

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
            user: 'snouakktrov@gmail.com',
            password: 'Shirakayo2000'
        }
        })
    }


    async sendActivation(to, link) {

    }
}

module.exports = new MailService()
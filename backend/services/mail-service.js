const nodemailer = require('nodemailer')

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMT_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }


    async sendActivation(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Account Activation on the website ' + process.env.API_URL,
            text: '',
            html:
                `
                <div>
                    <h1>You've been caught on the scam</h1>
                    <p>To transfer all your money to the attacker, click on the link below</p>
                    <a href="${link}">${link}</a>
                </div>
              
              
              `
        })
    }
}

module.exports = new MailService()
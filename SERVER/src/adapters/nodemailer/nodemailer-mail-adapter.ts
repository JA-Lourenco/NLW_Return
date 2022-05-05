import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c981e173a05c18",
      pass: "d276400b17f515"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body } : SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Dev Test <devtiusertest@gmail.com>',
            subject,
            html: body
        })
    }
}
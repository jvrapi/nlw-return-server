import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1432ba0ca31df7",
    pass: "b466b930a94579"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData) {
     await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'João Vitor <joaooviitoorr@gmail.com>',
      subject,
      html: body
    })
  }
}
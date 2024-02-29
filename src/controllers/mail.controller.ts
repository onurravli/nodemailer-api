import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { Mail } from '../models';
import { NodemailerError } from '../classes';

class MailController {
  public async post(req: Request, res: Response) {
    const mail = req.body as Mail;
    const transporter = nodemailer.createTransport({
      port: mail?.port || 435,
      host: mail.host,
      auth: {
        user: mail.user,
        pass: mail.pass,
      },
      secure: mail?.secure || false,
    });
    const mailData = {
      from: mail.user,
      to: mail.to,
      subject: mail.subject,
      html: mail.html,
      bcc: mail.bcc,
      cc: mail.cc,
    };
    try {
      const response = await transporter.sendMail(mailData);
      return res.status(200).json({
        message: 'Message sent successfully.',
        response: response,
      });
    } catch (error) {
      return res.status((error as NodemailerError).responseCode).json({
        error: (error as NodemailerError).response,
      });
    }
  }
}

export { MailController };

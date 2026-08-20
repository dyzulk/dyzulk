import nodemailer from "nodemailer";
import { MailProvider, MailProviderPayload } from "../../../types/mail";

interface SmtpConfig {
  host: string;
  port: number;
  secure?: boolean;
  auth?: {
    user: string;
    pass: string;
  };
}

export class SmtpMailProvider implements MailProvider {
  private transporter: nodemailer.Transporter;

  constructor(config: SmtpConfig) {
    this.transporter = nodemailer.createTransport(config);
  }

  async send({ to, from, subject, html, text }: MailProviderPayload): Promise<{ id: string }> {
    const info = await this.transporter.sendMail({
      from,
      to: to.join(", "),
      subject,
      html,
      text: text || "",
    });

    return { id: info.messageId || "smtp-success-id" };
  }
}

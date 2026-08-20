import { render } from "@react-email/render";
import { MailProvider, SendMailOptions } from "../../types/mail";
import { ResendMailProvider } from "./providers/resend";
import { SmtpMailProvider } from "./providers/smtp";
import { ConsoleMailProvider } from "./providers/console";

export class MailService {
  private provider: MailProvider;
  private fromAddress: string;

  constructor() {
    this.fromAddress = process.env.MAIL_FROM || "Dyzulk <noreply@dyzulk.com>";
    const providerType = process.env.MAIL_PROVIDER || "console";

    if (providerType === "resend") {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        throw new Error("RESEND_API_KEY is not defined but provider is set to resend");
      }
      this.provider = new ResendMailProvider(apiKey);
    } else if (providerType === "smtp") {
      const host = process.env.SMTP_HOST;
      const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASSWORD;

      if (!host || !port) {
        throw new Error("SMTP_HOST or SMTP_PORT is not defined but provider is set to smtp");
      }

      this.provider = new SmtpMailProvider({
        host,
        port,
        secure: port === 465,
        auth: user && pass ? { user, pass } : undefined,
      });
    } else {
      this.provider = new ConsoleMailProvider();
    }
  }

  async send({ to, subject, template, text }: SendMailOptions): Promise<{ id: string }> {
    const html = await render(template);
    const recipientList = Array.isArray(to) ? to : [to];

    return this.provider.send({
      to: recipientList,
      from: this.fromAddress,
      subject,
      html,
      text,
    });
  }
}

export const mailService = new MailService();

import { Resend } from "resend";
import { MailProvider, MailProviderPayload } from "../../../types/mail";

export class ResendMailProvider implements MailProvider {
  private resend: Resend;

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey);
  }

  async send({ to, from, subject, html, text }: MailProviderPayload): Promise<{ id: string }> {
    const { data, error } = await this.resend.emails.send({
      from,
      to,
      subject,
      html,
      text: text || "",
    });

    if (error || !data) {
      throw new Error(`Resend sending failed: ${error?.message || "Unknown error"}`);
    }

    return { id: data.id };
  }
}

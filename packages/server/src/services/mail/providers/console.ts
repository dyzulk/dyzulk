import { MailProvider, MailProviderPayload } from "../../../types/mail";

export class ConsoleMailProvider implements MailProvider {
  async send({ to, from, subject, html }: MailProviderPayload): Promise<{ id: string }> {
    console.log("--------------------------------------------------");
    console.log(`[MAIL MOCK] Sending email via ConsoleMailProvider`);
    console.log(`From:    ${from}`);
    console.log(`To:      ${to.join(", ")}`);
    console.log(`Subject: ${subject}`);
    console.log("HTML Body:");
    console.log(html);
    console.log("--------------------------------------------------");
    return { id: `console-mock-${Date.now()}` };
  }
}

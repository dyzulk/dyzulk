import * as React from "react";

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  template: React.ReactElement;
  text?: string;
}

export interface MailProviderPayload {
  to: string[];
  from: string;
  subject: string;
  html: string;
  text?: string;
}

export interface MailProvider {
  send(payload: MailProviderPayload): Promise<{ id: string }>;
}

"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@workspace/ui/components/accordion";
import { HelpCircle } from "lucide-react";

export function PricingFaq() {
  const faqs = [
    {
      q: "How does compute billing work on Dyzulk?",
      a: "Dyzulk Cloud compute is billed strictly on a prorated, per-second basis. If your web service runs for 35 minutes and 12 seconds and then scales to zero or is suspended, you are only charged for exactly 2,112 seconds of compute at that instance tier's rate.",
    },
    {
      q: "What is the difference between standard and performance build pipelines?",
      a: "Standard build pipelines run on shared compute resources appropriate for small-to-medium monorepos. Performance pipelines utilize dedicated, multi-core CPU instances with high-concurrency RAM, speeding up compilation by up to 4x. Performance pipeline minutes are billed at a slightly higher rate.",
    },
    {
      q: "Can I manage or limit my pay-as-you-go spend?",
      a: "Yes. In the Dyzulk Billing Dashboard, you can configure hard and soft spend caps. You'll receive email, SMS, and web notifications when you reach 50%, 80%, and 100% of your defined limit. When reaching 100%, you can configure Dyzulk to automatically pause non-essential services.",
    },
    {
      q: "Are there any credit card verification checks?",
      a: "Yes. When linking a payment card to your account, a temporary $1 authorization check is initiated to verify card validity. This holds is automatically cancelled and released by your bank within a few business days.",
    },
    {
      q: "What support SLA does the Scale plan guarantee?",
      a: "Scale plan workspaces receive priority response SLA. For critical system outages (Priority 1 issues), our team guarantees a response in under 1 hour. For normal inquiries, we guarantee responses within 12 business hours.",
    },
  ];

  return (
    <section className="py-12 max-w-[800px] mx-auto px-4 sm:px-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center justify-center gap-2">
          <HelpCircle className="size-6 text-primary" />
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-muted-foreground text-sm">
          Everything you need to know about Dyzulk plans, billing cycles, and compute limits.
        </p>
      </div>

      <Accordion className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border border-border/50 px-4 bg-card hover:bg-accent/5 transition-colors"
          >
            <AccordionTrigger className="text-sm font-semibold text-foreground py-4 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 pt-1">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@workspace/ui/components/accordion";
import { HelpCircle } from "lucide-react";

export function ProductsFaq() {
  const faqs = [
    {
      q: "What is the difference between Edge Workers and Serverless Containers?",
      a: "Edge Workers run lightweight JavaScript/Wasm code across a global Anycast network, prioritizing sub-10ms latency. Serverless Containers allow deploying arbitrary dockerized code (Go, Python, Rust, etc.) that can scale-to-zero when idle, supporting heavy computing processes.",
    },
    {
      q: "How does Managed Postgres handle database connections?",
      a: "Dyzulk Managed Postgres incorporates an integrated connection pooler at the edge level. This allows thousands of concurrent edge function queries without exhausting standard Postgres connection limits.",
    },
    {
      q: "Can I use external CLI tools to manage Dyzulk resources?",
      a: "Yes. Dyzulk exposes a standard REST API and a fully documented CLI tool. You can automate deployments using standard CI systems (e.g. GitHub Actions) or our native Git integration.",
    },
    {
      q: "Does the WAF & DDoS Shield increase application latency?",
      a: "No. DDoS protection and Web Application Firewall (WAF) inspections are executed inline on our globally distributed edge networks, adding less than 1ms of routing overhead.",
    },
  ];

  return (
    <section className="py-12 max-w-[800px] mx-auto px-4 sm:px-8">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center justify-center gap-2">
          <HelpCircle className="size-5 text-primary" />
          Product FAQ
        </h2>
        <p className="mt-2 text-muted-foreground text-xs">
          Learn details about Dyzulk Cloud’s features, scaling characteristics, and regional availability.
        </p>
      </div>

      <Accordion className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border border-border/50 px-4 bg-card hover:bg-accent/5 transition-colors rounded-none"
          >
            <AccordionTrigger className="text-xs sm:text-sm font-semibold text-foreground py-4 hover:no-underline rounded-none">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4 pt-1">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

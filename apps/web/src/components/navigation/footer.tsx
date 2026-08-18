import Link from "next/link";
import { Layers, MessageSquare } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Edge Compute Workers", href: "#" },
      { label: "Serverless Containers", href: "#" },
      { label: "Global Anycast CDN", href: "#" },
      { label: "Managed Postgres", href: "#" },
      { label: "KV Storage & Cache", href: "#" },
      { label: "WAF & DDoS Shield", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Next.js Monorepos", href: "#" },
      { label: "AI Applications", href: "#" },
      { label: "Micro-frontends", href: "#" },
      { label: "Enterprise Infra", href: "#" },
      { label: "E-Commerce Engines", href: "#" },
    ],
  },
  {
    title: "Developer DX",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "#" },
      { label: "Dyzulk CLI", href: "#" },
      { label: "GitHub Repository", href: "https://github.com" },
      { label: "Release Notes", href: "#" },
      { label: "Community Forum", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#", badge: "Hiring" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security & SOC2", href: "#" },
      { label: "System Status", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-card/60 backdrop-blur-sm text-card-foreground">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 pt-16 pb-12">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-lg">
              <div className="size-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                <Layers className="size-4" />
              </div>
              <span>
                Dyzulk <span className="text-primary font-normal">Cloud</span>
              </span>
            </Link>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Monorepo-native cloud compute & edge infrastructure for modern web applications.
            </p>

            {/* Operational Status Pill with Shadcn Badge */}
            <Badge variant="outline" className="gap-2 px-3 py-1.5 rounded-full text-emerald-600 border-emerald-500/30 bg-emerald-500/10 font-medium">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </Badge>
          </div>

          {/* Section Columns */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </p>
              <ul className="space-y-2 text-xs">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                          {link.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-6 opacity-60" />

        {/* Lower Legal & Social Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Dyzulk Infrastructure Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <MessageSquare className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

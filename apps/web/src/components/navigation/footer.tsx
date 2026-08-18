import Link from "next/link";
import { SiGithub, SiX, SiDiscord } from "@icons-pack/react-simple-icons";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import { Logo } from "@workspace/ui/components/logo";

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
              <Logo className="size-8" />
              <span>
                Dyzulk <span className="text-primary font-normal">Cloud</span>
              </span>
            </Link>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Monorepo-native cloud compute & edge infrastructure for modern web applications.
            </p>

            {/* Operational Status Pill with Shadcn Badge */}
            <Badge variant="success" className="gap-2 font-medium">
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
              <SiGithub className="size-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <SiX className="size-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <SiDiscord className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

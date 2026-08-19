import Link from "next/link";
import { SiGithub, SiX, SiDiscord } from "@icons-pack/react-simple-icons";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import { Logo } from "@workspace/ui/components/logo";
import { SITE_CONFIG } from "@/constants/site";
import { PATHS, FOOTER_SECTIONS } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-card/60 backdrop-blur-sm text-card-foreground">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 pt-16 pb-12">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href={PATHS.home} className="flex items-center gap-2.5 font-bold tracking-tight text-lg">
              <Logo className="size-8" />
              <span>
                Dyzulk <span className="text-primary font-normal">Cloud</span>
              </span>
            </Link>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            {/* Operational Status Pill with Shadcn Badge */}
            <Badge variant="success" className="gap-2 font-medium">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </Badge>
          </div>

          {/* Section Columns */}
          {FOOTER_SECTIONS.map((section, idx) => (
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
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <SiGithub className="size-4" />
            </a>
            <a
              href={SITE_CONFIG.links.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <SiX className="size-4" />
            </a>
            <a
              href={SITE_CONFIG.links.discord}
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

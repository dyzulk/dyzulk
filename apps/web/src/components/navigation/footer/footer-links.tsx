import Link from "next/link";
import { Badge } from "@dyzulk/ui/components/badge";
import { FOOTER_SECTIONS } from "@/constants/navigation";

export function FooterLinks() {
  return (
    <>
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
    </>
  );
}

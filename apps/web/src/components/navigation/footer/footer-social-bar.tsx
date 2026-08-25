import { SiGithub, SiX, SiDiscord } from "@icons-pack/react-simple-icons";
import { SITE_CONFIG } from "@/constants/site";

export function FooterSocialBar() {
  return (
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
  );
}

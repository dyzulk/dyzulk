import Link from "next/link";
import { Badge } from "@dyzulk/ui/components/badge";
import { Logo } from "@dyzulk/ui/components/logo";
import { SITE_CONFIG } from "@/constants/site";
import { PATHS } from "@/constants/navigation";

export function FooterBrand() {
  return (
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
  );
}

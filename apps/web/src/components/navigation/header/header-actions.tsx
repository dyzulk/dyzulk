import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@dyzulk/ui/components/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@dyzulk/ui/lib/utils";
import { PATHS } from "@/constants/navigation";

export function HeaderActions() {
  return (
    <div className="hidden md:flex items-center gap-3">
      <ThemeToggle />

      <Link
        href={PATHS.login}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "font-medium rounded-none"
        )}
      >
        Sign In
      </Link>

      <Link
        href={PATHS.login}
        className={cn(
          buttonVariants({ size: "sm" }),
          "font-semibold shadow-sm rounded-none"
        )}
      >
        Deploy Free <ArrowRight className="ml-1.5 size-3.5" />
      </Link>
    </div>
  );
}

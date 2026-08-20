import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { buttonVariants } from "@dyzulk/ui/components/button";
import { cn } from "@dyzulk/ui/lib/utils";
import { PATHS } from "@/constants/navigation";

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-24">
      {/* Grid Pattern Decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 flex flex-col items-center text-center">
        {/* Glow Sparkle Badge */}
        <div className="inline-flex items-center gap-1.5 border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider rounded-none mb-6">
          <Sparkles className="size-3.5" />
          <span>Complete Cloud Portfolio</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-none">
          Global Infrastructure <br />
          Optimized for Modern Devs
        </h1>

        <p className="mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          Scale your frontend applications, containerized backends, and managed databases globally with Dyzulk Cloud’s enterprise-grade platform.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link
            href={PATHS.login}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "font-bold shadow-md rounded-none px-6"
            )}
          >
            Deploy Your First Project <ArrowRight className="ml-2 size-4" />
          </Link>
          <Link
            href="/pricing"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "font-semibold rounded-none px-6"
            )}
          >
            View Pricing plans
          </Link>
        </div>
      </div>
    </section>
  );
}

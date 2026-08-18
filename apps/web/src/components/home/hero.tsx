import Link from "next/link";
import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRight, Sparkles, Terminal as TerminalIcon, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[620px] py-16 border rounded-3xl overflow-hidden mx-auto w-full max-w-[1400px] bg-card text-card-foreground border-border/60 bg-grid-pattern shadow-xl">
      {/* Background Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full border border-primary/30 bg-primary/10 text-primary mb-8 animate-pulse">
        <Sparkles className="size-3.5" />
        <span>Monorepo-Native Cloud Platform</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl text-center leading-[1.1] px-4">
        Build, Deploy, & Scale <br />
        <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-500 bg-clip-text text-transparent">
          Modern Web Apps
        </span>{" "}
        Globally
      </h1>

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl text-center px-4 leading-relaxed">
        Experience zero-config deployment inspired by Render, Cloudflare speed, and Laravel Cloud DX. Built for Next.js, Turborepo, and modern monorepos.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 px-4">
        <Link
          href="/docs"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6 font-semibold shadow-md text-sm"
          )}
        >
          Start Deploying Free <ArrowRight className="ml-2 size-4" />
        </Link>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full px-6 font-medium text-sm"
          )}
        >
          <TerminalIcon className="mr-2 size-4" /> Explore CLI
        </a>
      </div>

      {/* Highlight Stats Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-border/40 px-6 text-center text-xs text-muted-foreground">
        <div className="flex items-center gap-2 justify-center">
          <ShieldCheck className="size-4 text-primary" />
          <span>99.99% Guaranteed SLA</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
          <span>300+ Anycast Edge Locations</span>
        </div>
        <div className="col-span-2 sm:col-span-1 flex items-center gap-2 justify-center">
          <span className="font-semibold text-foreground">&lt; 10ms</span> Latency Worldwide
        </div>
      </div>
    </section>
  );
}

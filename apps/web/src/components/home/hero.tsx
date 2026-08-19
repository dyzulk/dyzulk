import Link from "next/link";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRight, Sparkles, Terminal as TerminalIcon, ShieldCheck } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { PATHS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[620px] py-16 border rounded-3xl overflow-hidden mx-auto w-full max-w-[1400px] bg-card text-card-foreground border-border/60 bg-grid-pattern shadow-xl">
      {/* Background Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Pill Badge */}
      <Badge variant="outline" className="gap-2 mb-8 animate-pulse">
        <Sparkles className="size-3.5" />
        <span>Monorepo-Native Cloud Platform</span>
      </Badge>

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
          href={PATHS.docs}
          className={cn(
            buttonVariants({ size: "lg" }),
            "font-semibold shadow-md"
          )}
        >
          Start Deploying Free <ArrowRight className="ml-2 size-4" />
        </Link>
        <a
          href={SITE_CONFIG.links.github}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "font-medium gap-2"
          )}
        >
          <SiGithub className="size-4" /> View GitHub
        </a>
      </div>

      {/* Highlight Stats Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-border/40 px-6 text-center text-xs text-muted-foreground">
        <div className="flex items-center gap-2 justify-center">
          <ShieldCheck className="size-4 text-primary" />
          <span>99.99% Guaranteed SLA</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span className="size-2 rounded-full bg-chart-2 animate-ping" />
          <span>300+ Anycast Edge Locations</span>
        </div>
        <div className="col-span-2 sm:col-span-1 flex items-center gap-2 justify-center">
          <span className="font-semibold text-foreground">&lt; 10ms</span> Latency Worldwide
        </div>
      </div>
    </section>
  );
}

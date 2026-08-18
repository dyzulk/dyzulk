import Link from "next/link";
import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRight, Layers } from "lucide-react";

export function CtaFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1400px] mt-28 px-4 pb-12">
      {/* Call to Action Box */}
      <div className="relative border rounded-3xl bg-gradient-to-b from-card to-background p-10 sm:p-16 text-center border-border/80 overflow-hidden shadow-2xl">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
          Ready to Elevate Your Monorepo Infrastructure?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Join thousands of developers building ultra-fast web apps with zero setup hassle.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href="/docs"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-8 font-semibold shadow-lg text-sm"
            )}
          >
            Deploy Your App Now <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <Layers className="size-4 text-primary" />
          <span>Dyzulk Monorepo Web Platform</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/docs" className="hover:text-foreground transition">
            Documentation
          </Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            Twitter
          </a>
        </div>

        <p>© 2026 Dyzulk. All rights reserved.</p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { buttonVariants } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRight } from "lucide-react";
import { PATHS } from "@/constants/navigation";

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-[1400px] mt-28 px-4">
      {/* Call to Action Card */}
      <Card className="relative rounded-3xl bg-gradient-to-b from-card to-background p-10 sm:p-16 text-center border-border/80 overflow-hidden shadow-2xl">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
          Ready to Elevate Your Monorepo Infrastructure?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Join thousands of developers building ultra-fast web apps with zero setup hassle.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href={PATHS.login}
            className={cn(
              buttonVariants({ size: "lg" }),
              "font-semibold shadow-lg"
            )}
          >
            Deploy Your App Now <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </Card>
    </section>
  );
}

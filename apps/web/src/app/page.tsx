import { HeroSection } from "@/components/home/hero";
import { TerminalPreview } from "@/components/home/terminal-preview";
import { BentoFeatures } from "@/components/home/bento-features";
import { MarqueeShowcase } from "@/components/home/marquee-showcase";
import { CtaSection } from "@/components/home/cta-footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-6 pb-12">
      <HeroSection />
      <MarqueeShowcase />
      <TerminalPreview />
      <BentoFeatures />
      <CtaSection />
    </main>
  );
}

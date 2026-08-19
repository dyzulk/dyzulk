"use client";

import { Badge } from "@workspace/ui/components/badge";
import { Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";

interface PricingHeroProps {
  billingCycle: "monthly" | "annual";
  setBillingCycle: (cycle: "monthly" | "annual") => void;
}

export function PricingHero({ billingCycle, setBillingCycle }: PricingHeroProps) {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center py-12 md:py-16 text-center">
      {/* Background Ambient Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 blur-[100px] pointer-events-none" />

      {/* Pill Badge */}
      <Badge variant="outline" className="gap-2 mb-6">
        <Sparkles className="size-3.5 text-primary" />
        <span>Predictable, Transparent Pricing</span>
      </Badge>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-[1.15] px-4">
        Simple Plans for Developers <br />
        <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-500 bg-clip-text text-transparent">
          & Scale-Ready Teams
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl px-4 leading-relaxed">
        Start building for free. When you are ready to scale, enjoy predictable resources, pay-as-you-go flexibility, and sub-second compute billing.
      </p>

      {/* Billing Cycle Switch */}
      <div className="mt-8 flex items-center gap-3">
        <Tabs
          value={billingCycle}
          onValueChange={(value) => setBillingCycle(value as "monthly" | "annual")}
          className="w-[260px]"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual" className="relative">
              Annually
              <span className="absolute -top-3 -right-3 px-1.5 py-0.5 text-[10px] font-semibold bg-primary text-primary-foreground leading-none shadow-sm animate-pulse">
                -20%
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}

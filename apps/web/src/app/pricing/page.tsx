"use client";

import { useState } from "react";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { ComputeEstimator } from "@/components/pricing/compute-estimator";
import { DetailedComparison } from "@/components/pricing/detailed-comparison";
import { PricingFaq } from "@/components/pricing/pricing-faq";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <main className="min-h-screen bg-background text-foreground pt-6 pb-12 space-y-6">
      <PricingHero billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
      <PricingCards billingCycle={billingCycle} />
      <ComputeEstimator />
      <DetailedComparison />
      <PricingFaq />
    </main>
  );
}

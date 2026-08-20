"use client";

import Link from "next/link";
import { Check, ArrowRight, Server, ShieldCheck, Zap, HelpCircle } from "lucide-react";
import { Button, buttonVariants } from "@dyzulk/ui/components/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@dyzulk/ui/components/card";
import { Badge } from "@dyzulk/ui/components/badge";
import { cn } from "@dyzulk/ui/lib/utils";
import { PATHS } from "@/constants/navigation";

interface PricingCardsProps {
  billingCycle: "monthly" | "annual";
}

export function PricingCards({ billingCycle }: PricingCardsProps) {
  const isAnnual = billingCycle === "annual";

  const plans = [
    {
      name: "Hobby",
      description: "For personal projects, hobbyists, and experimenting with new apps.",
      price: 0,
      badge: "Free Plan",
      features: [
        "25 Static Sites & Services limit",
        "5 GB Bandwidth included",
        "500 build minutes / month",
        "Community forum support",
        "Automatic custom domain TLS",
        "Global edge network caching",
      ],
      cta: "Deploy Free",
      href: PATHS.login,
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      description: "For professional developers, startups, and production apps scaling traffic.",
      price: isAnnual ? 15 : 19,
      badge: "Standard",
      features: [
        "Unlimited services & projects",
        "100 GB Bandwidth ($0.15/GB extra)",
        "1,000 build minutes / month",
        "Priority email & chat support",
        "Auto-scaling compute access",
        "Standard backup & DB replicas",
        "Collaboration seats included (up to 5)",
      ],
      cta: "Start Pro Trial",
      href: PATHS.login,
      variant: "default" as const,
      popular: true,
    },
    {
      name: "Scale",
      description: "For scaling organizations requiring high-performance infrastructure.",
      price: isAnnual ? 63 : 79,
      badge: "Enterprise Lite",
      features: [
        "Dedicated isolated compute instances",
        "1 TB Bandwidth ($0.12/GB extra)",
        "5,000 build minutes / month",
        "99.99% Guaranteed response SLA",
        "SAML SSO & advanced RBAC",
        "Full-stack preview environments",
        "Dedicated database backups & PITR",
      ],
      cta: "Scale Now",
      href: PATHS.login,
      variant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <section className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px] mx-auto px-4 sm:px-8">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={cn(
            "relative flex flex-col justify-between border/60 transition-all duration-300 hover:shadow-lg overflow-hidden",
            plan.popular
              ? "border-primary shadow-md bg-accent/20"
              : "bg-card border-border/50"
          )}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 left-0 bg-primary py-1 px-4 text-center text-xs font-semibold text-primary-foreground tracking-wide">
              Most Popular
            </div>
          )}

          <CardHeader className={cn("pt-8", plan.popular && "pt-10")}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <Badge variant={plan.popular ? "default" : "outline"}>
                {plan.badge}
              </Badge>
            </div>
            <CardDescription className="mt-2 text-sm text-muted-foreground min-h-[48px]">
              {plan.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1">
            <div className="flex items-baseline mb-6">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
                ${plan.price}
              </span>
              <span className="ml-2 text-sm font-medium text-muted-foreground">
                / {isAnnual ? "mo (billed annually)" : "month"}
              </span>
            </div>

            <div className="space-y-3.5">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="pt-6 pb-8">
            <Link
              href={plan.href}
              className={cn(
                buttonVariants({ variant: plan.variant, size: "lg" }),
                "w-full font-semibold shadow-sm justify-center"
              )}
            >
              {plan.cta}
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

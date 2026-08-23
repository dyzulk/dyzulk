"use client";

import React from "react";
import Link from "next/link";
import { Info, DollarSign, Cpu, Sparkles } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@dyzulk/ui/components/card";
import { Skeleton } from "@dyzulk/ui/components/skeleton";

interface UsageSummaryCardsProps {
  orgSlug: string;
  currentSpend: number;
  spendingLimit: string;
  bandwidth: {
    percentage: number;
    allowanceLabel: string;
  };
  credits: {
    label: string;
    total: number;
    used: number;
  };
  isLoading?: boolean;
}

export function UsageSummaryCards({
  orgSlug,
  currentSpend,
  spendingLimit,
  bandwidth,
  credits,
  isLoading,
}: UsageSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-none w-full">
      {/* Card 1: Current Spend */}
      <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
        <CardHeader className="p-4 pb-2 group-hover:bg-primary/[0.01] transition-colors duration-300">
          <CardTitle className="text-xs font-mono tracking-wider uppercase text-muted-foreground flex items-center justify-between">
            <span>Current spend</span>
            <DollarSign className="size-4 text-zinc-400 group-hover:text-primary transition-colors duration-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          {isLoading ? (
            <div className="space-y-2 rounded-none">
              <Skeleton className="h-8 w-24 rounded-none animate-pulse" />
              <Skeleton className="h-3 w-32 rounded-none animate-pulse" />
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold font-mono text-foreground">${currentSpend.toFixed(2)}</div>
              <p className="text-[11px] font-mono text-muted-foreground mt-1">Based on current usage</p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Card 2: Spending Limit */}
      <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
        <CardHeader className="p-4 pb-2 group-hover:bg-primary/[0.01] transition-colors duration-300">
          <CardTitle className="text-xs font-mono tracking-wider uppercase text-muted-foreground flex items-center justify-between">
            <span>Spending limit</span>
            <Cpu className="size-4 text-zinc-400 group-hover:text-primary transition-colors duration-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex flex-col justify-between h-full min-h-[70px]">
          {isLoading ? (
            <div className="space-y-2 rounded-none">
              <Skeleton className="h-4 w-4/5 rounded-none animate-pulse" />
              <Skeleton className="h-8 w-32 rounded-none mt-3 animate-pulse" />
            </div>
          ) : (
            <>
              <p className="text-xs font-mono text-muted-foreground">{spendingLimit}</p>
              <div className="mt-3 rounded-none">
                <Link href={`/${orgSlug}/settings/billing`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono text-[10px] tracking-wider uppercase rounded-none border-zinc-200 dark:border-zinc-800 hover:border-primary/30 hover:bg-primary/5 h-8 transition-all duration-300 cursor-pointer"
                  >
                    Set up spending limit
                  </Button>
                </Link>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Card 3: Bandwidth */}
      <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
        <CardHeader className="p-4 pb-2 group-hover:bg-primary/[0.01] transition-colors duration-300">
          <CardTitle className="text-xs font-mono tracking-wider uppercase text-muted-foreground flex items-center justify-between">
            <span>Bandwidth (Data transfer)</span>
            <Info className="size-4 text-zinc-400 group-hover:text-primary transition-colors duration-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          {isLoading ? (
            <div className="space-y-3 rounded-none">
              <Skeleton className="h-7 w-16 rounded-none animate-pulse" />
              <Skeleton className="h-1.5 w-full rounded-none animate-pulse" />
              <Skeleton className="h-3 w-32 rounded-none animate-pulse" />
            </div>
          ) : (
            <>
              <div className="text-xl font-bold font-mono text-foreground">{bandwidth.percentage}%</div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-950 h-1.5 rounded-none mt-2 overflow-hidden border border-zinc-200/50 dark:border-zinc-800/80">
                <div className="bg-primary h-full transition-all duration-500" style={{ width: `${bandwidth.percentage}%` }} />
              </div>
              <div className="flex justify-between items-center mt-2.5">
                <span className="text-[11px] font-mono text-muted-foreground">{bandwidth.allowanceLabel}</span>
                <a href="#" className="text-[11px] font-mono text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1">
                  Learn more
                </a>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Card 4: Credits */}
      <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
        <CardHeader className="p-4 pb-2 group-hover:bg-primary/[0.01] transition-colors duration-300">
          <CardTitle className="text-xs font-mono tracking-wider uppercase text-muted-foreground flex items-center justify-between">
            <span>Credits</span>
            <Sparkles className="size-4 text-zinc-400 group-hover:text-primary transition-colors duration-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          {isLoading ? (
            <div className="space-y-3 rounded-none">
              <div className="flex justify-between items-baseline">
                <Skeleton className="h-6 w-32 rounded-none animate-pulse" />
                <Skeleton className="h-5 w-12 rounded-none animate-pulse" />
              </div>
              <Skeleton className="h-1.5 w-full rounded-none animate-pulse" />
              <Skeleton className="h-3 w-40 rounded-none animate-pulse" />
            </div>
          ) : (
            <>
              <div className="flex justify-between items-baseline">
                <div className="text-xl font-bold font-mono text-foreground">{credits.label}</div>
                <div className="text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 text-foreground font-semibold">
                  ${credits.total.toFixed(2)}
                </div>
              </div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-950 h-1.5 rounded-none mt-2 overflow-hidden border border-zinc-200/50 dark:border-zinc-800/80">
                <div
                  className="bg-primary h-full transition-all duration-500"
                  style={{ width: `${(credits.used / credits.total) * 100}%` }}
                />
              </div>
              <p className="text-[11px] font-mono text-muted-foreground mt-2.5">Credits applied to next invoice.</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { SiGithub, SiReact } from "@icons-pack/react-simple-icons";
import { ChevronDown, Info, Calendar, DollarSign, Database, Cpu, Plus, Sparkles } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@dyzulk/ui/components/card";
import { Skeleton } from "@dyzulk/ui/components/skeleton";
import { useOrganizationUsage } from "@/hooks/use-organization-usage";

interface OrganizationUsageProps {
  orgSlug: string;
}

export function OrganizationUsage({ orgSlug }: OrganizationUsageProps) {
  const {
    selectedPeriod,
    isPeriodSelectorOpen,
    setIsPeriodSelectorOpen,
    periods,
    currentSpend,
    spendingLimit,
    bandwidth,
    credits,
    resources,
    applicationsUsage,
    showLimitModal,
    setShowLimitModal,
    handlePeriodChange,
    isLoading,
  } = useOrganizationUsage(orgSlug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 rounded-none flex flex-col gap-6 w-full">
      {/* Header and Period Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-none border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <div className="rounded-none">
          <h2 className="text-xl font-bold font-mono tracking-wide text-foreground">
            Usage
          </h2>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            Last updated 26 minutes ago. Updated hourly.
          </p>
        </div>
        
        {/* Period Selector Dropdown */}
        <div className="relative rounded-none">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPeriodSelectorOpen(!isPeriodSelectorOpen)}
            className="font-mono text-xs rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 gap-2 h-9 px-4"
          >
            <Calendar className="size-3.5 text-zinc-400" />
            <span>{selectedPeriod}</span>
            <ChevronDown className="size-3.5 text-zinc-400" />
          </Button>

          {isPeriodSelectorOpen && (
            <div className="absolute right-0 mt-1 w-64 bg-background border border-zinc-200 dark:border-zinc-800 rounded-none shadow-lg z-50 py-1">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => handlePeriodChange(period)}
                  className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 ${
                    period === selectedPeriod ? "text-foreground font-bold" : "text-muted-foreground"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main summary cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-none">
        {/* Card 1: Current Spend */}
        <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs font-mono tracking-wider uppercase text-muted-foreground flex items-center justify-between">
              <span>Current spend</span>
              <DollarSign className="size-4 text-zinc-400" />
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
        <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs font-mono tracking-wider uppercase text-muted-foreground flex items-center justify-between">
              <span>Spending limit</span>
              <Cpu className="size-4 text-zinc-400" />
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
                      className="font-mono text-[10px] tracking-wider uppercase rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 h-8"
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
        <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs font-mono tracking-wider uppercase text-muted-foreground flex items-center justify-between">
              <span>Bandwidth (Data transfer)</span>
              <Info className="size-4 text-zinc-400" />
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
                  <div className="bg-zinc-900 dark:bg-zinc-100 h-full" style={{ width: `${bandwidth.percentage}%` }} />
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
        <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs font-mono tracking-wider uppercase text-muted-foreground flex items-center justify-between">
              <span>Credits</span>
              <Sparkles className="size-4 text-zinc-400" />
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
                    className="bg-zinc-900 dark:bg-zinc-100 h-full"
                    style={{ width: `${(credits.used / credits.total) * 100}%` }}
                  />
                </div>
                <p className="text-[11px] font-mono text-muted-foreground mt-2.5">Credits applied to next invoice.</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Resources usage section */}
      <div className="flex flex-col gap-3 rounded-none">
        <h3 className="text-sm font-bold font-mono tracking-wide text-foreground uppercase mt-2">
          Resources
        </h3>
        <p className="text-xs font-mono text-muted-foreground -mt-2">
          Current usage and estimated cost by resource.
        </p>

        <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
          {/* Table Header tabs mimicking columns */}
          <div className="grid grid-cols-4 border-b border-zinc-200 dark:border-zinc-800 font-mono text-[10px] tracking-wider uppercase font-semibold bg-zinc-50/50 dark:bg-zinc-900/10">
            <div className="p-3 border-r border-zinc-200 dark:border-zinc-800 text-foreground flex items-center gap-1.5">
              <Database className="size-3.5 text-zinc-400" />
              <span>Databases</span>
            </div>
            <div className="p-3 border-r border-zinc-200 dark:border-zinc-800 text-muted-foreground">Caches</div>
            <div className="p-3 border-r border-zinc-200 dark:border-zinc-800 text-muted-foreground">Buckets</div>
            <div className="p-3 text-muted-foreground">WebSockets</div>
          </div>

          <CardContent className="p-12 text-center rounded-none">
            <p className="font-mono text-xs text-muted-foreground">No database usage found.</p>
          </CardContent>
          
          <div className="p-3 bg-zinc-50/30 dark:bg-zinc-900/5 border-t border-zinc-200 dark:border-zinc-800 text-right font-mono text-xs font-semibold text-muted-foreground">
            Total resources cost: $0.00
          </div>
        </Card>
      </div>

      {/* Applications usage section */}
      <div className="flex flex-col gap-3 rounded-none">
        <div className="flex justify-between items-baseline rounded-none">
          <h3 className="text-sm font-bold font-mono tracking-wide text-foreground uppercase">
            Applications
          </h3>
          <span className="font-mono text-xs text-muted-foreground font-semibold">
            {isLoading ? <Skeleton className="h-4 w-28 rounded-none animate-pulse" /> : `Total 1 app: $0.01`}
          </span>
        </div>
        <p className="text-xs font-mono text-muted-foreground -mt-2">
          Usage and cost for each application.
        </p>

        {isLoading ? (
          Array.from({ length: 1 }).map((_, i) => (
            <Card key={i} className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
              {/* Upper row skeleton */}
              <div className="py-3 px-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 bg-zinc-50/50 dark:bg-zinc-900/10 rounded-none">
                <div className="flex items-center gap-2 rounded-none">
                  <Skeleton className="size-4 rounded-none animate-pulse" />
                  <Skeleton className="h-4 w-32 rounded-none animate-pulse" />
                  <Skeleton className="h-3.5 w-16 rounded-none animate-pulse" />
                </div>
                <Skeleton className="h-4 w-36 rounded-none animate-pulse" />
              </div>

              {/* Inner details container skeleton */}
              <div className="p-4 flex flex-col gap-4 rounded-none">
                <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 p-3 font-mono text-[11px] rounded-none">
                  <div className="font-semibold text-foreground uppercase tracking-wider text-[10px] pb-2 border-b border-zinc-100 dark:border-zinc-900/50 flex items-center justify-between">
                    <Skeleton className="h-4 w-24 rounded-none animate-pulse" />
                    <Skeleton className="size-3.5 rounded-none animate-pulse" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2.5 text-muted-foreground">
                    <div>
                      <Skeleton className="h-3 w-16 rounded-none animate-pulse mb-1" />
                      <Skeleton className="h-4 w-28 rounded-none animate-pulse" />
                    </div>
                    <div>
                      <Skeleton className="h-3 w-12 rounded-none animate-pulse mb-1" />
                      <Skeleton className="h-4 w-16 rounded-none animate-pulse" />
                    </div>
                    <div>
                      <Skeleton className="h-3 w-16 rounded-none animate-pulse mb-1" />
                      <Skeleton className="h-4 w-16 rounded-none animate-pulse" />
                    </div>
                    <div className="sm:text-right">
                      <Skeleton className="h-3 w-12 rounded-none animate-pulse mb-1 sm:ml-auto" />
                      <Skeleton className="h-4 w-16 rounded-none animate-pulse sm:ml-auto" />
                    </div>
                  </div>
                </div>

                {/* Summary lines skeleton */}
                <div className="flex flex-col gap-2 font-mono text-xs text-muted-foreground rounded-none border-t border-zinc-100 dark:border-zinc-900/50 pt-3">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-48 rounded-none animate-pulse" />
                    <Skeleton className="h-4 w-12 rounded-none animate-pulse" />
                  </div>
                  <div className="flex justify-between items-center pt-1.5 border-t border-zinc-100 dark:border-zinc-900/20">
                    <Skeleton className="h-4 w-56 rounded-none animate-pulse" />
                    <Skeleton className="h-4 w-12 rounded-none animate-pulse" />
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          applicationsUsage.map((app) => (
            <Card key={app.id} className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
              {/* Upper row: App Name, Git status & Environment metadata */}
              <div className="py-3 px-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 bg-zinc-50/50 dark:bg-zinc-900/10 rounded-none">
                <div className="flex items-center gap-2 rounded-none">
                  <SiReact className="size-4 text-sky-500" />
                  <span className="font-mono font-bold text-xs text-foreground">
                    {app.name}
                  </span>
                  {app.isDeleted && (
                    <span className="font-mono text-[9px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-muted-foreground px-1.5 py-0.5 font-semibold">
                      Deleted
                    </span>
                  )}
                  <span className="text-zinc-300 dark:text-zinc-800 text-[10px] font-mono">|</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {app.env}
                  </span>
                  {app.isDeleted && (
                    <span className="font-mono text-[9px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-muted-foreground px-1.5 py-0.5 font-semibold">
                      Deleted
                    </span>
                  )}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground font-semibold">
                  {app.envId}
                </div>
              </div>

              {/* Inner details container */}
              <div className="p-4 flex flex-col gap-4 rounded-none">
                {/* App Clusters metric */}
                <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/5 p-3 font-mono text-[11px] rounded-none">
                  <div className="font-semibold text-foreground uppercase tracking-wider text-[10px] pb-2 border-b border-zinc-100 dark:border-zinc-900/50 flex items-center justify-between">
                    <span>App clusters</span>
                    <Cpu className="size-3 text-zinc-400" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2.5 text-muted-foreground">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider block text-muted-foreground/60 mb-0.5">Compute</span>
                      <span className="text-foreground font-semibold">{app.compute.type}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider block text-muted-foreground/60 mb-0.5">Replicas</span>
                      <span className="text-foreground font-semibold">{app.compute.replicas} used</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider block text-muted-foreground/60 mb-0.5">CPU hours</span>
                      <span className="text-foreground font-semibold">{app.compute.cpuHours} hours</span>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-[9px] uppercase tracking-wider block text-muted-foreground/60 mb-0.5">Total</span>
                      <span className="text-foreground font-bold">${app.compute.cost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Summary line entries */}
                <div className="flex flex-col gap-2 font-mono text-xs text-muted-foreground rounded-none border-t border-zinc-100 dark:border-zinc-900/50 pt-3">
                  <div className="flex justify-between items-center">
                    <span>production environment cost</span>
                    <span className="font-semibold text-foreground">${app.envCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-foreground pt-1.5 border-t border-zinc-100 dark:border-zinc-900/20">
                    <span>{app.name} total application cost</span>
                    <span>${app.totalCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

    </div>
  );
}

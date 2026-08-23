"use client";

import React from "react";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Cpu } from "lucide-react";
import { Card } from "@dyzulk/ui/components/card";
import { Skeleton } from "@dyzulk/ui/components/skeleton";

interface ApplicationUsage {
  id: string;
  name: string;
  env: string;
  envId: string;
  isDeleted: boolean;
  compute: {
    type: string;
    replicas: number;
    cpuHours: number;
    cost: number;
  };
  envCost: number;
  totalCost: number;
}

interface ApplicationsUsageListProps {
  applicationsUsage: ApplicationUsage[];
  isLoading?: boolean;
}

export function ApplicationsUsageList({
  applicationsUsage,
  isLoading,
}: ApplicationsUsageListProps) {
  return (
    <div className="flex flex-col gap-3 rounded-none w-full">
      <div className="flex justify-between items-baseline rounded-none">
        <h3 className="text-sm font-bold font-mono tracking-wide text-foreground uppercase">
          Applications
        </h3>
        <span className="font-mono text-xs text-muted-foreground font-semibold">
          {isLoading ? (
            <Skeleton className="h-4 w-28 rounded-none animate-pulse" />
          ) : (
            `Total ${applicationsUsage.length} app: $${applicationsUsage.reduce((acc, app) => acc + app.totalCost, 0).toFixed(2)}`
          )}
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
          <Card key={app.id} className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
            {/* Upper row: App Name, Git status & Environment metadata */}
            <div className="py-3 px-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 bg-zinc-50/50 dark:bg-zinc-900/10 group-hover:bg-primary/[0.01] transition-colors duration-300 rounded-none">
              <div className="flex items-center gap-2 rounded-none">
                <SiReact className="size-4 text-sky-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-mono font-bold text-xs text-foreground group-hover:text-primary transition-colors duration-300">
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
                  <Cpu className="size-3 text-zinc-400 group-hover:text-primary transition-colors duration-300" />
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
  );
}

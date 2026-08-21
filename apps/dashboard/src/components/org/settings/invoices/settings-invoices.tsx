"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useOrganizationSettings } from "@/hooks/use-organization-settings";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Badge } from "@dyzulk/ui/components/badge";
import { Skeleton } from "@dyzulk/ui/components/skeleton";

export function SettingsInvoices() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  const { invoices, isLoading } = useOrganizationSettings(orgSlug);

  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      {/* Invoice Preview */}
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Invoice preview</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Your upcoming invoice for the current billing period.
          </p>
        </div>

        <CardContent className="p-5">
          {isLoading ? (
            <div className="border border-zinc-200 dark:border-zinc-800 p-5 bg-background rounded-none space-y-5">
              <div className="flex flex-col sm:flex-row justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-900/50">
                <Skeleton className="h-6 w-32 rounded-none animate-pulse" />
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[11px]">
                  <Skeleton className="h-4 w-12 rounded-none animate-pulse" />
                  <Skeleton className="h-4.5 w-16 rounded-none animate-pulse" />
                  <Skeleton className="h-4 w-20 rounded-none animate-pulse" />
                  <Skeleton className="h-4 w-32 rounded-none animate-pulse" />
                  <Skeleton className="h-4 w-20 rounded-none animate-pulse" />
                  <Skeleton className="h-4 w-24 rounded-none animate-pulse" />
                </div>
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24 rounded-none animate-pulse" />
                    <Skeleton className="h-3 w-40 rounded-none animate-pulse" />
                  </div>
                  <Skeleton className="h-4 w-12 rounded-none animate-pulse" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-32 rounded-none animate-pulse" />
                    <Skeleton className="h-3 w-48 rounded-none animate-pulse" />
                  </div>
                  <Skeleton className="h-4 w-12 rounded-none animate-pulse" />
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-zinc-200 dark:border-zinc-800 p-5 bg-background rounded-none space-y-5">
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-900/50">
                <h4 className="text-sm font-bold text-foreground">Invoice preview</h4>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[11px]">
                  <span className="text-muted-foreground">Status</span>
                  <div>
                    <Badge variant="outline" className="rounded-none border-zinc-200 font-mono text-[9px] uppercase font-bold tracking-wider px-2 py-0">
                      Upcoming
                    </Badge>
                  </div>

                  <span className="text-muted-foreground">Billing period</span>
                  <span className="text-foreground font-semibold">Jul 22 2026 - Aug 21 2026</span>

                  <span className="text-muted-foreground">Date of issue</span>
                  <span className="text-foreground font-semibold">Aug 24 2026</span>

                  <span className="text-muted-foreground">Billed to</span>
                  <span className="text-foreground font-semibold">DyzulkDev</span>
                </div>
              </div>

              {/* Line items */}
              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex justify-between items-center text-muted-foreground">
                  <div className="space-y-0.5">
                    <span className="font-bold text-foreground">Plan</span>
                    <span className="block text-[10px]">Cloud Starter (Legacy)</span>
                  </div>
                  <span className="font-bold text-foreground">$0.00</span>
                </div>

                <div className="flex justify-between items-center text-muted-foreground">
                  <div className="space-y-0.5">
                    <span className="font-bold text-foreground">Usage to date</span>
                    <span className="block text-[10px]">Environment Compute</span>
                  </div>
                  <span className="font-bold text-foreground">$0.01</span>
                </div>

                <hr className="border-zinc-200 dark:border-zinc-800 mt-4" />

                {/* Totals Breakdown */}
                <div className="space-y-2 pt-2 border-zinc-100 dark:border-zinc-900/50">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-semibold text-foreground">$0.01</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Taxes</span>
                    <span className="font-semibold text-foreground">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>Prepaid credits</span>
                    <span className="font-semibold text-foreground">-$0.01</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-foreground pt-2 border-t border-zinc-100 dark:border-zinc-900/30 text-sm">
                    <span>Total to date</span>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Invoice History */}
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Invoice history</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            All of your organization's previous invoices.
          </p>
        </div>

        {isLoading ? (
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="p-4 flex justify-between items-center bg-background rounded-none">
                <div className="space-y-2 flex-1 rounded-none">
                  <Skeleton className="h-4 w-32 rounded-none animate-pulse" />
                  <Skeleton className="h-3.5 w-40 rounded-none animate-pulse" />
                </div>
                <div className="flex gap-4 items-center">
                  <Skeleton className="h-4 w-12 rounded-none animate-pulse" />
                  <Skeleton className="h-5 w-16 rounded-none animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CardContent className="p-16 text-center rounded-none">
            <h4 className="font-bold text-xs text-foreground mb-1">No invoices</h4>
            <p className="text-muted-foreground text-[10px]">You have not received any invoices yet.</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

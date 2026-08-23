"use client";

import React from "react";
import { Database } from "lucide-react";
import { Card, CardContent } from "@dyzulk/ui/components/card";

export function ResourcesUsageCard() {
  return (
    <div className="flex flex-col gap-3 rounded-none w-full">
      <h3 className="text-sm font-bold font-mono tracking-wide text-foreground uppercase mt-2">
        Resources
      </h3>
      <p className="text-xs font-mono text-muted-foreground -mt-2">
        Current usage and estimated cost by resource.
      </p>

      <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
        {/* Table Header tabs */}
        <div className="grid grid-cols-4 border-b border-zinc-200 dark:border-zinc-800 font-mono text-[10px] tracking-wider uppercase font-semibold bg-zinc-50/50 dark:bg-zinc-900/10 group-hover:bg-primary/[0.01] transition-colors duration-300">
          <div className="p-3 border-r border-zinc-200 dark:border-zinc-800 text-foreground flex items-center gap-1.5">
            <Database className="size-3.5 text-zinc-400 group-hover:text-primary transition-colors duration-300" />
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
  );
}

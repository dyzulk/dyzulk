"use client";

import React from "react";
import { Card } from "@dyzulk/ui/components/card";
import { Skeleton } from "@dyzulk/ui/components/skeleton";

export function ApplicationsLoading() {
  return (
    <div className="flex flex-col gap-4 rounded-none w-full">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Card
          key={idx}
          className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none"
        >
          <div className="py-2.5 px-4 flex items-center justify-between gap-4 rounded-none bg-zinc-50/50 dark:bg-zinc-900/10">
            <div className="flex items-center gap-2.5 rounded-none w-full max-w-xs">
              <Skeleton className="size-6 rounded-none animate-pulse shrink-0" />
              <Skeleton className="h-4 w-32 rounded-none animate-pulse" />
            </div>
            <div className="flex items-center gap-4 rounded-none w-full max-w-sm justify-end">
              <Skeleton className="h-3 w-40 rounded-none animate-pulse" />
              <Skeleton className="size-4 rounded-none animate-pulse shrink-0" />
            </div>
          </div>
          <div className="py-2 px-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 w-full max-w-[100px]">
              <Skeleton className="size-2 rounded-full shrink-0 animate-pulse" />
              <Skeleton className="h-3.5 w-16 rounded-none animate-pulse" />
            </div>
            <Skeleton className="h-3 w-1/2 rounded-none animate-pulse" />
            <Skeleton className="h-3 w-20 rounded-none animate-pulse" />
          </div>
        </Card>
      ))}
    </div>
  );
}

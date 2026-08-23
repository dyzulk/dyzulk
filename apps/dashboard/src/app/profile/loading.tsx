import React from "react";
import { Skeleton } from "@dyzulk/ui/components/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      <div className="border border-zinc-200 dark:border-zinc-800 bg-background p-5 space-y-6 rounded-none">
        <div className="space-y-2 rounded-none">
          <Skeleton className="h-4 w-32 rounded-none animate-pulse" />
          <Skeleton className="h-3 w-48 rounded-none animate-pulse" />
        </div>
        <div className="space-y-4 rounded-none">
          <Skeleton className="h-9 w-full max-w-md rounded-none animate-pulse" />
          <Skeleton className="h-9 w-full max-w-md rounded-none animate-pulse" />
          <Skeleton className="h-9 w-28 rounded-none animate-pulse" />
        </div>
      </div>
    </div>
  );
}

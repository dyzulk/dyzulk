import React from "react";
import { Skeleton } from "@dyzulk/ui/components/skeleton";

export default function Loading() {
  return (
    <div className="w-full rounded-none">
      <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 p-20 flex flex-col items-center justify-center text-center rounded-none min-h-[400px]">
        <Skeleton className="size-24 rounded-none animate-pulse mb-6" />
        <Skeleton className="h-4 w-32 rounded-none animate-pulse mb-2" />
        <Skeleton className="h-3.5 w-64 rounded-none animate-pulse mb-6" />
        <Skeleton className="h-10 w-44 rounded-none animate-pulse" />
      </div>
    </div>
  );
}

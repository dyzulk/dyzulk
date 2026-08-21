import React from "react"
import { Skeleton } from "@dyzulk/ui/components/skeleton"
import { Card, CardContent } from "@dyzulk/ui/components/card"

export function OrganizationOverviewSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 rounded-none flex flex-col gap-8">
      {/* Organization name and avatar badge skeleton */}
      <div className="flex items-center gap-3 pt-4 pb-2 rounded-none border-b border-zinc-100 dark:border-zinc-900">
        <Skeleton className="size-10 rounded-none animate-pulse" />
        <Skeleton className="h-8 w-48 rounded-none animate-pulse" />
      </div>

      {/* Overview header section skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-none">
        <div className="space-y-2 rounded-none">
          <Skeleton className="h-6 w-24 rounded-none animate-pulse" />
          <Skeleton className="h-4 w-72 rounded-none animate-pulse" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-9 w-32 rounded-none animate-pulse" />
          <Skeleton className="h-9 w-36 rounded-none animate-pulse" />
        </div>
      </div>

      {/* Main layout container (recently deployed & latest deployments) */}
      <div className="flex flex-col gap-8 rounded-none">
        
        {/* Recently Deployed Skeleton (Grid - 2 Columns) */}
        <div className="rounded-none">
          <Skeleton className="h-4 w-36 mb-4 rounded-none animate-pulse" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-none">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card
                key={i}
                className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none"
              >
                <CardContent className="p-6 flex flex-col gap-4 rounded-none">
                  {/* App icon, name and environment pill skeleton */}
                  <div className="flex items-start justify-between gap-4 rounded-none">
                    <div className="flex items-center gap-3 rounded-none">
                      <Skeleton className="size-10 rounded-none animate-pulse" />
                      <div className="space-y-2 rounded-none">
                        <div className="flex items-center gap-2 rounded-none">
                          <Skeleton className="h-5 w-28 rounded-none animate-pulse" />
                          <Skeleton className="h-4 w-12 rounded-none animate-pulse" />
                        </div>
                        <Skeleton className="h-4 w-40 rounded-none animate-pulse" />
                      </div>
                    </div>
                    <Skeleton className="h-7 w-16 rounded-none animate-pulse" />
                  </div>

                  {/* Git metadata details skeleton */}
                  <div className="flex items-center gap-4 text-xs font-mono rounded-none border-t border-zinc-100 dark:border-zinc-900 pt-3">
                    <Skeleton className="h-3.5 w-32 rounded-none animate-pulse" />
                    <Skeleton className="h-3.5 w-20 rounded-none animate-pulse" />
                    <Skeleton className="h-3.5 w-16 rounded-none animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Latest Deployments Skeleton (List layout) */}
        <div className="rounded-none">
          <Skeleton className="h-4 w-36 mb-4 rounded-none animate-pulse" />
          
          <div className="border border-zinc-200 dark:border-zinc-800 bg-background divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-none"
              >
                <div className="flex items-center gap-3 rounded-none">
                  <Skeleton className="size-6 rounded-full animate-pulse" /> {/* Avatar can be circular */}
                  <div className="space-y-2 rounded-none">
                    <div className="flex items-center gap-2 text-xs font-mono rounded-none">
                      <Skeleton className="h-4 w-16 rounded-none animate-pulse" />
                      <Skeleton className="h-4 w-28 rounded-none animate-pulse" />
                    </div>
                    <Skeleton className="h-4 w-64 rounded-none animate-pulse" />
                  </div>
                </div>
                <Skeleton className="h-4 w-48 rounded-none animate-pulse" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

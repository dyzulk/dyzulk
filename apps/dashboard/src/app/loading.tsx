import { Skeleton } from "@dyzulk/ui/components/skeleton"

export default function Loading() {
  return (
    <div className="flex-1 space-y-6 p-8 bg-background text-foreground rounded-none">
      {/* Dashboard Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-none">
        <div className="space-y-2 rounded-none">
          {/* Dashboard Title */}
          <Skeleton className="h-8 w-48 rounded-none" />
          {/* Subtitle description */}
          <Skeleton className="h-4 w-72 rounded-none" />
        </div>
        {/* Header Action Button */}
        <Skeleton className="h-10 w-36 rounded-none" />
      </div>

      {/* Grid of Key Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border border-border/40 bg-card/30 p-6 space-y-3 rounded-none"
          >
            <div className="flex justify-between items-center rounded-none">
              <Skeleton className="h-4 w-24 rounded-none" />
              <Skeleton className="h-5 w-5 rounded-none" />
            </div>
            <Skeleton className="h-8 w-20 rounded-none" />
            <Skeleton className="h-3 w-32 rounded-none" />
          </div>
        ))}
      </div>

      {/* Main Content Area: Graph and Table Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-none">
        {/* Left main graph skeleton area */}
        <div className="lg:col-span-2 border border-border/40 bg-card/30 p-6 space-y-6 rounded-none">
          <div className="flex justify-between items-center rounded-none">
            <div className="space-y-1 rounded-none">
              <Skeleton className="h-5 w-36 rounded-none" />
              <Skeleton className="h-3.5 w-48 rounded-none" />
            </div>
            <Skeleton className="h-8 w-24 rounded-none" />
          </div>
          {/* Main big graphic representation area */}
          <Skeleton className="h-[280px] w-full rounded-none" />
        </div>

        {/* Right sub list/activity area */}
        <div className="border border-border/40 bg-card/30 p-6 space-y-6 rounded-none">
          <div className="space-y-1 rounded-none">
            <Skeleton className="h-5 w-28 rounded-none" />
            <Skeleton className="h-3.5 w-40 rounded-none" />
          </div>
          {/* List of activity loaders */}
          <div className="space-y-4 rounded-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 rounded-none">
                <Skeleton className="h-9 w-9 rounded-full" /> {/* Avatar can be circular */}
                <div className="space-y-1.5 flex-1 rounded-none">
                  <Skeleton className="h-4 w-5/6 rounded-none" />
                  <Skeleton className="h-3 w-1/2 rounded-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

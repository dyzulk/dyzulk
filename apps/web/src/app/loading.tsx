import { Skeleton } from "@dyzulk/ui/components/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-24 px-6 md:px-12 max-w-6xl mx-auto space-y-16 rounded-none">
      {/* Hero Section Skeleton */}
      <div className="flex flex-col items-center text-center space-y-6 pt-12 rounded-none">
        {/* Eyebrow badge */}
        <Skeleton className="h-6 w-32 rounded-none" />
        
        {/* Main Heading */}
        <Skeleton className="h-12 md:h-16 w-3/4 max-w-3xl rounded-none" />
        <Skeleton className="h-12 md:h-16 w-1/2 max-w-xl rounded-none" />
        
        {/* Description */}
        <div className="space-y-2 w-full max-w-lg pt-2 rounded-none">
          <Skeleton className="h-4 w-full rounded-none" />
          <Skeleton className="h-4 w-5/6 mx-auto rounded-none" />
        </div>

        {/* Call to Actions */}
        <div className="flex flex-row gap-4 pt-4 rounded-none">
          <Skeleton className="h-11 w-32 rounded-none" />
          <Skeleton className="h-11 w-32 rounded-none" />
        </div>
      </div>

      {/* Feature Showcase Skeleton */}
      <div className="space-y-4 rounded-none">
        <div className="flex flex-col items-center space-y-2 rounded-none">
          <Skeleton className="h-6 w-24 rounded-none" />
          <Skeleton className="h-8 w-64 rounded-none" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 rounded-none">
          {/* Card 1 */}
          <div className="border border-border/40 p-6 space-y-4 bg-card/30 rounded-none">
            <Skeleton className="h-10 w-10 rounded-none" />
            <Skeleton className="h-6 w-32 rounded-none" />
            <div className="space-y-2 rounded-none">
              <Skeleton className="h-3 w-full rounded-none" />
              <Skeleton className="h-3 w-5/6 rounded-none" />
            </div>
          </div>
          {/* Card 2 */}
          <div className="border border-border/40 p-6 space-y-4 bg-card/30 rounded-none">
            <Skeleton className="h-10 w-10 rounded-none" />
            <Skeleton className="h-6 w-28 rounded-none" />
            <div className="space-y-2 rounded-none">
              <Skeleton className="h-3 w-full rounded-none" />
              <Skeleton className="h-3 w-4/5 rounded-none" />
            </div>
          </div>
          {/* Card 3 */}
          <div className="border border-border/40 p-6 space-y-4 bg-card/30 rounded-none">
            <Skeleton className="h-10 w-10 rounded-none" />
            <Skeleton className="h-6 w-36 rounded-none" />
            <div className="space-y-2 rounded-none">
              <Skeleton className="h-3 w-full rounded-none" />
              <Skeleton className="h-3 w-5/6 rounded-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

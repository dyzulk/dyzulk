import { Spinner } from "@workspace/ui/components/spinner";

export default function Loading() {
  return (
    <div className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-6 py-12">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      {/* Loading Container */}
      <div className="flex flex-col items-center gap-4 p-8 border border-border/40 bg-card/30 backdrop-blur-md rounded-lg shadow-sm">
        {/* Glow spinner wrapper */}
        <div className="relative flex items-center justify-center select-none">
          <span className="absolute -inset-1 rounded-full bg-primary/20 opacity-20 blur-xl animate-pulse" />
          <div className="relative flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Spinner className="size-6" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">Loading Page</p>
          <p className="text-xs text-muted-foreground mt-1">Please wait a moment...</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { buttonVariants } from "@workspace/ui/components/button";
import { ArrowLeft, Home } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      {/* 404 Card / Frame */}
      <div className="flex flex-col items-center max-w-md w-full p-8 border border-border/40 bg-card/30 backdrop-blur-md rounded-lg shadow-sm">
        {/* Glow effect code number */}
        <div className="relative mb-6 select-none">
          <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/30 to-violet-500/30 opacity-20 blur-xl animate-pulse" />
          <h1 className="relative font-mono text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 sm:text-9xl">
            404
          </h1>
        </div>

        {/* Text Details */}
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Page Not Found
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Sorry, the page you are looking for could not be found or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto font-medium"
            )}
          >
            <Home className="size-4 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto font-medium"
            )}
          >
            <ArrowLeft className="size-4 mr-2 text-muted-foreground" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

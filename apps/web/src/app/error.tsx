"use client";

import Link from "next/link";
import { useEffect } from "react";
import { buttonVariants } from "@workspace/ui/components/button";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_60%)] pointer-events-none" />

      {/* Error Card / Frame */}
      <div className="flex flex-col items-center max-w-md w-full p-8 border border-destructive/20 bg-card/30 backdrop-blur-md rounded-lg shadow-sm">
        {/* Glow effect alert icon */}
        <div className="relative mb-6 select-none flex items-center justify-center">
          <span className="absolute -inset-1 rounded-full bg-destructive/20 opacity-20 blur-xl animate-pulse" />
          <div className="relative flex items-center justify-center size-16 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
            <AlertCircle className="size-8" />
          </div>
        </div>

        {/* Text Details */}
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Something went wrong!
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          An unexpected error occurred while loading this page. Please try again.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <button
            onClick={() => reset()}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto font-medium cursor-pointer"
            )}
          >
            <RotateCcw className="size-4 mr-2" />
            Try Again
          </button>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto font-medium"
            )}
          >
            <Home className="size-4 mr-2 text-muted-foreground" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

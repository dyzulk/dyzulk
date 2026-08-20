import Link from "next/link";
import { buttonVariants } from "@dyzulk/ui/components/button";
import { ArrowLeft, Home } from "lucide-react";
import { cn } from "@dyzulk/ui/lib/utils";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center rounded-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      {/* 404 Card / Frame - strictly rounded-none */}
      <div className="flex flex-col items-center max-w-md w-full p-8 border border-border/40 bg-card/30 backdrop-blur-md rounded-none shadow-sm">
        {/* Glow effect code number */}
        <div className="relative mb-6 select-none rounded-none">
          <span className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-violet-500/30 opacity-20 blur-xl animate-pulse rounded-none" />
          <h1 className="relative font-mono text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 sm:text-9xl rounded-none">
            404
          </h1>
        </div>

        {/* Text Details */}
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl rounded-none">
          Page Not Found
        </h2>
        <p className="mt-3 text-sm text-muted-foreground rounded-none">
          Sorry, the page you are looking for could not be found or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full rounded-none">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto font-medium rounded-none"
            )}
          >
            <Home className="size-4 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto font-medium rounded-none"
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

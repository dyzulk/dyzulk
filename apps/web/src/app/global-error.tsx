"use client";

import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "@dyzulk/ui/globals.css";
import { buttonVariants } from "@dyzulk/ui/components/button";
import { AlertCircle, RotateCcw } from "lucide-react";
import { cn } from "@dyzulk/ui/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontMono.variable, "font-sans", plusJakartaSans.variable)}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground items-center justify-center p-6 text-center">
        {/* Background radial glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_60%)] pointer-events-none" />

        <div className="flex flex-col items-center max-w-md w-full p-8 border border-destructive/20 bg-card/30 backdrop-blur-md rounded-lg shadow-sm">
          <div className="relative mb-6 select-none flex items-center justify-center">
            <span className="absolute -inset-1 rounded-full bg-destructive/20 opacity-20 blur-xl animate-pulse" />
            <div className="relative flex items-center justify-center size-16 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
              <AlertCircle className="size-8" />
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            A Fatal Error Occurred
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            The application crashed unexpectedly. Please try resetting the page.
          </p>

          <div className="mt-8 flex justify-center w-full">
            <button
              onClick={() => reset()}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full sm:w-auto font-medium cursor-pointer"
              )}
            >
              <RotateCcw className="size-4 mr-2" />
              Reset Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

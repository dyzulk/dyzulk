"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Label } from "@workspace/ui/components/label";
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@workspace/ui/components/logo";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulating sending verification code
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/verify?email=${encodeURIComponent(email)}`);
    }, 1200);
  };

  return (
    <div className="space-y-6 rounded-none">
      {/* Mobile Branding (only visible when sidebar is hidden) */}
      <div className="flex items-center gap-2.5 font-mono text-sm tracking-wider lg:hidden rounded-none">
        <Logo className="size-7" />
        <span className="font-semibold">DYZULK DEV</span>
      </div>

      <Card className="border-zinc-200 dark:border-zinc-800 bg-card rounded-none shadow-none">
        <CardHeader className="space-y-1.5 pb-6 rounded-none">
          <CardTitle className="text-xl font-bold tracking-tight font-mono flex items-center gap-2 rounded-none">
            <Sparkles className="size-4 text-emerald-500" /> Sign In
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground rounded-none">
            Enter your email to receive a passwordless login code, or sign in with your provider.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 rounded-none">
          {/* Email form */}
          <form onSubmit={handleEmailSubmit} className="space-y-3.5 rounded-none">
            <div className="space-y-1.5 rounded-none">
              <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="rounded-none border-zinc-200 dark:border-zinc-800 bg-background text-sm focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-white h-10"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full rounded-none bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 flex items-center justify-center gap-2 font-mono h-10 text-sm"
              disabled={isLoading || !email}
            >
              {isLoading ? (
                <div className="size-4 animate-spin border-2 border-current border-t-transparent" />
              ) : (
                <>
                  Send Code <ArrowRight className="size-3.5" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative rounded-none py-2">
            <div className="absolute inset-0 flex items-center rounded-none">
              <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase rounded-none">
              <span className="bg-card px-3 text-zinc-400 font-mono text-[10px] tracking-widest">
                or continue with
              </span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-2.5 rounded-none">
            <Button
              variant="outline"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  router.push("/");
                }, 1000);
              }}
              disabled={isLoading}
              className="rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center justify-center gap-2 font-mono h-10 text-xs"
            >
              <SiGithub className="size-4 text-zinc-900 dark:text-zinc-100" /> GitHub
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  router.push("/");
                }, 1000);
              }}
              disabled={isLoading}
              className="rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center justify-center gap-2 font-mono h-10 text-xs"
            >
              <SiGoogle className="size-4 text-red-500" /> Google
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer Info */}
      <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 font-mono">
        By continuing, you agree to our{" "}
        <a href="#" className="underline hover:text-zinc-900 dark:hover:text-white">
          Terms
        </a>{" "}
        &{" "}
        <a href="#" className="underline hover:text-zinc-900 dark:hover:text-white">
          Privacy Policy
        </a>.
      </p>
    </div>
  );
}

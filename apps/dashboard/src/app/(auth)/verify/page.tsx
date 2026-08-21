"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@dyzulk/ui/components/card";
import { Logo } from "@dyzulk/ui/components/logo";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@dyzulk/ui/components/input-otp";
import { Skeleton } from "@dyzulk/ui/components/skeleton";
import { ArrowLeft, CheckCircle2, Mail, ShieldAlert } from "lucide-react";
import { useVerifyOTP } from "@/hooks/use-verify-otp";

function VerifyContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";

  const {
    otp,
    isVerifying,
    timer,
    canResend,
    isSuccess,
    error,
    handleResend,
    handleOtpChange,
    isChecking,
  } = useVerifyOTP(email);

  return (
    <div className="space-y-6 rounded-none">
      {/* Mobile Branding */}
      <div className="flex items-center gap-2.5 font-mono text-sm tracking-wider lg:hidden rounded-none">
        <Logo className="size-7" />
        <span className="font-semibold">DYZULK DEV</span>
      </div>

      <Card className="border-zinc-200 dark:border-zinc-800 bg-card rounded-none shadow-none">
        {isChecking ? (
          <CardContent className="p-6 space-y-6 flex flex-col items-center justify-center rounded-none">
            <div className="space-y-2 text-center w-full rounded-none">
              <Skeleton className="h-6 w-36 rounded-none animate-pulse mx-auto" />
              <Skeleton className="h-3.5 w-4/5 rounded-none animate-pulse mx-auto" />
            </div>
            <div className="flex gap-2 justify-center py-4 rounded-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <React.Fragment key={i}>
                  <Skeleton className="size-11 rounded-none animate-pulse" />
                  {i === 2 && <div className="w-4 shrink-0" />}
                </React.Fragment>
              ))}
            </div>
            <div className="w-full space-y-3 pt-2 text-center rounded-none">
              <Skeleton className="h-4 w-48 rounded-none animate-pulse mx-auto" />
              <Skeleton className="h-8 w-full rounded-none animate-pulse" />
            </div>
          </CardContent>
        ) : (
          <>
            <CardHeader className="space-y-1.5 pb-6 rounded-none">
              <CardTitle className="text-xl font-bold tracking-tight font-mono flex items-center gap-2 rounded-none">
                {isSuccess ? (
                  <>
                    <CheckCircle2 className="size-5 text-emerald-500 animate-bounce" /> Verified
                  </>
                ) : (
                  <>
                    <Mail className="size-5 text-emerald-500" /> Verify Email
                  </>
                )}
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground rounded-none">
                {isSuccess 
                  ? "Authentication successful. Redirecting you..."
                  : `We've sent a 6-digit confirmation code to ${email}.`
                }
              </CardDescription>
              {error && (
                <div className="text-xs font-mono text-red-500 bg-red-50 dark:bg-red-950/30 p-2 border border-red-200 dark:border-red-900 rounded-none mt-2 w-full text-center">
                  {error}
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6 flex flex-col items-center justify-center rounded-none">
              {/* OTP Code Input */}
              <div className="space-y-2 flex flex-col items-center justify-center w-full rounded-none">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={handleOtpChange}
                  disabled={isVerifying || isSuccess}
                  containerClassName="justify-center"
                >
                  <InputOTPGroup className="gap-1.5">
                    <InputOTPSlot index={0} className="size-11 text-base font-mono border rounded-none" />
                    <InputOTPSlot index={1} className="size-11 text-base font-mono border rounded-none" />
                    <InputOTPSlot index={2} className="size-11 text-base font-mono border rounded-none" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup className="gap-1.5">
                    <InputOTPSlot index={3} className="size-11 text-base font-mono border rounded-none" />
                    <InputOTPSlot index={4} className="size-11 text-base font-mono border rounded-none" />
                    <InputOTPSlot index={5} className="size-11 text-base font-mono border rounded-none" />
                  </InputOTPGroup>
                </InputOTP>

                {isVerifying && (
                  <p className="text-[11px] text-zinc-400 font-mono mt-2 animate-pulse">
                    Verifying passcode...
                  </p>
                )}
              </div>

              {/* Resend Actions */}
              <div className="w-full text-center space-y-3 pt-2 rounded-none">
                <p className="text-[11px] text-zinc-400 font-mono">
                  Didn't receive the code?{" "}
                  {canResend ? (
                    <button
                      onClick={handleResend}
                      className="text-zinc-950 dark:text-white underline hover:no-underline font-semibold"
                    >
                      Resend Code
                    </button>
                  ) : (
                    <span className="text-zinc-500 font-semibold">
                      Resend in {timer}s
                    </span>
                  )}
                </p>

                <Link href="/login" className="w-full block">
                  <Button
                    variant="ghost"
                    disabled={isVerifying || isSuccess}
                    className="rounded-none font-mono text-[11px] text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 h-8 w-full flex items-center justify-center gap-1.5"
                  >
                    <ArrowLeft className="size-3" /> Back to Login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </>
        )}
      </Card>

      <div className="flex items-center gap-2 p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-500 font-mono rounded-none">
        <ShieldAlert className="size-4 text-amber-500 shrink-0" />
        <span>For safety, never share this code or click links forwarded to you.</span>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center space-y-4 py-12 rounded-none">
        <div className="size-8 animate-spin border-4 border-zinc-950 dark:border-white border-t-transparent rounded-full" />
        <p className="text-xs font-mono text-zinc-400">Loading screen...</p>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  );
}

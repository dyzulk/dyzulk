"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Logo } from "@workspace/ui/components/logo";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@workspace/ui/components/input-otp";
import { ArrowLeft, CheckCircle2, Mail, ShieldAlert } from "lucide-react";

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";
  
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Timer countdown logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    if (!canResend) return;
    setTimer(60);
    setCanResend(false);
    // Simulating resending OTP
  };

  const handleOTPComplete = (value: string) => {
    setIsVerifying(true);
    
    // Simulate API call to verify OTP
    setTimeout(() => {
      setIsVerifying(false);
      setIsSuccess(true);
      
      // Navigate to dashboard after short delay
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }, 1500);
  };

  const handleOtpChange = (val: string) => {
    setOtp(val);
    if (val.length === 6) {
      handleOTPComplete(val);
    }
  };

  return (
    <div className="space-y-6 rounded-none">
      {/* Mobile Branding */}
      <div className="flex items-center gap-2.5 font-mono text-sm tracking-wider lg:hidden rounded-none">
        <Logo className="size-7" />
        <span className="font-semibold">DYZULK DEV</span>
      </div>

      <Card className="border-zinc-200 dark:border-zinc-800 bg-card rounded-none shadow-none">
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

            <Button
              variant="ghost"
              onClick={() => router.push("/login")}
              disabled={isVerifying || isSuccess}
              className="rounded-none font-mono text-[11px] text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 h-8 w-full flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="size-3" /> Back to Login
            </Button>
          </div>
        </CardContent>
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

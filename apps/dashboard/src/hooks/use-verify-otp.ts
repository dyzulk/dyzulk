import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { verifyOTPAction, sendOTPAction } from "@/actions/auth";

export function useVerifyOTP(email: string) {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsChecking(false), 500);
    return () => clearTimeout(timer);
  }, []);

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

  const handleResend = async () => {
    if (!canResend) return;
    setTimer(60);
    setCanResend(false);
    setError(null);
    try {
      const res = await sendOTPAction(email);
      if (!res.success) {
        setError(res.error || "Failed to resend code");
        setCanResend(true);
        setTimer(0);
      }
    } catch (err) {
      setError("Failed to resend code. Please try again.");
      setCanResend(true);
      setTimer(0);
    }
  };

  const handleOTPComplete = async (value: string) => {
    setIsVerifying(true);
    setError(null);
    try {
      const res = await verifyOTPAction(email, value);
      setIsVerifying(false);
      if (res.success) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setError(res.error || "Verification failed");
        setOtp("");
      }
    } catch (err) {
      setIsVerifying(false);
      setError("An unexpected error occurred during verification.");
      setOtp("");
    }
  };

  const handleOtpChange = (val: string) => {
    setOtp(val);
    if (val.length === 6) {
      handleOTPComplete(val);
    }
  };

  return {
    otp,
    isVerifying,
    timer,
    canResend,
    isSuccess,
    error,
    handleResend,
    handleOtpChange,
    isChecking,
  };
}

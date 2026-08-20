import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendOTPAction } from "@/actions/auth";

export function useLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError(null);
    try {
      const res = await sendOTPAction(email);
      if (res.success) {
        router.push(`/verify?email=${encodeURIComponent(email)}`);
      } else {
        setError(res.error || "Failed to send verification code");
        setIsLoading(false);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = (provider: "github" | "google") => {
    setIsLoading(true);
    // Simulating OAuth redirect (e.g. to /api/auth/login/[provider])
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return {
    email,
    setEmail,
    isLoading,
    error,
    handleEmailSubmit,
    handleOAuthLogin,
  };
}

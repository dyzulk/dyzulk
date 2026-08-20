import * as React from "react";

interface OtpVerificationEmailProps {
  code: string;
}

export function OtpVerificationEmail({ code }: OtpVerificationEmailProps) {
  return (
    <div style={{
      fontFamily: "Inter, Roboto, sans-serif",
      backgroundColor: "#ffffff",
      color: "#111111",
      padding: "24px",
      border: "1px solid #e5e7eb",
    }}>
      <h2 style={{
        fontSize: "20px",
        fontWeight: 600,
        marginBottom: "16px",
      }}>
        Verify your email address
      </h2>
      <p style={{
        fontSize: "14px",
        lineHeight: "20px",
        color: "#4b5563",
        marginBottom: "24px",
      }}>
        Here is your verification code. It is valid for 15 minutes.
      </p>
      <div style={{
        fontSize: "24px",
        fontWeight: "bold",
        letterSpacing: "4px",
        backgroundColor: "#f3f4f6",
        padding: "12px 24px",
        display: "inline-block",
        border: "1px solid #e5e7eb",
        color: "#111111",
      }}>
        {code}
      </div>
      <p style={{
        fontSize: "12px",
        color: "#9ca3af",
        marginTop: "24px",
      }}>
        If you did not request this code, you can safely ignore this email.
      </p>
    </div>
  );
}

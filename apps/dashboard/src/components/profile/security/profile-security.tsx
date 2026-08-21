"use client";

import React from "react";
import { useProfileSettings } from "@/hooks/use-profile-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Switch } from "@dyzulk/ui/components/switch";
import { Check } from "lucide-react";

export function ProfileSecurity() {
  const {
    tfaEnabled,
    setTfaEnabled,
    isPasswordResetSent,
    handleResetPassword,
  } = useProfileSettings();

  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      {/* Reset Password */}
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Password</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Request a link to reset your password.
          </p>
        </div>

        <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <h4 className="font-bold text-foreground">Reset password</h4>
            <p className="text-[10px] text-muted-foreground">
              We'll email you a secure link to continue.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {isPasswordResetSent && (
              <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                <Check className="size-3.5" /> Sent link
              </span>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleResetPassword}
              className="rounded-none border-zinc-200 dark:border-zinc-800 h-9 font-semibold"
            >
              Send link
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 2FA switch */}
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Security</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Enable extra security for your account.
          </p>
        </div>

        <CardContent className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="font-bold text-foreground">Enable two-factor authentication</h4>
              <p className="text-[10px] text-muted-foreground leading-normal max-w-md">
                When enabled, you will be prompted for a secure, random token from your phone's authentication application.
              </p>
            </div>
            <Switch
              checked={tfaEnabled}
              onCheckedChange={setTfaEnabled}
              className="rounded-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

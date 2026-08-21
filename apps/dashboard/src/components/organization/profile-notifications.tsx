"use client";

import React from "react";
import { useProfileSettings } from "@/hooks/use-profile-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Checkbox } from "@dyzulk/ui/components/checkbox";
import { Label } from "@dyzulk/ui/components/label";

export function ProfileNotifications() {
  const {
    notifyEmail,
    setNotifyEmail,
    notifySecurity,
    setNotifySecurity,
    notifyUpdates,
    setNotifyUpdates,
  } = useProfileSettings();

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saved notification preferences:", {
      notifyEmail,
      notifySecurity,
      notifyUpdates,
    });
  };

  return (
    <div className="w-full font-mono text-xs rounded-none">
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Notifications</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Configure how you want to receive alerts and notifications.
          </p>
        </div>

        <CardContent className="p-5">
          <form onSubmit={handleSaveNotifications} className="space-y-6">
            <div className="space-y-4 rounded-none">
              {/* Notification 1 */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="notify-email"
                  checked={notifyEmail}
                  onCheckedChange={(checked) => setNotifyEmail(!!checked)}
                  className="rounded-none mt-0.5"
                />
                <div className="space-y-0.5">
                  <Label htmlFor="notify-email" className="font-bold text-foreground font-mono text-xs cursor-pointer">
                    Deployment successes
                  </Label>
                  <p className="text-[10px] text-muted-foreground">
                    Get email reports for successful deployments in production environments.
                  </p>
                </div>
              </div>

              {/* Notification 2 */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="notify-security"
                  checked={notifySecurity}
                  onCheckedChange={(checked) => setNotifySecurity(!!checked)}
                  className="rounded-none mt-0.5"
                />
                <div className="space-y-0.5">
                  <Label htmlFor="notify-security" className="font-bold text-foreground font-mono text-xs cursor-pointer">
                    Security alerts
                  </Label>
                  <p className="text-[10px] text-muted-foreground">
                    Get notified about password changes, 2FA logins, active key revisions, and organizational access modifications.
                  </p>
                </div>
              </div>

              {/* Notification 3 */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="notify-updates"
                  checked={notifyUpdates}
                  onCheckedChange={(checked) => setNotifyUpdates(!!checked)}
                  className="rounded-none mt-0.5"
                />
                <div className="space-y-0.5">
                  <Label htmlFor="notify-updates" className="font-bold text-foreground font-mono text-xs cursor-pointer">
                    Weekly newsletters
                  </Label>
                  <p className="text-[10px] text-muted-foreground">
                    Receive product highlights, release notes, and developer guides.
                  </p>
                </div>
              </div>
            </div>

            <Button type="submit" variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 h-9 font-semibold mt-4">
              Save preferences
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

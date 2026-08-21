"use client";

import React from "react";
import { useProfileSettings } from "@/hooks/use-profile-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Input } from "@dyzulk/ui/components/input";
import { Label } from "@dyzulk/ui/components/label";

export function ProfileGeneral() {
  const {
    name,
    setName,
    email,
    setEmail,
    handleUpdateProfile,
    handleDeactivateAccount,
  } = useProfileSettings();

  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">General</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            General settings related to your profile.
          </p>
        </div>

        <CardContent className="p-5 space-y-6">
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="profile-name" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                Name
              </Label>
              <Input
                id="profile-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-none max-w-md font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9"
              />
              <p className="text-[10px] text-muted-foreground mt-0.5">Your full name.</p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="profile-email" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                Email
              </Label>
              <Input
                id="profile-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-none max-w-md font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9"
              />
              <p className="text-[10px] text-muted-foreground mt-0.5">
                The email address used for authentication and notifications.
              </p>
            </div>

            <Button type="submit" variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 h-9 font-semibold">
              Save changes
            </Button>
          </form>

          <hr className="border-zinc-200 dark:border-zinc-800" />

          {/* Profile photo */}
          <div className="space-y-2">
            <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
              Profile photo
            </Label>
            <p className="text-[10px] text-muted-foreground -mt-1">
              Used for attribution on deployments and other events.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <div className="size-12 bg-green-100 dark:bg-green-950/20 text-green-600 dark:text-green-400 font-bold text-lg flex items-center justify-center border border-green-200 dark:border-green-900/50 rounded-none select-none">
                {name.charAt(0).toUpperCase()}
              </div>
              <Button variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 font-semibold h-9">
                Upload file
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="rounded-none border border-red-200 dark:border-red-950 bg-background shadow-none">
        <div className="p-4 border-b border-red-200 dark:border-red-950 bg-red-50/20 dark:bg-red-950/5">
          <h3 className="font-bold text-sm text-red-600 dark:text-red-400">Danger</h3>
          <p className="text-[11px] text-red-500/80 mt-0.5">
            Destructive settings that cannot be undone.
          </p>
        </div>

        <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <h4 className="font-bold text-foreground">Deactivate user account</h4>
            <p className="text-[10px] text-muted-foreground">
              Deactivating your account will permanently delete all user data. You should download any data you wish to retain.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDeactivateAccount}
            className="rounded-none border-red-200 hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 hover:text-red-700 h-9 font-semibold"
          >
            Deactivate user account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import React from "react";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Input } from "@dyzulk/ui/components/input";
import { Label } from "@dyzulk/ui/components/label";

interface ProfileGeneralFormProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  handleUpdateProfile: (e: React.FormEvent) => void;
}

export function ProfileGeneralForm({
  name,
  setName,
  email,
  setEmail,
  handleUpdateProfile,
}: ProfileGeneralFormProps) {
  return (
    <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 group-hover:bg-primary/[0.01] transition-colors duration-300">
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
              className="rounded-none max-w-md font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary/50 transition-all duration-300"
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
              className="rounded-none max-w-md font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary/50 transition-all duration-300"
            />
            <p className="text-[10px] text-muted-foreground mt-0.5">
              The email address used for authentication and notifications.
            </p>
          </div>

          <Button
            type="submit"
            variant="outline"
            size="sm"
            className="rounded-none border-zinc-200 dark:border-zinc-800 hover:border-primary/30 hover:bg-primary/5 h-9 font-semibold transition-all duration-300 cursor-pointer"
          >
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
            <div className="size-12 bg-green-100 dark:bg-green-950/20 text-green-600 dark:text-green-400 font-bold text-lg flex items-center justify-center border border-green-200 dark:border-green-900/50 rounded-none select-none group-hover:scale-105 transition-transform duration-300">
              {name ? name.charAt(0).toUpperCase() : "U"}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-zinc-200 dark:border-zinc-800 hover:border-primary/30 hover:bg-primary/5 font-semibold h-9 transition-all duration-300 cursor-pointer"
            >
              Upload file
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

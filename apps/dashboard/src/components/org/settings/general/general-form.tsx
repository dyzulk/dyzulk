"use client";

import React from "react";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Input } from "@dyzulk/ui/components/input";
import { Label } from "@dyzulk/ui/components/label";
import { Switch } from "@dyzulk/ui/components/switch";

interface GeneralFormProps {
  orgName: string;
  setOrgName: (name: string) => void;
  enforce2fa: boolean;
  setEnforce2fa: (enforce: boolean) => void;
  handleUpdateGeneral: (e: React.FormEvent) => void;
}

export function GeneralForm({
  orgName,
  setOrgName,
  enforce2fa,
  setEnforce2fa,
  handleUpdateGeneral,
}: GeneralFormProps) {
  return (
    <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 group-hover:bg-primary/[0.01] transition-colors duration-300">
        <h3 className="font-bold text-sm text-foreground">General</h3>
        <p className="text-[11px] text-muted-foreground mt-0.5">
          General settings related to this organization.
        </p>
      </div>

      <CardContent className="p-5 space-y-6">
        {/* Org name input */}
        <form onSubmit={handleUpdateGeneral} className="space-y-2">
          <Label htmlFor="org-name" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
            Organization name
          </Label>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              id="org-name"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="rounded-none max-w-md font-mono text-xs border-zinc-200 dark:border-zinc-800 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary/50 h-9 transition-all duration-300"
            />
            <Button
              type="submit"
              variant="outline"
              size="sm"
              className="rounded-none border-zinc-200 dark:border-zinc-800 hover:border-primary/30 hover:bg-primary/5 h-9 font-semibold transition-all duration-300 cursor-pointer"
            >
              Save
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">
            Your handle is {orgName.toLowerCase()}.{" "}
            <a href="#" className="text-zinc-950 dark:text-zinc-50 font-bold hover:underline">
              Change
            </a>
          </p>
        </form>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* Org Avatar */}
        <div className="space-y-2">
          <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
            Organization avatar
          </Label>
          <p className="text-[10px] text-muted-foreground -mt-1">
            Add an image to identify your organization.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <div className="size-12 bg-pink-100 dark:bg-pink-950/20 text-pink-600 dark:text-pink-400 font-bold text-lg flex items-center justify-center border border-pink-200 dark:border-pink-900/50 rounded-none select-none group-hover:scale-105 transition-transform duration-300">
              {orgName.charAt(0).toUpperCase()}
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

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* Enforce 2FA switch */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <Label htmlFor="enforce-2fa" className="font-bold text-foreground">
              Enforce two-factor authentication
            </Label>
            <p className="text-[10px] text-muted-foreground">
              Require two-factor authentication to access {orgName}.
            </p>
          </div>
          <Switch
            id="enforce-2fa"
            checked={enforce2fa}
            onCheckedChange={setEnforce2fa}
            className="rounded-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}

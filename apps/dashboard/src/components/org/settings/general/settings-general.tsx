"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useOrganizationSettings } from "@/hooks/use-organization-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Input } from "@dyzulk/ui/components/input";
import { Label } from "@dyzulk/ui/components/label";
import { Switch } from "@dyzulk/ui/components/switch";

export function SettingsGeneral() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  const {
    orgName,
    setOrgName,
    enforce2fa,
    setEnforce2fa,
    handleUpdateGeneral,
    handleDeleteOrganization,
  } = useOrganizationSettings(orgSlug);

  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
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
                className="rounded-none max-w-md font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9"
              />
              <Button type="submit" variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 h-9 font-semibold">
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
              <div className="size-12 bg-pink-100 dark:bg-pink-950/20 text-pink-600 dark:text-pink-400 font-bold text-lg flex items-center justify-center border border-pink-200 dark:border-pink-900/50 rounded-none select-none">
                {orgName.charAt(0).toUpperCase()}
              </div>
              <Button variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 font-semibold h-9">
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
            <h4 className="font-bold text-foreground">Delete organization</h4>
            <p className="text-[10px] text-muted-foreground">
              Deleting your organization will permanently delete all of its applications, environments, and resources.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDeleteOrganization}
            className="rounded-none border-red-200 hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 hover:text-red-700 h-9 font-semibold"
          >
            Delete organization
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

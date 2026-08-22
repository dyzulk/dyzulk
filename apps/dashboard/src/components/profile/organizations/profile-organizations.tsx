"use client";

import React from "react";
import { useProfileSettings } from "@/hooks/use-profile-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Skeleton } from "@dyzulk/ui/components/skeleton";

export function ProfileOrganizations() {
  const { userOrgs, handleLeaveOrganization, isLoading } = useProfileSettings();

  return (
    <div className="w-full font-mono text-xs rounded-none">
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Organizations</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            View the organizations you are a member of and leave any you no longer need.
          </p>
        </div>

        <CardContent className="p-5">
          {isLoading ? (
            <div className="border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none overflow-hidden">
              {Array.from({ length: 2 }).map((_, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between gap-4 bg-background">
                  <div className="flex items-center gap-3 w-full max-w-xs rounded-none">
                    <Skeleton className="size-8 rounded-none animate-pulse" />
                    <div className="space-y-1.5 flex-1 rounded-none">
                      <Skeleton className="h-3.5 w-24 rounded-none animate-pulse" />
                      <Skeleton className="h-3 w-12 rounded-none animate-pulse" />
                    </div>
                  </div>
                  <Skeleton className="h-8 w-28 rounded-none animate-pulse" />
                </div>
              ))}
            </div>
          ) : userOrgs.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              You are not a member of any organization.
            </div>
          ) : (
            <div className="border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none overflow-hidden">
              {userOrgs.map((org) => (
                <div key={org.id} className="p-4 flex items-center justify-between gap-4 bg-background">
                  <div className="flex items-center gap-3">
                    <div className="size-8 flex items-center justify-center bg-pink-100 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-900/50 text-pink-600 dark:text-pink-400 font-bold rounded-none select-none">
                      {org.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="font-mono text-xs">
                      <span className="font-bold text-foreground">{org.name}</span>
                      <span className="block text-[10px] text-muted-foreground mt-0.5">{org.role}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleLeaveOrganization(org.id)}
                    className="rounded-none border-red-200 hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 hover:text-red-700 h-8 font-semibold"
                  >
                    Leave organization
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useOrganizationSettings } from "@/hooks/use-organization-settings";
import { Skeleton } from "@dyzulk/ui/components/skeleton";

import { GeneralForm } from "./general-form";
import { DangerZone } from "./danger-zone";

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
    isLoading,
  } = useOrganizationSettings(orgSlug);

  if (isLoading) {
    return (
      <div className="space-y-6 w-full font-mono text-xs rounded-none">
        <div className="border border-zinc-200 dark:border-zinc-800 bg-background shadow-none p-5 space-y-6 rounded-none">
          <div className="space-y-2 rounded-none">
            <Skeleton className="h-3 w-32 rounded-none animate-pulse" />
            <div className="flex gap-3">
              <Skeleton className="h-9 w-full max-w-md rounded-none animate-pulse" />
              <Skeleton className="h-9 w-16 rounded-none animate-pulse" />
            </div>
            <Skeleton className="h-3 w-40 rounded-none animate-pulse" />
          </div>
          <hr className="border-zinc-200 dark:border-zinc-800" />
          <div className="space-y-2 rounded-none">
            <Skeleton className="h-3 w-36 rounded-none animate-pulse" />
            <Skeleton className="h-3.5 w-64 rounded-none animate-pulse" />
            <div className="flex items-center gap-4 mt-2">
              <Skeleton className="size-12 rounded-none animate-pulse" />
              <Skeleton className="h-9 w-28 rounded-none animate-pulse" />
            </div>
          </div>
          <hr className="border-zinc-200 dark:border-zinc-800" />
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 rounded-none flex-1">
              <Skeleton className="h-4 w-56 rounded-none animate-pulse" />
              <Skeleton className="h-3 w-64 rounded-none animate-pulse" />
            </div>
            <Skeleton className="h-6 w-10 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      <GeneralForm
        orgName={orgName}
        setOrgName={setOrgName}
        enforce2fa={enforce2fa}
        setEnforce2fa={setEnforce2fa}
        handleUpdateGeneral={handleUpdateGeneral}
      />

      <DangerZone handleDeleteOrganization={handleDeleteOrganization} />
    </div>
  );
}

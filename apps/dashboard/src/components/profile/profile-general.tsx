"use client";

import React from "react";
import { useProfileSettings } from "@/hooks/use-profile-settings";
import { Skeleton } from "@dyzulk/ui/components/skeleton";
import { ProfileGeneralForm } from "./general/profile-general-form";
import { ProfileDangerZone } from "./general/profile-danger-zone";

export function ProfileGeneral() {
  const {
    name,
    setName,
    email,
    setEmail,
    handleUpdateProfile,
    handleDeactivateAccount,
    isLoading,
  } = useProfileSettings();

  if (isLoading) {
    return (
      <div className="space-y-6 w-full font-mono text-xs rounded-none">
        <div className="border border-zinc-200 dark:border-zinc-800 bg-background p-5 space-y-6 rounded-none">
          <div className="space-y-1.5 rounded-none">
            <Skeleton className="h-3 w-16 rounded-none animate-pulse" />
            <Skeleton className="h-9 w-full max-w-md rounded-none animate-pulse" />
            <Skeleton className="h-3 w-32 rounded-none animate-pulse" />
          </div>
          <div className="space-y-1.5 rounded-none">
            <Skeleton className="h-3 w-16 rounded-none animate-pulse" />
            <Skeleton className="h-9 w-full max-w-md rounded-none animate-pulse" />
            <Skeleton className="h-3 w-64 rounded-none animate-pulse" />
          </div>
          <Skeleton className="h-9 w-28 rounded-none animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      <ProfileGeneralForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleUpdateProfile={handleUpdateProfile}
      />

      <ProfileDangerZone handleDeactivateAccount={handleDeactivateAccount} />
    </div>
  );
}

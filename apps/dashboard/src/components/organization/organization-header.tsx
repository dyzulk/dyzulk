"use client";

import React from "react";

interface OrganizationHeaderProps {
  orgName: string;
}

export function OrganizationHeader({ orgName }: OrganizationHeaderProps) {
  const initial = orgName.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-4 py-8 max-w-7xl mx-auto px-4 rounded-none">
      <div className="size-12 flex items-center justify-center bg-pink-100 dark:bg-pink-950/30 text-pink-700 dark:text-pink-400 text-2xl font-bold font-mono rounded-none border border-pink-200 dark:border-pink-900/50 select-none">
        {initial}
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-foreground font-mono">
        {orgName}
      </h1>
    </div>
  );
}

import React from "react";

interface OrganizationHeaderProps {
  orgName: string;
}

export function OrganizationHeader({ orgName }: OrganizationHeaderProps) {
  return (
    <div className="flex items-center gap-3 pt-4 pb-2 rounded-none border-b border-zinc-100 dark:border-zinc-900">
      <div className="size-10 flex items-center justify-center bg-pink-100 dark:bg-pink-950/30 text-pink-700 dark:text-pink-400 text-lg font-bold font-mono rounded-none border border-pink-200 dark:border-pink-900/50 select-none">
        {orgName.charAt(0).toUpperCase()}
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground font-mono">
        {orgName}
      </h1>
    </div>
  );
}

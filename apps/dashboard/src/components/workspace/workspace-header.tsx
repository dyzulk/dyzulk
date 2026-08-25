"use client";

import React from "react";
import { Button } from "@dyzulk/ui/components/button";
import { Logo } from "@dyzulk/ui/components/logo";

interface WorkspaceHeaderProps {
  orgName: string;
}

export function WorkspaceHeader({ orgName }: WorkspaceHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 border border-zinc-200 dark:border-zinc-800 bg-card rounded-none shadow-md">
      <div className="flex items-center gap-4 rounded-none">
        <Logo className="size-10 shrink-0" />
        <div className="rounded-none">
          <h1 className="text-3xl font-bold tracking-tight font-mono">{orgName} Workspace</h1>
          <p className="text-muted-foreground text-sm">Enterprise client workspace and active services node monitor.</p>
        </div>
      </div>
      <Button className="rounded-none tracking-wide font-mono bg-primary text-primary-foreground hover:bg-primary/90 font-semibold cursor-pointer">
        NEW CLUSTERS
      </Button>
    </div>
  );
}

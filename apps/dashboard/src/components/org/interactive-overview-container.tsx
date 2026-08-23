"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";

import { OverviewEmptyState } from "./overview-empty-state";

interface InteractiveOverviewContainerProps {
  orgName: string;
  orgSlug: string;
  applicationsGrid: React.ReactNode;
  deploymentHistory: React.ReactNode;
}

export function InteractiveOverviewContainer({
  orgName,
  orgSlug,
  applicationsGrid,
  deploymentHistory,
}: InteractiveOverviewContainerProps) {
  const [isEmpty, setIsEmpty] = useState(false);

  if (isEmpty) {
    return (
      <OverviewEmptyState
        orgName={orgName}
        orgSlug={orgSlug}
        onShowMockData={() => setIsEmpty(false)}
      />
    );
  }

  return (
    <>
      {/* Upper header section for Overview content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-none">
        <div className="rounded-none">
          <h2 className="text-lg font-bold font-mono tracking-wide text-foreground">
            Overview
          </h2>
          <p className="text-muted-foreground text-xs">
            Manage your recently deployed applications and active environments.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEmpty(true)}
            className="font-mono text-xs rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer"
          >
            Show Empty State
          </Button>
          <Link href={`/${orgSlug}/applications/create`} passHref legacyBehavior>
            <Button className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-4 cursor-pointer">
              <Plus className="size-3.5 mr-1.5" /> New application
            </Button>
          </Link>
        </div>
      </div>

      {/* Main layout container (recently deployed & latest deployments) */}
      <div className="flex flex-col gap-8 rounded-none">
        {/* Recently Deployed */}
        <div className="rounded-none">
          <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-4">
            Recently deployed
          </h3>
          {applicationsGrid}
        </div>

        {/* Latest Deployments */}
        <div className="rounded-none">
          <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-4">
            Latest deployments
          </h3>
          {deploymentHistory}
        </div>
      </div>
    </>
  );
}

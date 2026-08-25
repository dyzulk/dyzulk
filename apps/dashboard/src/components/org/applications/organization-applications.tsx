"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";

import { ApplicationsList } from "./applications-list";
import { ApplicationsEmptyState } from "./applications-empty-state";
import { MOCK_APPLICATIONS } from "@/lib/mock-data";

interface OrganizationApplicationsProps {
  orgSlug: string;
}

export function OrganizationApplications({ orgSlug }: OrganizationApplicationsProps) {
  const [isEmpty, setIsEmpty] = useState(false);

  if (isEmpty) {
    return (
      <ApplicationsEmptyState
        orgSlug={orgSlug}
        onShowMockData={() => setIsEmpty(false)}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 rounded-none flex flex-col gap-6 w-full font-mono text-xs">
      {/* Sub-header inside page content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-none">
        <div className="rounded-none">
          <h2 className="text-lg font-bold font-mono tracking-wide text-foreground">
            All applications
          </h2>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEmpty(true)}
            className="font-mono text-xs rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            Show Empty State
          </Button>
          <Link href={`/${orgSlug}/applications/create`} passHref legacyBehavior>
            <Button className="rounded-none font-mono text-xs tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-9 px-4 cursor-pointer">
              <Plus className="size-3.5 mr-1.5" /> New application
            </Button>
          </Link>
        </div>
      </div>

      {/* Applications List */}
      <ApplicationsList applications={MOCK_APPLICATIONS} orgSlug={orgSlug} />
    </div>
  );
}

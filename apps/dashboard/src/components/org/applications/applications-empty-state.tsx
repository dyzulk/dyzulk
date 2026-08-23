"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";

interface ApplicationsEmptyStateProps {
  orgSlug: string;
  onShowMockData: () => void;
}

export function ApplicationsEmptyState({ orgSlug, onShowMockData }: ApplicationsEmptyStateProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 rounded-none w-full font-mono text-xs">
      {/* Toggle state info banner */}
      <div className="mb-6 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={onShowMockData}
          className="font-mono text-xs rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          Show Mock Data
        </Button>
      </div>

      {/* Empty State Layout */}
      <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 p-20 flex flex-col items-center justify-center text-center rounded-none min-h-[400px]">
        <div className="mb-6 text-zinc-300 dark:text-zinc-700">
          <svg
            className="size-20 mx-auto"
            viewBox="0 0 120 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M60 20 L95 40 L60 60 L25 40 Z" />
            <path d="M25 40 L25 80 L60 100 L60 60 Z" />
            <path d="M60 60 L60 100 L95 80 L95 40 Z" />
            <path d="M60 40 L95 20 M25 80 M60 20 M60 100" />
          </svg>
        </div>

        <h2 className="text-xl font-bold font-mono tracking-wide mb-1 text-foreground">
          No applications yet
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm mb-6">
          Get started and create your first application.
        </p>

        <Link href={`/${orgSlug}/applications/create`} passHref legacyBehavior>
          <Button className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-10 px-6">
            <Plus className="size-4 mr-2" /> New application
          </Button>
        </Link>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { SiGithub, SiReact, SiSvelte, SiVuedotjs, SiLaravel } from "@icons-pack/react-simple-icons";
import { MoreHorizontal, Plus, Cpu } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import { Card } from "@dyzulk/ui/components/card";
import { MOCK_APPLICATIONS } from "@/lib/mock-data";

interface OrganizationApplicationsProps {
  orgSlug: string;
}

export function OrganizationApplications({ orgSlug }: OrganizationApplicationsProps) {
  const [isEmpty, setIsEmpty] = useState(false);

  // Render correct icon based on technology tag
  const renderTechIcon = (tech: string) => {
    switch (tech) {
      case "react":
        return <SiReact className="size-3.5 text-sky-500" />;
      case "svelte":
        return <SiSvelte className="size-3.5 text-orange-500" />;
      case "vue":
        return <SiVuedotjs className="size-3.5 text-emerald-500" />;
      case "laravel":
        return <SiLaravel className="size-3.5 text-red-500" />;
      default:
        return <Cpu className="size-3.5 text-zinc-500" />;
    }
  };

  if (isEmpty) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 rounded-none">
        {/* Toggle state info banner */}
        <div className="mb-6 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEmpty(false)}
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

          <Button className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-10 px-6">
            <Plus className="size-4 mr-2" /> New application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 rounded-none flex flex-col gap-6">
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
          <Button className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-4">
            <Plus className="size-3.5 mr-1.5" /> New application
          </Button>
        </div>
      </div>

      {/* Applications List */}
      <div className="flex flex-col gap-4 rounded-none">
        {MOCK_APPLICATIONS.map((app) => (
          <Card
            key={app.id}
            className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            {/* Header row: Icon, App Name, Git Repo & action trigger */}
            <div className="py-2.5 px-4 flex items-center justify-between gap-4 rounded-none">
              <div className="flex items-center gap-2.5 rounded-none">
                <div className="size-6 bg-zinc-50 dark:bg-zinc-900/50 text-foreground flex items-center justify-center rounded-none font-bold">
                  {renderTechIcon(app.tech)}
                </div>
                <h3 className="font-sans font-medium text-sm text-foreground">
                  {app.name}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground rounded-none">
                <div className="flex items-center gap-1.5">
                  <SiGithub className="size-3.5 text-zinc-400" />
                  <span className="text-zinc-500 text-xs">{app.repo}</span>
                </div>
                <button className="text-zinc-400 hover:text-foreground transition-colors p-1">
                  <MoreHorizontal className="size-3.5" />
                </button>
              </div>
            </div>

            {/* Inner row: status, commit message & time ago */}
            <div className="py-2 px-4 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="size-2 bg-blue-500 rounded-full shrink-0 animate-pulse" />
                <span className="text-zinc-600 dark:text-zinc-400 lowercase">
                  {app.env}
                </span>
              </div>

              {app.status === "deployed" ? (
                <div className="text-zinc-500 text-[11px] truncate max-w-md">
                  {/* Branch icon and commit message */}
                  <span className="text-zinc-300 dark:text-zinc-800 mr-2">o-</span>
                  {app.commitDesc}
                </div>
              ) : (
                <div className="text-zinc-500 text-[11px]">
                  <span className="text-zinc-300 dark:text-zinc-800 mr-2">o-</span>
                  Initial commit by Laravel Cloud
                </div>
              )}

              <div className="text-muted-foreground text-[11px] text-right sm:text-left shrink-0">
                {app.timeAgo}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

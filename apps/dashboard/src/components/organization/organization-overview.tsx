"use client";

import React, { useState } from "react";
import { SiGithub, SiReact } from "@icons-pack/react-simple-icons";
import { Check, ExternalLink, GitBranch, Terminal, Plus, Cpu, Info } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";

interface OrganizationOverviewProps {
  orgSlug: string;
}

export function OrganizationOverview({ orgSlug }: OrganizationOverviewProps) {
  const [isEmpty, setIsEmpty] = useState(false);

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
          {/* Centered Isometric Cube Illustration using SVG */}
          <div className="mb-6 text-zinc-300 dark:text-zinc-700">
            <svg
              className="size-20 mx-auto"
              viewBox="0 0 120 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Isometric boxes */}
              <path d="M60 20 L95 40 L60 60 L25 40 Z" />
              <path d="M25 40 L25 80 L60 100 L60 60 Z" />
              <path d="M60 60 L60 100 L95 80 L95 40 Z" />
              {/* Inner details to represent multiple cubes stacked */}
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
    <div className="max-w-7xl mx-auto px-4 py-8 rounded-none flex flex-col gap-8">
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
            className="font-mono text-xs rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            Show Empty State
          </Button>
          <Button className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-4">
            <Plus className="size-3.5 mr-1.5" /> New application
          </Button>
        </div>
      </div>

      {/* Main layout container (recently deployed & latest deployments) */}
      <div className="flex flex-col gap-6 rounded-none">
        {/* Recently Deployed Card */}
        <div className="rounded-none">
          <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Recently deployed
          </h3>
          <Card className="rounded-none border-zinc-200 dark:border-zinc-800 bg-background shadow-none hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 rounded-none">
              <div className="flex flex-col gap-4 rounded-none w-full">
                {/* App name and env badge */}
                <div className="flex items-center gap-3 rounded-none">
                  <div className="size-10 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center rounded-none font-bold">
                    <SiReact className="size-5" />
                  </div>
                  <div className="rounded-none">
                    <h4 className="font-mono font-bold text-base text-foreground flex items-center gap-2">
                      react-starter-kit
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 rounded-none">
                        <span className="size-1.5 bg-blue-500 rounded-full" />
                        production
                      </span>
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      react-starter-kit-production-2z9fr2.laravel.cloud
                    </p>
                  </div>
                </div>

                {/* Git branch and commit URL details */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground font-mono rounded-none">
                  <div className="flex items-center gap-1">
                    <SiGithub className="size-3.5" />
                    <span className="text-foreground">dyzulk/react-starter-kit</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="size-3.5 text-zinc-400" />
                    <span>main</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 bg-emerald-500 rounded-full" />
                    <span>Deployed a month ago</span>
                  </div>
                </div>
              </div>

              {/* Status check circle / button */}
              <div className="shrink-0 flex items-center gap-2">
                <a
                  href="https://react-starter-kit-production-2z9fr2.laravel.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none font-mono text-xs border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 gap-1.5 h-9 px-3 text-foreground transition-colors"
                >
                  <ExternalLink className="size-3.5" /> Visit site
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Latest Deployments list */}
        <div className="rounded-none">
          <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Latest deployments
          </h3>
          <div className="border border-zinc-200 dark:border-zinc-800 bg-background divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none">
            {/* Deploy 1 */}
            <div className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10 transition-colors rounded-none">
              <div className="flex items-center gap-3 rounded-none">
                <div className="size-6 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
                  <Check className="size-3.5" />
                </div>
                <div className="rounded-none">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="font-bold text-foreground hover:underline cursor-pointer">cc37f44</span>
                    <span className="text-zinc-300 dark:text-zinc-800">·</span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Cpu className="size-3" /> react-starter-kit · production
                    </span>
                  </div>
                  <p className="text-xs text-foreground mt-0.5 font-mono">
                    Initial commit by Laravel Cloud
                  </p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground font-mono self-end md:self-center">
                Deployed from <span className="text-foreground bg-zinc-100 dark:bg-zinc-900 px-1 py-0.5 rounded-none font-bold">main</span> a month ago by <span className="text-foreground">DyzulkDev</span>
              </div>
            </div>

            {/* Deploy 2 */}
            <div className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10 transition-colors rounded-none">
              <div className="flex items-center gap-3 rounded-none">
                <div className="size-6 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
                  <Check className="size-3.5" />
                </div>
                <div className="rounded-none">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="font-bold text-foreground hover:underline cursor-pointer">485d683</span>
                    <span className="text-zinc-300 dark:text-zinc-800">·</span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Cpu className="size-3" /> react-starter-kit · production
                    </span>
                  </div>
                  <p className="text-xs text-foreground mt-0.5 font-mono">
                    Initial commit by Laravel Cloud
                  </p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground font-mono self-end md:self-center">
                Deployed from <span className="text-foreground bg-zinc-100 dark:bg-zinc-900 px-1 py-0.5 rounded-none font-bold">main</span> a month ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

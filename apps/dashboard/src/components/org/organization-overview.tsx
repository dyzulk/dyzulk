"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiGithub, SiReact, SiSvelte, SiVuedotjs, SiLaravel } from "@icons-pack/react-simple-icons";
import { Check, ExternalLink, GitBranch, Plus, Cpu, RefreshCw } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";

interface OrganizationOverviewProps {
  orgName: string;
  orgSlug: string;
}

import { MOCK_APPLICATIONS, MOCK_DEPLOYMENTS } from "@/lib/mock-data";

export function OrganizationOverview({ orgName, orgSlug }: OrganizationOverviewProps) {
  const [isEmpty, setIsEmpty] = useState(false);

  // Render correct icon based on technology tag
  const renderTechIcon = (tech: string) => {
    switch (tech) {
      case "react":
        return <SiReact className="size-5 text-sky-500" />;
      case "svelte":
        return <SiSvelte className="size-5 text-orange-500" />;
      case "vue":
        return <SiVuedotjs className="size-5 text-emerald-500" />;
      case "laravel":
        return <SiLaravel className="size-5 text-red-500" />;
      default:
        return <Cpu className="size-5 text-zinc-500" />;
    }
  };

  if (isEmpty) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 rounded-none flex flex-col gap-6">
        {/* Organization name and pink avatar badge inside overview content */}
        <div className="flex items-center gap-3 pt-4 pb-2 rounded-none">
          <div className="size-10 flex items-center justify-center bg-pink-100 dark:bg-pink-950/30 text-pink-700 dark:text-pink-400 text-lg font-bold font-mono rounded-none border border-pink-200 dark:border-pink-900/50 select-none">
            {orgName.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground font-mono">
            {orgName}
          </h1>
        </div>

        {/* Toggle state info banner */}
        <div className="flex justify-end">
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

          <Link href={`/${orgSlug}/applications/create`} passHref>
            <Button className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-10 px-6">
              <Plus className="size-4 mr-2" /> New application
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Display only max 4 items from the mock list as requested
  const visibleApplications = MOCK_APPLICATIONS.slice(0, 4);
  const visibleDeployments = MOCK_DEPLOYMENTS.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 rounded-none flex flex-col gap-8">
      {/* Organization name and pink avatar badge inside overview content */}
      <div className="flex items-center gap-3 pt-4 pb-2 rounded-none border-b border-zinc-100 dark:border-zinc-900">
        <div className="size-10 flex items-center justify-center bg-pink-100 dark:bg-pink-950/30 text-pink-700 dark:text-pink-400 text-lg font-bold font-mono rounded-none border border-pink-200 dark:border-pink-900/50 select-none">
          {orgName.charAt(0).toUpperCase()}
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground font-mono">
          {orgName}
        </h1>
      </div>

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
          <Link href={`/${orgSlug}/applications/create`} passHref>
            <Button className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-4">
              <Plus className="size-3.5 mr-1.5" /> New application
            </Button>
          </Link>
        </div>
      </div>

      {/* Main layout container (recently deployed & latest deployments) */}
      <div className="flex flex-col gap-8 rounded-none">
        
        {/* Recently Deployed (Grid - 2 Columns) */}
        <div className="rounded-none">
          <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-4">
            Recently deployed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-none">
            {visibleApplications.map((app) => (
              <Card
                key={app.id}
                className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <CardContent className="p-6 flex flex-col gap-4 rounded-none">
                  {/* App icon, name and environment pill */}
                  <div className="flex items-start justify-between gap-4 rounded-none">
                    <div className="flex items-center gap-3 rounded-none">
                      <div className="size-10 bg-zinc-50 dark:bg-zinc-900 text-foreground border border-zinc-200 dark:border-zinc-800 flex items-center justify-center rounded-none font-bold">
                        {renderTechIcon(app.tech)}
                      </div>
                      <div className="rounded-none">
                        <h4 className="font-mono font-bold text-sm text-foreground flex items-center gap-2">
                          {app.name}
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-mono tracking-wider uppercase bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 rounded-none">
                            <span className="size-1 bg-blue-500 rounded-full" />
                            {app.env}
                          </span>
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5 font-mono truncate max-w-[200px] sm:max-w-xs">
                          {app.domain}
                        </p>
                      </div>
                    </div>

                    {app.status === "deployed" && (
                      <a
                        href={`https://${app.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-none font-mono text-[10px] border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 gap-1 h-7 px-2.5 text-foreground transition-colors shrink-0"
                      >
                        <ExternalLink className="size-3" /> Visit
                      </a>
                    )}
                  </div>

                  {/* Git metadata details */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground font-mono rounded-none border-t border-zinc-100 dark:border-zinc-900 pt-3">
                    <div className="flex items-center gap-1">
                      <SiGithub className="size-3 text-zinc-400" />
                      <span className="text-foreground truncate max-w-[150px]">{app.repo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="size-3 text-zinc-400" />
                      <span>{app.branch}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <span>•</span>
                      <span>{app.timeAgo}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Latest Deployments (List layout) */}
        <div className="rounded-none">
          <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-4">
            Latest deployments
          </h3>
          <div className="border border-zinc-200 dark:border-zinc-800 bg-background divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none">
            {visibleDeployments.map((dep) => (
              <div
                key={dep.id}
                className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10 transition-colors rounded-none"
              >
                <div className="flex items-center gap-3 rounded-none">
                  {dep.status === "deploying" ? (
                    <div className="size-6 bg-blue-50 dark:bg-blue-950/20 text-blue-500 dark:text-blue-400 rounded-full flex items-center justify-center animate-spin">
                      <RefreshCw className="size-3.5" />
                    </div>
                  ) : (
                    <div className="size-6 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
                      <Check className="size-3.5" />
                    </div>
                  )}
                  <div className="rounded-none">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="font-bold text-foreground hover:underline cursor-pointer">
                        {dep.commit}
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-800">·</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Cpu className="size-3" /> {dep.appName} · {dep.env}
                      </span>
                    </div>
                    <p className="text-xs text-foreground mt-0.5 font-mono">
                      {dep.description}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground font-mono self-end md:self-center">
                  Deployed from{" "}
                  <span className="text-foreground bg-zinc-100 dark:bg-zinc-900 px-1 py-0.5 rounded-none font-bold">
                    {dep.branch}
                  </span>{" "}
                  {dep.timeAgo}
                  {dep.author && (
                    <>
                      {" "}
                      by <span className="text-foreground">{dep.author}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

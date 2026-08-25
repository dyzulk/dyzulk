"use client";

import React from "react";
import Link from "next/link";
import { SiGithub, SiReact, SiSvelte, SiVuedotjs, SiLaravel } from "@icons-pack/react-simple-icons";
import { MoreHorizontal, Cpu, ExternalLink } from "lucide-react";
import { Card } from "@dyzulk/ui/components/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@dyzulk/ui/components/dropdown-menu";

interface Application {
  id: string;
  name: string;
  env: string;
  repo: string;
  domain: string;
  branch: string;
  status: string;
  timeAgo: string;
  tech: string;
  commitDesc: string;
}

interface ApplicationsListProps {
  applications: Application[];
  orgSlug: string;
}

export function ApplicationsList({ applications, orgSlug }: ApplicationsListProps) {
  const renderTechIcon = (tech: string) => {
    switch (tech) {
      case "react":
        return <SiReact className="size-3.5 text-sky-500 group-hover:scale-110 transition-transform duration-300" />;
      case "svelte":
        return <SiSvelte className="size-3.5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />;
      case "vue":
        return <SiVuedotjs className="size-3.5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />;
      case "laravel":
        return <SiLaravel className="size-3.5 text-red-500 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Cpu className="size-3.5 text-zinc-500 group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-none">
      {applications.map((app) => (
        <Card
          key={app.id}
          className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-card shadow-md hover:border-primary/50 dark:hover:border-primary/40 transition-all duration-300"
        >
          {/* Header row: Icon, App Name, Git Repo & action trigger */}
          <div className="py-2.5 px-4 flex items-center justify-between gap-4 rounded-none bg-zinc-100/50 dark:bg-zinc-900/40 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
            <div className="flex items-center gap-2.5 rounded-none">
              <div className="size-6 bg-zinc-200/60 dark:bg-zinc-900 text-foreground border border-zinc-300/60 dark:border-zinc-800/80 flex items-center justify-center rounded-none font-bold group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                {renderTechIcon(app.tech)}
              </div>
              <h3 className="font-mono font-bold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                {app.name}
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground rounded-none">
              <div className="flex items-center gap-1.5">
                <SiGithub className="size-3.5 text-zinc-400" />
                <span className="text-foreground">{app.repo}</span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-zinc-400 hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors p-1 cursor-pointer">
                  <MoreHorizontal className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 font-mono text-xs rounded-none">
                  <DropdownMenuItem render={<Link href={`/${orgSlug}/applications/settings`} className="w-full text-left px-2 py-1.5 rounded-none" />}>
                    Settings
                  </DropdownMenuItem>
                  {app.status === "deployed" && (
                    <DropdownMenuItem render={<a href={`https://${app.domain}`} target="_blank" rel="noopener noreferrer" className="w-full text-left px-2 py-1.5 flex items-center gap-1 rounded-none" />}>
                      <ExternalLink className="size-3" /> Visit Site
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Inner row: status, commit message & time ago */}
          <div className="py-2 px-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="size-2 bg-emerald-500 rounded-full shrink-0 animate-pulse" />
              <span className="font-semibold text-zinc-950 dark:text-zinc-100 uppercase text-[10px] tracking-wider">
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
  );
}

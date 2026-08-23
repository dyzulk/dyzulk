"use client";

import React from "react";
import { SiGithub, SiReact, SiSvelte, SiVuedotjs, SiLaravel } from "@icons-pack/react-simple-icons";
import { Cpu, ExternalLink, GitBranch } from "lucide-react";
import { Card, CardContent } from "@dyzulk/ui/components/card";

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

interface ApplicationGridProps {
  applications: Application[];
}

export function ApplicationGrid({ applications }: ApplicationGridProps) {
  const renderTechIcon = (tech: string) => {
    switch (tech) {
      case "react":
        return <SiReact className="size-5 text-sky-500 group-hover:scale-110 transition-transform duration-300" />;
      case "svelte":
        return <SiSvelte className="size-5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />;
      case "vue":
        return <SiVuedotjs className="size-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />;
      case "laravel":
        return <SiLaravel className="size-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Cpu className="size-5 text-zinc-500 group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-none">
      {applications.map((app) => (
        <Card
          key={app.id}
          className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/50 dark:hover:border-primary/40 hover:shadow-md transition-all duration-300"
        >
          <CardContent className="p-6 flex flex-col gap-4 rounded-none">
            {/* App icon, name and environment pill */}
            <div className="flex items-start justify-between gap-4 rounded-none">
              <div className="flex items-center gap-3 rounded-none">
                <div className="size-10 bg-zinc-50 dark:bg-zinc-900 text-foreground border border-zinc-200 dark:border-zinc-800 flex items-center justify-center rounded-none font-bold group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors duration-300">
                  {renderTechIcon(app.tech)}
                </div>
                <div className="rounded-none">
                  <h4 className="font-mono font-bold text-sm text-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
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
                  className="inline-flex items-center justify-center rounded-none font-mono text-[10px] border border-zinc-200 dark:border-zinc-800 hover:border-primary/30 hover:bg-primary/5 gap-1 h-7 px-2.5 text-foreground transition-all shrink-0"
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
  );
}

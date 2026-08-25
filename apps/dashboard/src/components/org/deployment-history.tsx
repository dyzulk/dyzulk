import React from "react";
import { Check, Cpu, RefreshCw } from "lucide-react";

interface Deployment {
  id: string;
  commit: string;
  appName: string;
  env: string;
  description: string;
  branch: string;
  timeAgo: string;
  author: string;
  status: string;
}

interface DeploymentHistoryProps {
  deployments: Deployment[];
}

export function DeploymentHistory({ deployments }: DeploymentHistoryProps) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 bg-card divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none shadow-md">
      {deployments.map((dep) => (
        <div
          key={dep.id}
          className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10 transition-colors duration-300 rounded-none group"
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
                <span className="font-bold text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                  {dep.commit}
                </span>
                <span className="text-zinc-300 dark:text-zinc-800">·</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Cpu className="size-3 text-zinc-400 group-hover:text-primary transition-colors duration-300" /> {dep.appName} · {dep.env}
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
  );
}

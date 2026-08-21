"use client";

import React from "react";
import { SiGithub, SiGitlab, SiBitbucket } from "@icons-pack/react-simple-icons";
import { useProfileSettings } from "@/hooks/use-profile-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { MoreHorizontal } from "lucide-react";

export function ProfileSourceControl() {
  const {
    connectedAccounts,
    handleConnectProvider,
    handleDisconnectProvider,
  } = useProfileSettings();

  const renderIcon = (provider: string) => {
    switch (provider) {
      case "github":
        return <SiGithub className="size-4 text-zinc-950 dark:text-zinc-50" />;
      case "gitlab":
        return <SiGitlab className="size-4 text-orange-500" />;
      case "bitbucket":
        return <SiBitbucket className="size-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full font-mono text-xs rounded-none">
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Connected accounts</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Connect your source control accounts to use them across Laravel Cloud.
          </p>
        </div>

        <CardContent className="p-5 space-y-4">
          <div className="border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none overflow-hidden">
            {connectedAccounts.map((account) => (
              <div key={account.provider} className="p-3.5 flex items-center justify-between gap-4 bg-background">
                <div className="flex items-center gap-3">
                  <div className="size-8 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-foreground font-bold text-xs rounded-none select-none">
                    {renderIcon(account.provider)}
                  </div>
                  
                  <div className="font-mono text-xs">
                    <span className="font-bold text-foreground capitalize">
                      {account.provider}
                    </span>
                    <span className="block text-[10px] text-muted-foreground mt-0.5">
                      {account.connected
                        ? `Connected as @${account.username}`
                        : `Connect your ${account.provider === "github" ? "GitHub" : account.provider === "gitlab" ? "GitLab" : "Bitbucket"} account.`}
                    </span>
                  </div>
                </div>

                <div>
                  {account.connected ? (
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDisconnectProvider(account.provider)}
                        className="rounded-none border-zinc-200 dark:border-zinc-800 h-8 font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                      >
                        Disconnect
                      </Button>
                      <button className="p-1.5 text-zinc-400 hover:text-foreground transition-colors">
                        <MoreHorizontal className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleConnectProvider(account.provider)}
                      className="rounded-none border-zinc-200 dark:border-zinc-800 h-8 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

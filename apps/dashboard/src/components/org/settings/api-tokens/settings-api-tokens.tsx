"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useOrganizationSettings } from "@/hooks/use-organization-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Input } from "@dyzulk/ui/components/input";
import { Label } from "@dyzulk/ui/components/label";
import { Checkbox } from "@dyzulk/ui/components/checkbox";
import { Skeleton } from "@dyzulk/ui/components/skeleton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@dyzulk/ui/components/sheet";
import { Key, Plus, Copy, Check } from "lucide-react";

export function SettingsApiTokens() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  const {
    apiTokens,
    isNewTokenSheetOpen,
    setIsNewTokenSheetOpen,
    newTokenName,
    setNewTokenName,
    selectedScopes,
    generatedToken,
    setGeneratedToken,
    handleCreateToken,
    toggleScope,
    isLoading,
  } = useOrganizationSettings(orgSlug);

  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (generatedToken) {
      navigator.clipboard.writeText(generatedToken);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scopesList = [
    { id: "read-apps", label: "Read applications" },
    { id: "read-resources", label: "Read resources" },
    { id: "write-deployments", label: "Write deployments" },
  ];

  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      <div className="rounded-none">
        <h3 className="text-sm font-bold font-mono tracking-wide text-foreground uppercase">
          API tokens
        </h3>
        <p className="text-xs font-mono text-muted-foreground mt-1 lowercase first-letter:uppercase">
          Use Cloud's API to create and manage your applications and resources.{" "}
          <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:underline">
            Learn more in the API documentation.
          </a>
        </p>
      </div>

      {isLoading ? (
        <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
          <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 group-hover:bg-primary/[0.01] transition-colors duration-300 flex justify-between items-center rounded-none">
            <Skeleton className="h-4 w-24 rounded-none animate-pulse" />
            <Skeleton className="h-8 w-24 rounded-none animate-pulse" />
          </div>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-4 flex justify-between items-center bg-background rounded-none">
                <div className="space-y-2 flex-1 rounded-none">
                  <Skeleton className="h-4 w-32 rounded-none animate-pulse" />
                  <Skeleton className="h-3 w-40 rounded-none animate-pulse" />
                </div>
                <Skeleton className="h-3.5 w-12 rounded-none animate-pulse" />
              </div>
            ))}
          </div>
        </Card>
      ) : apiTokens.length === 0 ? (
        <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
          <CardContent className="p-20 text-center rounded-none flex flex-col items-center justify-center">
            <div className="mb-6 text-zinc-300 dark:text-zinc-700">
              <Key className="size-16 mx-auto" />
            </div>
            <h4 className="font-bold text-xs text-foreground mb-1">No API tokens yet</h4>
            <p className="text-muted-foreground text-[10px] max-w-sm mb-6">
              Create your first token to get started.
            </p>
            <Button
              onClick={() => {
                setGeneratedToken(null);
                setIsNewTokenSheetOpen(true);
              }}
              className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-10 px-6"
            >
              <Plus className="size-4 mr-2" /> New API token
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-sm hover:border-primary/30 transition-all duration-300">
          <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 group-hover:bg-primary/[0.01] transition-colors duration-300 flex justify-between items-center rounded-none">
            <h4 className="font-bold text-xs text-foreground uppercase tracking-wider">Active Tokens</h4>
            <Button
              onClick={() => {
                setGeneratedToken(null);
                setIsNewTokenSheetOpen(true);
              }}
              variant="outline"
              size="sm"
              className="rounded-none border-zinc-200 dark:border-zinc-800 h-8 font-semibold"
            >
              <Plus className="size-3 mr-1" /> New token
            </Button>
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none">
            {apiTokens.map((token) => (
              <div key={token.id} className="p-4 flex justify-between items-center bg-background rounded-none">
                <div className="space-y-1">
                  <div className="font-bold text-foreground">{token.name}</div>
                  <div className="text-[10px] text-muted-foreground">Created {token.createdAt}</div>
                </div>
                <div className="font-semibold text-muted-foreground text-[10px] uppercase">
                  Active
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Slide-over Drawer / Sheet for API token creation */}
      <Sheet open={isNewTokenSheetOpen} onOpenChange={setIsNewTokenSheetOpen}>
        <SheetContent className="rounded-none w-full max-w-md border-l border-zinc-200 dark:border-zinc-800 bg-background shadow-2xl p-6 font-mono text-xs overflow-y-auto">
          <SheetHeader className="pb-4 border-b border-zinc-100 dark:border-zinc-900/50">
            <SheetTitle className="text-sm font-bold uppercase tracking-wider text-foreground">
              New API token
            </SheetTitle>
            <p className="text-[10px] text-muted-foreground mt-1 lowercase first-letter:uppercase">
              Create a new token to access the Cloud API.
            </p>
          </SheetHeader>

          {generatedToken ? (
            <div className="pt-6 space-y-4">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-none">
                <p className="text-[10px] text-red-500 font-bold mb-2 uppercase tracking-wider">
                  Make sure to copy this token now. It will not be shown again.
                </p>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    readOnly
                    value={generatedToken}
                    className="w-full bg-background border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 font-mono text-xs rounded-none text-foreground focus:outline-none"
                  />
                  <Button
                    onClick={handleCopy}
                    size="sm"
                    className="rounded-none h-8 px-3 bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </Button>
                </div>
              </div>
              <Button
                onClick={() => setIsNewTokenSheetOpen(false)}
                className="w-full rounded-none uppercase font-mono tracking-wider font-bold bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-10 text-xs"
              >
                Close Drawer
              </Button>
            </div>
          ) : (
            <form onSubmit={handleCreateToken} className="space-y-6 pt-5">
              {/* Token Name input */}
              <div className="space-y-1.5">
                <Label htmlFor="token-name" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  Token Name
                </Label>
                <Input
                  id="token-name"
                  placeholder="production-token"
                  value={newTokenName}
                  onChange={(e) => setNewTokenName(e.target.value)}
                  className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary/50 transition-all duration-300"
                />
              </div>

              {/* Scopes selection */}
              <div className="space-y-3">
                <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
                  Scopes
                </Label>
                
                <div className="space-y-3 rounded-none">
                  {scopesList.map((scope) => (
                    <div key={scope.id} className="flex items-center gap-2.5">
                      <Checkbox
                        id={scope.id}
                        checked={selectedScopes.includes(scope.id)}
                        onCheckedChange={() => toggleScope(scope.id)}
                        className="rounded-none"
                      />
                      <Label htmlFor={scope.id} className="font-mono text-xs text-foreground cursor-pointer font-semibold">
                        {scope.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA submit */}
              <Button
                type="submit"
                className="w-full rounded-none uppercase font-mono tracking-wider font-bold bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-10 text-xs"
              >
                Generate Token
              </Button>
            </form>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

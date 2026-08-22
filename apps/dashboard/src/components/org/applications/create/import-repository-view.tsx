"use client";

import React, { useState } from "react";
import { SiGithub, SiGitlab, SiBitbucket, SiLaravel, SiSymfony, SiNextdotjs, SiNuxt } from "@icons-pack/react-simple-icons";
import { Search, ChevronDown, Plus, Globe } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import { Skeleton } from "@dyzulk/ui/components/skeleton";
import { GitRepository } from "@/hooks/use-create-application";

interface ImportRepositoryViewProps {
  repositories: GitRepository[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedProvider: "github" | "gitlab" | "bitbucket";
  onProviderChange: (provider: "github" | "gitlab" | "bitbucket") => void;
  onImport: (repoName: string) => void;
  isLoading: boolean;
}

export function ImportRepositoryView({
  repositories,
  searchQuery,
  onSearchChange,
  selectedProvider,
  onProviderChange,
  onImport,
  isLoading,
}: ImportRepositoryViewProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getProviderIcon = (p: typeof selectedProvider) => {
    switch (p) {
      case "github":
        return <SiGithub className="size-4" />;
      case "gitlab":
        return <SiGitlab className="size-4 text-orange-500" />;
      case "bitbucket":
        return <SiBitbucket className="size-4 text-blue-500" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 rounded-none font-mono text-xs">
      {/* Account and Search Header */}
      <div className="flex flex-col sm:flex-row gap-3 rounded-none">
        {/* Provider Switcher Dropdown */}
        <div className="relative shrink-0 rounded-none">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full sm:w-48 justify-between rounded-none border-zinc-200 dark:border-zinc-800 text-xs font-mono h-10 px-3 bg-background"
          >
            <div className="flex items-center gap-2">
              {getProviderIcon(selectedProvider)}
              <span className="capitalize">{selectedProvider === "github" ? "dyzulk" : selectedProvider}</span>
            </div>
            <ChevronDown className="size-3.5 text-muted-foreground" />
          </Button>

          {isOpen && (
            <div className="absolute left-0 mt-1 w-full sm:w-48 bg-background border border-zinc-200 dark:border-zinc-800 rounded-none shadow-xl z-50 p-1 space-y-0.5">
              <div className="px-2 py-1.5 text-[10px] text-muted-foreground uppercase font-bold border-b border-zinc-100 dark:border-zinc-900 mb-1">
                Source Control
              </div>
              
              <button
                onClick={() => {
                  onProviderChange("github");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-2 py-1.5 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors rounded-none ${
                  selectedProvider === "github" ? "text-foreground font-bold" : "text-muted-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <SiGithub className="size-3.5" />
                  <span>dyzulk</span>
                </div>
                {selectedProvider === "github" && <span className="size-1.5 bg-foreground rounded-full" />}
              </button>

              <button
                onClick={() => {
                  console.log("Add GitHub account clicked");
                  setIsOpen(false);
                }}
                className="w-full text-left px-2 py-1.5 flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-muted-foreground rounded-none border-t border-zinc-100 dark:border-zinc-900 mt-1"
              >
                <Plus className="size-3.5 text-zinc-400" />
                <span>Add GitHub account</span>
              </button>

              <button
                onClick={() => {
                  onProviderChange("gitlab");
                  setIsOpen(false);
                }}
                className="w-full text-left px-2 py-1.5 flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-muted-foreground rounded-none"
              >
                <SiGitlab className="size-3.5 text-orange-500" />
                <span>Connect GitLab</span>
              </button>

              <button
                onClick={() => {
                  onProviderChange("bitbucket");
                  setIsOpen(false);
                }}
                className="w-full text-left px-2 py-1.5 flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-muted-foreground rounded-none"
              >
                <SiBitbucket className="size-3.5 text-blue-500" />
                <span>Connect Bitbucket</span>
              </button>
            </div>
          )}
        </div>

        {/* Repository Search input */}
        <div className="relative flex-1 rounded-none">
          <Search className="absolute left-3.5 top-3 size-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search all repositories"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-background border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 rounded-none text-xs text-foreground placeholder-zinc-400"
          />
        </div>
      </div>

      {/* Repositories list wrapper */}
      <div className="border border-zinc-200 dark:border-zinc-800 bg-background rounded-none divide-y divide-zinc-200 dark:divide-zinc-800">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="py-3.5 px-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2.5 w-full max-w-xs">
                <Skeleton className="h-3.5 w-32 rounded-none animate-pulse" />
              </div>
              <div className="flex items-center gap-4 w-full max-w-sm justify-end">
                <Skeleton className="h-3 w-16 rounded-none animate-pulse" />
                <Skeleton className="h-7 w-16 rounded-none animate-pulse shrink-0" />
              </div>
            </div>
          ))
        ) : repositories.length > 0 ? (
          repositories.map((repo) => (
            <div
              key={repo.id}
              className="py-3 px-4 flex items-center justify-between hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-bold text-foreground hover:underline cursor-pointer" onClick={() => onImport(repo.name)}>
                  {repo.name}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-muted-foreground shrink-0">{repo.updatedAt}</span>
                <Button
                  onClick={() => onImport(repo.name)}
                  size="sm"
                  className="h-7 px-3 text-[10px] font-bold rounded-none uppercase tracking-wider bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                  Import
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center text-muted-foreground">
            No repositories found matching your search.
          </div>
        )}
      </div>

      {/* Supported tech stacks info badge */}
      <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-none">
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <div className="flex gap-1.5 items-center">
            <SiLaravel className="size-3 text-red-500" />
            <SiSymfony className="size-3 text-foreground" />
            <SiNextdotjs className="size-3 text-foreground" />
            <SiNuxt className="size-3 text-emerald-500" />
          </div>
          <span>Laravel, Symfony, Next.js, and Nuxt are supported.</span>
        </div>
        <a
          href="/docs"
          target="_blank"
          className="text-[10px] font-bold hover:underline inline-flex items-center gap-1 text-foreground"
        >
          <Globe className="size-3" />
          <span>View documentation</span>
        </a>
      </div>
    </div>
  );
}

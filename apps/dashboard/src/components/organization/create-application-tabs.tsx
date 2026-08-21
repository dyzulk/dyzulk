"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useCreateApplication } from "@/hooks/use-create-application";
import { ImportRepositoryView } from "./import-repository-view";
import { UseTemplateView } from "./use-template-view";

interface CreateApplicationTabsProps {
  orgSlug: string;
}

export function CreateApplicationTabs({ orgSlug }: CreateApplicationTabsProps) {
  const {
    activeTab,
    searchQuery,
    setSearchQuery,
    selectedProvider,
    setSelectedProvider,
    repositories,
    templates,
    handleSelectRepository,
    handleSelectTemplate,
    namespace,
  } = useCreateApplication();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 rounded-none flex flex-col gap-8">
      {/* Back button and page description */}
      <div className="flex flex-col gap-3 rounded-none">
        <Link
          href={`/${orgSlug}/applications`}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors font-bold w-fit"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to applications</span>
        </Link>
        <div className="rounded-none">
          <h1 className="text-2xl font-bold font-mono tracking-wide text-foreground">
            Create a new application
          </h1>
          <p className="text-muted-foreground font-mono text-xs mt-1">
            Select a repository, or start with a template.
          </p>
        </div>
      </div>

      {/* Tabs navigation headers */}
      <div className="flex border-b border-zinc-200 dark:border-zinc-800 rounded-none font-mono text-xs font-bold">
        <Link
          href={`/${orgSlug}/applications/create?from=repository&namespace=${namespace}&provider=${selectedProvider}`}
          className={`px-4 py-2 border-b-2 transition-colors rounded-none -mb-[2px] ${
            activeTab === "import"
              ? "border-foreground text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Import a repository
        </Link>
        <Link
          href={`/${orgSlug}/applications/create?from=template&namespace=${namespace}&provider=${selectedProvider}&v2=1`}
          className={`px-4 py-2 border-b-2 transition-colors rounded-none -mb-[2px] ${
            activeTab === "template"
              ? "border-foreground text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Use a template
        </Link>
      </div>

      {/* Render selected view content */}
      <div className="rounded-none">
        {activeTab === "import" ? (
          <ImportRepositoryView
            repositories={repositories}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedProvider={selectedProvider}
            onProviderChange={setSelectedProvider}
            onImport={handleSelectRepository}
          />
        ) : (
          <UseTemplateView templates={templates} onSelect={handleSelectTemplate} />
        )}
      </div>
    </div>
  );
}

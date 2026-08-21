import { useState, useMemo } from "react";

export interface GitRepository {
  id: string;
  name: string;
  updatedAt: string;
}

export interface ApplicationTemplate {
  id: string;
  name: string;
  description: string;
  tech: "laravel" | "react" | "vue" | "svelte";
  isStarter?: boolean;
}

export function useCreateApplication() {
  const [activeTab, setActiveTab] = useState<"import" | "template">("import");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<"github" | "gitlab" | "bitbucket">("github");
  
  // Mock git repositories for the logged-in user
  const [repositories] = useState<GitRepository[]>([
    { id: "repo-1", name: "dyzulk", updatedAt: "43 minutes ago" },
    { id: "repo-2", name: "laravel", updatedAt: "2 hours ago" },
    { id: "repo-3", name: "livewire-starter-kit", updatedAt: "2 hours ago" },
    { id: "repo-4", name: "svelte-starter-kit", updatedAt: "2 hours ago" },
    { id: "repo-5", name: "vue-starter-kit", updatedAt: "2 hours ago" },
    { id: "repo-6", name: "scripts", updatedAt: "8 hours ago" },
    { id: "repo-7", name: "mikrotik-typecheck", updatedAt: "3 days ago" },
    { id: "repo-8", name: "dyzulk-cloud", updatedAt: "11 days ago" },
  ]);

  // Mock templates
  const [templates] = useState<ApplicationTemplate[]>([
    { id: "tmpl-1", name: "Laravel", description: "A new, empty Laravel application", tech: "laravel" },
    { id: "tmpl-2", name: "React Starter Kit", description: "React, TypeScript, Inertia, shadcn/ui", tech: "react", isStarter: true },
    { id: "tmpl-3", name: "Vue Starter Kit", description: "Vue, TypeScript, Inertia, shadcn/ui", tech: "vue", isStarter: true },
    { id: "tmpl-4", name: "Livewire Starter Kit", description: "Livewire, Laravel Volt, Flux UI", tech: "laravel", isStarter: true },
    { id: "tmpl-5", name: "Svelte Starter Kit", description: "Svelte, TypeScript, Inertia, shadcn-svelte", tech: "svelte", isStarter: true },
  ]);

  // Filter repositories based on search
  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [repositories, searchQuery]);

  const handleSelectRepository = (repoName: string) => {
    console.log("Selected repository for import:", repoName);
  };

  const handleSelectTemplate = (templateId: string) => {
    console.log("Selected template to boot:", templateId);
  };

  return {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    selectedProvider,
    setSelectedProvider,
    repositories: filteredRepositories,
    templates,
    handleSelectRepository,
    handleSelectTemplate,
  };
}

import { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export interface GitRepository {
  id: string;
  name: string;
  updatedAt: string;
}

export interface ApplicationTemplate {
  id: string;
  name: string;
  description: string;
  tech: "nextjs" | "react" | "vue" | "svelte" | "node" | "python" | "go" | "laravel" | "wordpress";
  isStarter?: boolean;
}

export function useCreateApplication() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read active state directly from URL search parameters
  const fromParam = searchParams.get("from");
  const activeTab = fromParam === "template" ? "template" : "import";

  const providerParam = searchParams.get("provider");
  const selectedProvider: "github" | "gitlab" | "bitbucket" = (providerParam === "gitlab" || providerParam === "bitbucket") ? providerParam : "github";

  const [searchQuery, setSearchQuery] = useState("");
  const namespace = searchParams.get("namespace") || "dyzulk";

  // Mock git repositories for the logged-in user
  const repositories: GitRepository[] = [
    { id: "repo-1", name: "dyzulk", updatedAt: "43 minutes ago" },
    { id: "repo-2", name: "laravel", updatedAt: "2 hours ago" },
    { id: "repo-3", name: "livewire-starter-kit", updatedAt: "2 hours ago" },
    { id: "repo-4", name: "svelte-starter-kit", updatedAt: "2 hours ago" },
    { id: "repo-5", name: "vue-starter-kit", updatedAt: "2 hours ago" },
    { id: "repo-6", name: "scripts", updatedAt: "8 hours ago" },
    { id: "repo-7", name: "mikrotik-typecheck", updatedAt: "3 days ago" },
    { id: "repo-8", name: "dyzulk-cloud", updatedAt: "11 days ago" },
  ];

  // Mock templates
  const templates: ApplicationTemplate[] = [
    { id: "tmpl-1", name: "Next.js Boilerplate", description: "Next.js App Router template with Tailwind CSS and TypeScript", tech: "nextjs", isStarter: true },
    { id: "tmpl-2", name: "React SPA (Vite)", description: "Vite React SPA starter with TypeScript and Tailwind CSS", tech: "react", isStarter: true },
    { id: "tmpl-3", name: "Node.js Server", description: "Minimal Express API backend server in TypeScript", tech: "node", isStarter: true },
    { id: "tmpl-4", name: "Laravel Boilerplate", description: "Standard, clean Laravel framework installation", tech: "laravel", isStarter: true },
    { id: "tmpl-5", name: "SvelteKit Starter", description: "SvelteKit, Vite, TypeScript web application starter", tech: "svelte", isStarter: true },
    { id: "tmpl-6", name: "Python API", description: "FastAPI server with Pydantic schemas and auto docs", tech: "python", isStarter: true },
    { id: "tmpl-7", name: "Go Server", description: "High performance web server built with Go Fiber/Gin framework", tech: "go", isStarter: true },
    { id: "tmpl-8", name: "WordPress Starter", description: "Clean WordPress application template (database can be connected separately)", tech: "wordpress", isStarter: true },
  ];

  // Helper to push updated params to URL
  const updateUrlParams = (newParams: { from?: string; provider?: string; namespace?: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, val]) => {
      if (val === undefined) {
        params.delete(key);
      } else {
        params.set(key, val);
      }
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const setActiveTab = (tab: "import" | "template") => {
    updateUrlParams({
      from: tab === "template" ? "template" : "repository",
      // Reset namespace and provider defaults to keep URLs clean when toggling tabs
      namespace: tab === "import" ? "dyzulk" : undefined,
      provider: tab === "import" ? "github" : undefined,
    });
  };

  const setSelectedProvider = (provider: "github" | "gitlab" | "bitbucket") => {
    updateUrlParams({ provider });
  };

  // Filter repositories based on search
  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
    namespace,
  };
}


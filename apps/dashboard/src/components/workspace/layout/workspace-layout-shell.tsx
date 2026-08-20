"use client";

import React from "react";
import { ChevronDown, Plus, LogOut, LayoutDashboard, Settings, User } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import { Logo } from "@dyzulk/ui/components/logo";
import { useWorkspaceLayout } from "@/hooks/use-workspace-layout";
import { logoutAction } from "@/actions/auth";
import { useRouter } from "next/navigation";

interface WorkspaceLayoutShellProps {
  activeSlug: string;
  children: React.ReactNode;
}

export function WorkspaceLayoutShell({ activeSlug, children }: WorkspaceLayoutShellProps) {
  const router = useRouter();
  const {
    organizations,
    activeOrg,
    isLoading,
    isOpen,
    setIsOpen,
    handleSelectOrg,
    handleCreateOrgClick,
  } = useWorkspaceLayout(activeSlug);

  const handleLogout = async () => {
    const res = await logoutAction();
    if (res.success) {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground rounded-none">
      {/* Upper Navigation Bar */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-background/50 backdrop-blur-md sticky top-0 z-50 rounded-none">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between rounded-none">
          <div className="flex items-center gap-6 rounded-none">
            {/* Logo and App Title */}
            <div className="flex items-center gap-2 font-mono text-sm tracking-wider rounded-none">
              <Logo className="size-6" />
              <span className="font-bold hidden sm:inline">DYZULK</span>
            </div>

            {/* Separator Slash */}
            <span className="text-zinc-300 dark:text-zinc-800 font-mono text-lg select-none">/</span>

            {/* Organization Switcher Dropdown */}
            <div className="relative rounded-none">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors rounded-none focus:outline-none"
              >
                {isLoading ? (
                  <span className="text-zinc-400">Loading...</span>
                ) : (
                  <>
                    <span className="font-medium truncate max-w-[120px]">
                      {activeOrg?.name || "Pilih Workspace"}
                    </span>
                    <ChevronDown className="size-3.5 text-zinc-400 shrink-0" />
                  </>
                )}
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-1 w-56 border border-zinc-200 dark:border-zinc-800 bg-card rounded-none shadow-xl z-50 py-1 font-mono text-xs">
                  <div className="px-3 py-1.5 text-[10px] text-zinc-400 uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-900">
                    Daftar Organisasi
                  </div>
                  <div className="max-h-48 overflow-y-auto py-1">
                    {organizations.map((org) => (
                      <button
                        key={org.id}
                        onClick={() => handleSelectOrg(org.slug)}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors ${
                          org.slug === activeSlug ? "text-emerald-500 font-bold" : ""
                        }`}
                      >
                        <span className="truncate">{org.name}</span>
                        {org.slug === activeSlug && <span className="size-1.5 bg-emerald-500 rounded-full shrink-0" />}
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-zinc-100 dark:border-zinc-900 pt-1">
                    <button
                      onClick={handleCreateOrgClick}
                      className="w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 transition-colors font-semibold"
                    >
                      <Plus className="size-3.5" /> Buat Organisasi
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* User Account Actions / Logout */}
          <div className="flex items-center gap-3 rounded-none">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center gap-2 font-mono text-xs"
            >
              <LogOut className="size-3.5" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Workspace Body Content */}
      <main className="flex-1 w-full bg-background rounded-none">
        {children}
      </main>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Plus, Search, Sun, Moon } from "lucide-react";
import { Logo } from "@dyzulk/ui/components/logo";
import { useWorkspaceLayout } from "@/hooks/use-workspace-layout";
import { useWorkspaceHeader } from "@/hooks/use-workspace-header";
import { logoutAction } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { OnboardingPopover } from "./onboarding-popover";
import { ProfileMenuDropdown } from "./profile-menu-dropdown";
import { SearchCommandDialog } from "./search-command-dialog";
import { Skeleton } from "@dyzulk/ui/components/skeleton";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@dyzulk/ui/components/dropdown-menu";
import { Popover, PopoverTrigger } from "@dyzulk/ui/components/popover";

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

  const {
    resolvedTheme,
    toggleTheme,
    isProgressOpen,
    setIsProgressOpen,
    isProfileOpen,
    setIsProfileOpen,
    isSearchOpen,
    setIsSearchOpen,
    onboardingItems,
    completedCount,
    totalCount,
    isShipCollapsed,
    setIsShipCollapsed,
    isDiscoverCollapsed,
    setIsDiscoverCollapsed,
    handleSkipAll,
    handleChecklistItemClick,
  } = useWorkspaceHeader(activeSlug);

  // Local UI state for org switcher search filter
  const [orgSearch, setOrgSearch] = useState("");

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
            {/* Logo and App Title — navigates to home */}
            <Link href="/" className="flex items-center gap-2 font-mono text-sm tracking-wider rounded-none hover:opacity-80 transition-opacity">
              <Logo className="size-6" />
              <span className="font-bold hidden sm:inline">
                <span className="text-primary">Dyzulk</span>
                <span className="text-foreground">Cloud</span>
              </span>
            </Link>

            {/* Separator Slash */}
            <span className="text-zinc-300 dark:text-zinc-800 font-mono text-lg select-none">/</span>

            {/* Organization Switcher Dropdown */}
            <div className="relative rounded-none">
              <DropdownMenu open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (open) setOrgSearch(""); }}>
                <DropdownMenuTrigger
                  className="flex items-center justify-between gap-2 px-3 py-1.5 text-sm font-mono border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors rounded-none focus:outline-none h-8 w-36 cursor-pointer"
                >
                  {isLoading ? (
                    <Skeleton className="h-4 w-full rounded-none animate-pulse" />
                  ) : (
                    <>
                      <span className="font-medium truncate max-w-[120px]">
                        {activeOrg?.name || "Pilih Workspace"}
                      </span>
                      <ChevronDown className="size-3.5 text-zinc-400 shrink-0" />
                    </>
                  )}
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-64 rounded-none font-mono text-xs shadow-xl">
                  <div className="px-3 py-1.5 text-[10px] text-zinc-400 uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-900">
                    Daftar Organisasi
                  </div>

                  {/* Search input */}
                  <div className="px-2 py-1.5 border-b border-zinc-100 dark:border-zinc-900">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-none">
                      <Search className="size-3 text-zinc-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Cari organisasi..."
                        value={orgSearch}
                        onChange={(e) => setOrgSearch(e.target.value)}
                        className="w-full bg-transparent text-xs text-foreground placeholder:text-zinc-400 focus:outline-none"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="max-h-48 overflow-y-auto py-1">
                    {organizations
                      .filter((org) => org.name.toLowerCase().includes(orgSearch.toLowerCase()))
                      .map((org) => (
                      <button
                        key={org.id}
                        onClick={() => { handleSelectOrg(org.slug); setIsOpen(false); }}
                        className={`w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors rounded-none cursor-pointer ${
                          org.slug === activeSlug ? "text-primary font-bold" : ""
                        }`}
                      >
                        <span className={`size-5 shrink-0 flex items-center justify-center text-[10px] font-bold rounded-none border ${
                          org.slug === activeSlug
                            ? "bg-primary/10 border-primary/30 text-primary"
                            : "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500"
                        }`}>
                          {org.name.charAt(0).toUpperCase()}
                        </span>
                        <span className="truncate flex-1">{org.name}</span>
                        {org.slug === activeSlug && <span className="size-1.5 bg-primary rounded-full shrink-0" />}
                      </button>
                    ))}
                    {organizations.filter((org) => org.name.toLowerCase().includes(orgSearch.toLowerCase())).length === 0 && (
                      <div className="px-3 py-3 text-center text-zinc-400 text-[10px]">
                        Tidak ditemukan
                      </div>
                    )}
                  </div>

                  <div className="border-t border-zinc-100 dark:border-zinc-900 pt-1 pb-1">
                    <button
                      onClick={() => { handleCreateOrgClick(); setIsOpen(false); }}
                      className="w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 transition-colors font-semibold cursor-pointer"
                    >
                      <Plus className="size-3.5" /> Buat Organisasi
                    </button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Top navigation actions widgets */}
          <div className="flex items-center gap-3 rounded-none">
            {/* Onboarding Checklist Button */}
            <div className="relative rounded-none">
              <Popover open={isProgressOpen} onOpenChange={setIsProgressOpen}>
                <PopoverTrigger
                  className="flex items-center gap-2 px-3 py-1.5 font-mono text-xs border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors rounded-none focus:outline-none cursor-pointer"
                >
                  {/* Circular indicator */}
                  <span className="size-3.5 rounded-full border border-dashed border-zinc-400 dark:border-zinc-600 flex items-center justify-center text-[8px] font-bold text-zinc-500">
                    o
                  </span>
                  <span>{completedCount}/{totalCount}</span>
                </PopoverTrigger>

                <OnboardingPopover
                  onboardingItems={onboardingItems}
                  completedCount={completedCount}
                  totalCount={totalCount}
                  isShipCollapsed={isShipCollapsed}
                  setIsShipCollapsed={setIsShipCollapsed}
                  isDiscoverCollapsed={isDiscoverCollapsed}
                  setIsDiscoverCollapsed={setIsDiscoverCollapsed}
                  onSkipAll={() => { handleSkipAll(); setIsProgressOpen(false); }}
                  onItemClick={(item) => { handleChecklistItemClick(item); setIsProgressOpen(false); }}
                />
              </Popover>
            </div>

            {/* Search Trigger Bar button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-2.5 px-3 py-1.5 font-mono text-xs border border-zinc-200 dark:border-zinc-800 text-muted-foreground hover:text-foreground bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors rounded-none focus:outline-none w-44 justify-between"
            >
              <div className="flex items-center gap-1.5">
                <Search className="size-3.5 text-zinc-400" />
                <span>Search</span>
              </div>
              <span className="text-[9px] bg-zinc-200/50 dark:bg-zinc-800 px-1 py-0.5 rounded-none font-semibold">
                Ctrl+K
              </span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors rounded-none focus:outline-none flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="size-3.5 text-zinc-400 hover:text-foreground" />
              ) : (
                <Moon className="size-3.5 text-zinc-400 hover:text-foreground" />
              )}
            </button>

            {/* User Profile avatar dropdown */}
            <div className="relative rounded-none">
              <DropdownMenu open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                <DropdownMenuTrigger
                  className="size-8 bg-zinc-100 dark:bg-zinc-900 text-foreground border border-zinc-200 dark:border-zinc-800 flex items-center justify-center rounded-none font-bold font-mono text-sm focus:outline-none hover:bg-zinc-50 dark:hover:bg-zinc-950 cursor-pointer"
                >
                  {activeOrg?.name ? activeOrg.name.charAt(0).toUpperCase() : "D"}
                </DropdownMenuTrigger>

                <ProfileMenuDropdown
                  onLogout={() => { handleLogout(); setIsProfileOpen(false); }}
                  orgName={activeOrg?.name || "DyzulkDev"}
                />
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Body Content */}
      <main className="flex-1 w-full bg-background rounded-none">
        {children}
      </main>

      {/* Global search command Dialog popup */}
      <SearchCommandDialog
        isOpen={isSearchOpen}
        onOpenChange={setIsSearchOpen}
        orgSlug={activeSlug}
      />
    </div>
  );
}

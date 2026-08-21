import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export interface OnboardingItem {
  id: string;
  label: string;
  completed: boolean;
  href: string;
}

export function useWorkspaceHeader(orgSlug: string) {
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();

  // Navigation Popover states
  const [isProgressOpen, setIsProgressOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Accordion state inside onboarding progress dropdown
  const [isShipCollapsed, setIsShipCollapsed] = useState(false);
  const [isDiscoverCollapsed, setIsDiscoverCollapsed] = useState(false);

  // Onboarding items state
  const [onboardingItems, setOnboardingItems] = useState<OnboardingItem[]>([
    { id: "git", label: "Connect your Git provider", completed: true, href: `/new` },
    { id: "deploy", label: "Deploy your first app", completed: true, href: `/new` },
    { id: "database", label: "Add a database", completed: true, href: `/${orgSlug}/resources/databases` },
    { id: "domain", label: "Add a custom domain", completed: false, href: `/${orgSlug}/settings/billing` },
    { id: "limit", label: "Set a spending limit", completed: false, href: `/${orgSlug}/settings/billing` },
    { id: "api", label: "Explore the Cloud API", completed: false, href: `/${orgSlug}/settings/api-tokens` },
  ]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Keyboard shortcut Ctrl+K to trigger Command Search Dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const completedCount = onboardingItems.filter((i) => i.completed).length;
  const totalCount = onboardingItems.length;

  const handleSkipAll = () => {
    setOnboardingItems(onboardingItems.map((item) => ({ ...item, completed: true })));
    setIsProgressOpen(false);
  };

  const handleChecklistItemClick = (item: OnboardingItem) => {
    router.push(item.href);
    setIsProgressOpen(false);
  };

  return {
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
  };
}

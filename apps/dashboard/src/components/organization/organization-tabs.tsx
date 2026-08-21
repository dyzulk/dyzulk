"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface OrganizationTabsProps {
  orgSlug: string;
}

export function OrganizationTabs({ orgSlug }: OrganizationTabsProps) {
  const pathname = usePathname();

  const tabs = [
    { name: "Overview", href: `/${orgSlug}` },
    { name: "Applications", href: `/${orgSlug}/applications` },
    { name: "Resources", href: `/${orgSlug}/resources` },
    { name: "Usage", href: `/${orgSlug}/usage` },
    { name: "Settings", href: `/${orgSlug}/settings` },
  ];

  const getIsActive = (href: string) => {
    if (href === `/${orgSlug}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 bg-background rounded-none w-full">
      <nav className="flex space-x-8 max-w-7xl mx-auto px-4 rounded-none" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = getIsActive(tab.href);
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`py-4 px-1 border-b-2 font-mono text-xs tracking-wider uppercase transition-colors rounded-none ${
                isActive
                  ? "border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 font-bold"
                  : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

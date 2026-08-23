"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface OrganizationTabsProps {
  orgSlug: string;
}

export function OrganizationTabs({ orgSlug }: OrganizationTabsProps) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLAnchorElement>(null);

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

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (activeTabRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const activeEl = activeTabRef.current;
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();

      // Only scroll if active tab is not fully visible
      if (activeRect.left < containerRect.left || activeRect.right > containerRect.right) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [pathname]);

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 bg-background rounded-none w-full">
      <div className="max-w-7xl mx-auto px-4 rounded-none">
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide rounded-none"
        >
          <nav
            className="inline-flex items-center gap-1 rounded-none py-2.5 min-w-full font-mono text-xs"
            aria-label="Tabs"
          >
            {/* Inset/sunken tab container */}
            <div className="inline-flex items-center gap-0.5 rounded-none bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] p-1">
              {tabs.map((tab) => {
                const isActive = getIsActive(tab.href);
                return (
                  <Link
                    key={tab.name}
                    ref={isActive ? activeTabRef : undefined}
                    href={tab.href}
                    className={`px-3 py-1.5 tracking-wider uppercase transition-all whitespace-nowrap rounded-none select-none ${
                      isActive
                        ? "bg-background text-foreground font-bold border border-zinc-200 dark:border-zinc-700 shadow-sm"
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 border border-transparent"
                    }`}
                  >
                    {tab.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SettingsSidebarProps {
  orgSlug: string;
}

export function SettingsSidebar({ orgSlug }: SettingsSidebarProps) {
  const pathname = usePathname();

  const links = [
    { name: "General", href: `/${orgSlug}/settings/general` },
    { name: "Access", href: `/${orgSlug}/settings/access` },
    { name: "Billing", href: `/${orgSlug}/settings/billing` },
    { name: "Invoices", href: `/${orgSlug}/settings/invoices` },
    { name: "API tokens", href: `/${orgSlug}/settings/api-tokens` },
  ];

  const getIsActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="w-full md:w-48 shrink-0 rounded-none font-mono text-xs">
      <div className="flex flex-col gap-0.5 rounded-none bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] p-1">
        {links.map((link) => {
          const isActive = getIsActive(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`w-full px-3 py-1.5 text-left transition-all duration-300 rounded-none font-semibold select-none border ${
                isActive
                  ? "bg-primary text-primary-foreground font-bold border-primary shadow-xs"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-transparent"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}


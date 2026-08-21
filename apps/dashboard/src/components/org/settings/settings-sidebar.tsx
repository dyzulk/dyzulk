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
    <div className="w-full md:w-48 shrink-0 flex flex-col gap-1.5 rounded-none font-mono text-xs">
      {links.map((link) => {
        const isActive = getIsActive(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`w-full px-4 py-2 text-left transition-colors rounded-none font-semibold ${
              isActive
                ? "bg-zinc-100 dark:bg-zinc-900 text-foreground font-bold"
                : "text-muted-foreground hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-foreground"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

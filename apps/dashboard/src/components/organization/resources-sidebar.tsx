"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ResourcesSidebarProps {
  orgSlug: string;
}

export function ResourcesSidebar({ orgSlug }: ResourcesSidebarProps) {
  const pathname = usePathname();

  const links = [
    { name: "Databases", href: `/${orgSlug}/resources/databases` },
    { name: "Caches", href: `/${orgSlug}/resources/caches` },
    { name: "Object storage", href: `/${orgSlug}/resources/object-storage` },
    { name: "WebSockets", href: `/${orgSlug}/resources/websockets` },
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

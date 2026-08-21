"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@dyzulk/ui/components/dialog";
import { Home, Cpu, Database, Zap, HardDrive, Share2, Settings } from "lucide-react";

interface SearchCommandDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  orgSlug: string;
}

export function SearchCommandDialog({
  isOpen,
  onOpenChange,
  orgSlug,
}: SearchCommandDialogProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const items = [
    { name: "Overview", href: `/${orgSlug}`, icon: <Home className="size-4 text-zinc-400" /> },
    { name: "Applications", href: `/${orgSlug}/applications`, icon: <Cpu className="size-4 text-zinc-400" /> },
    { name: "Databases", href: `/${orgSlug}/resources/databases`, icon: <Database className="size-4 text-zinc-400" /> },
    { name: "Caches", href: `/${orgSlug}/resources/caches`, icon: <Zap className="size-4 text-zinc-400" /> },
    { name: "Buckets", href: `/${orgSlug}/resources/object-storage`, icon: <HardDrive className="size-4 text-zinc-400" /> },
    { name: "Websocket clusters", href: `/${orgSlug}/resources/websockets`, icon: <Share2 className="size-4 text-zinc-400" /> },
    { name: "Settings", href: `/${orgSlug}/settings`, icon: <Settings className="size-4 text-zinc-400" /> },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectItem = (href: string) => {
    router.push(href);
    onOpenChange(false);
    setSearchQuery("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-none max-w-lg border border-zinc-200 dark:border-zinc-800 bg-background shadow-2xl p-0 font-mono text-xs overflow-hidden">
        {/* Command Search Input */}
        <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 bg-zinc-50/50 dark:bg-zinc-900/10">
          <input
            type="text"
            placeholder="Type a command or search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none font-mono text-xs text-foreground placeholder:text-muted-foreground focus:ring-0"
            autoFocus
          />
        </div>

        {/* Results List */}
        <div className="p-2 max-h-[300px] overflow-y-auto">
          <div className="px-3 py-1.5 text-[9px] uppercase tracking-wider text-muted-foreground font-bold font-mono">
            Organization
          </div>
          
          <div className="mt-1 space-y-0.5">
            {filteredItems.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground font-mono text-xs">
                No results found.
              </div>
            ) : (
              filteredItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleSelectItem(item.href)}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-none hover:bg-zinc-100 dark:hover:bg-zinc-900 text-foreground transition-colors font-semibold group"
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span className="flex-1 font-mono text-xs">{item.name}</span>
                </button>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

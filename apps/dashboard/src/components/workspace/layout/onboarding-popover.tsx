"use client";

import React from "react";
import { ChevronDown, ChevronUp, Check, ChevronRight } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import { OnboardingItem } from "@/hooks/use-workspace-header";

interface OnboardingPopoverProps {
  onboardingItems: OnboardingItem[];
  completedCount: number;
  totalCount: number;
  isShipCollapsed: boolean;
  setIsShipCollapsed: (c: boolean) => void;
  isDiscoverCollapsed: boolean;
  setIsDiscoverCollapsed: (c: boolean) => void;
  onSkipAll: () => void;
  onItemClick: (item: OnboardingItem) => void;
}

export function OnboardingPopover({
  onboardingItems,
  completedCount,
  totalCount,
  isShipCollapsed,
  setIsShipCollapsed,
  isDiscoverCollapsed,
  setIsDiscoverCollapsed,
  onSkipAll,
  onItemClick,
}: OnboardingPopoverProps) {
  const shipItems = onboardingItems.slice(0, 3);
  const discoverItems = onboardingItems.slice(3, 6);

  return (
    <div className="absolute right-0 mt-1 w-80 bg-background border border-zinc-200 dark:border-zinc-800 rounded-none shadow-xl z-50 p-4 font-mono text-xs text-foreground">
      <div className="font-bold text-xs uppercase tracking-wider text-foreground mb-4">
        Get started with Cloud
      </div>

      <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
        {/* Section 1: Ship your application */}
        <div className="space-y-2 rounded-none">
          <button
            type="button"
            onClick={() => setIsShipCollapsed(!isShipCollapsed)}
            className="w-full flex items-center justify-between text-[10px] uppercase font-bold text-muted-foreground tracking-wider pb-1.5 border-b border-zinc-100 dark:border-zinc-900/50"
          >
            <span>Ship your application</span>
            {isShipCollapsed ? <ChevronDown className="size-3" /> : <ChevronUp className="size-3" />}
          </button>

          {!isShipCollapsed && (
            <div className="space-y-1.5 pl-1">
              {shipItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onItemClick(item)}
                  className="w-full flex items-center justify-between py-1 px-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-left group"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-4 rounded-full flex items-center justify-center border shrink-0 ${
                        item.completed
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-zinc-300 dark:border-zinc-700"
                      }`}
                    >
                      {item.completed && <Check className="size-2.5 stroke-[3]" />}
                    </span>
                    <span className={item.completed ? "text-muted-foreground line-through font-semibold" : "font-semibold"}>
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className="size-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Section 2: Discover more */}
        <div className="space-y-2 rounded-none pt-1">
          <button
            type="button"
            onClick={() => setIsDiscoverCollapsed(!isDiscoverCollapsed)}
            className="w-full flex items-center justify-between text-[10px] uppercase font-bold text-muted-foreground tracking-wider pb-1.5 border-b border-zinc-100 dark:border-zinc-900/50"
          >
            <span>Discover more</span>
            {isDiscoverCollapsed ? <ChevronDown className="size-3" /> : <ChevronUp className="size-3" />}
          </button>

          {!isDiscoverCollapsed && (
            <div className="space-y-1.5 pl-1">
              {discoverItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onItemClick(item)}
                  className="w-full flex items-center justify-between py-1 px-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-left group"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-4 rounded-full flex items-center justify-center border shrink-0 ${
                        item.completed
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-zinc-300 dark:border-zinc-700"
                      }`}
                    >
                      {item.completed && <Check className="size-2.5 stroke-[3]" />}
                    </span>
                    <span className={item.completed ? "text-muted-foreground line-through font-semibold" : "font-semibold"}>
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className="size-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-3 mt-4 border-t border-zinc-200 dark:border-zinc-800 text-[10px] font-semibold text-muted-foreground">
        <span>
          {completedCount}/{totalCount} completed
        </span>
        <button
          onClick={onSkipAll}
          className="text-zinc-900 dark:text-zinc-100 hover:underline"
        >
          Skip all
        </button>
      </div>
    </div>
  );
}

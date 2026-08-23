"use client";

import React from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@dyzulk/ui/components/dropdown-menu";

interface UsagePeriodSelectorProps {
  selectedPeriod: string;
  periods: string[];
  onPeriodChange: (period: string) => void;
}

export function UsagePeriodSelector({
  selectedPeriod,
  periods,
  onPeriodChange,
}: UsagePeriodSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="font-mono text-xs rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 gap-2 h-9 px-4 flex items-center justify-between border bg-background transition-colors duration-200 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Calendar className="size-3.5 text-zinc-400" />
          <span>{selectedPeriod}</span>
        </div>
        <ChevronDown className="size-3.5 text-zinc-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 font-mono text-xs rounded-none py-1">
        {periods.map((period) => (
          <DropdownMenuItem
            key={period}
            onClick={() => onPeriodChange(period)}
            className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors cursor-pointer rounded-none ${
              period === selectedPeriod ? "text-foreground font-bold bg-primary/5" : "text-muted-foreground"
            }`}
          >
            {period}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@dyzulk/ui/components/button";

interface ResourcesEmptyStateProps {
  type: "databases" | "caches" | "object-storage" | "websockets";
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export function ResourcesEmptyState({
  type,
  title,
  description,
  buttonText,
  onButtonClick,
}: ResourcesEmptyStateProps) {
  // Render isometric SVG icons based on type
  const renderIcon = () => {
    switch (type) {
      case "databases":
        return (
          <svg className="size-24 mx-auto text-zinc-400 dark:text-zinc-600" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2">
            {/* Outline of isometric cube partitioned in 4 */}
            <path d="M60 25 L95 43 L60 61 L25 43 Z" />
            <path d="M25 43 L25 83 L60 101 L60 61 Z" />
            <path d="M60 61 L60 101 L95 83 L95 43 Z" />
            {/* Grid lines on top face */}
            <path d="M42.5 34 L77.5 52" />
            <path d="M77.5 34 L42.5 52" />
            {/* Grid lines on sides */}
            <path d="M42.5 52 L42.5 92" />
            <path d="M77.5 52 L77.5 92" />
          </svg>
        );
      case "caches":
        return (
          <svg className="size-24 mx-auto text-zinc-400 dark:text-zinc-600" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2">
            {/* Outline of isometric cube */}
            <path d="M60 25 L95 43 L60 61 L25 43 Z" />
            <path d="M25 43 L25 83 L60 101 L60 61 Z" />
            <path d="M60 61 L60 101 L95 83 L95 43 Z" />
            {/* Lightning bolt inside top face */}
            <path d="M60 35 L52 46 L62 46 L58 55 L68 44 L58 44 Z" fill="currentColor" fillOpacity="0.1" />
          </svg>
        );
      case "object-storage":
        return (
          <svg className="size-24 mx-auto text-zinc-400 dark:text-zinc-600" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2">
            {/* Outline of isometric cylinder/bucket style */}
            <path d="M60 25 C79.33 25 95 31.27 95 39 C95 46.73 79.33 53 60 53 C40.67 53 25 46.73 25 39 C25 31.27 40.67 25 60 25 Z" />
            <path d="M25 39 L25 81 C25 88.73 40.67 95 60 95 C79.33 95 95 88.73 95 81 L95 39" />
            <path d="M25 60 C25 67.73 40.67 74 60 74 C79.33 74 95 67.73 95 60" strokeDasharray="3 3" />
          </svg>
        );
      case "websockets":
        return (
          <svg className="size-24 mx-auto text-zinc-400 dark:text-zinc-600" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2">
            {/* Double nodes connection isometric lines */}
            <circle cx="60" cy="35" r="5" />
            <circle cx="35" cy="75" r="5" />
            <circle cx="85" cy="75" r="5" />
            <path d="M60 40 L35 70" />
            <path d="M60 40 L85 70" />
            <path d="M35 75 L85 75" strokeDasharray="3 3" />
          </svg>
        );
    }
  };

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 p-20 flex flex-col items-center justify-center text-center rounded-none min-h-[400px] w-full">
      <div className="mb-6">{renderIcon()}</div>
      <h3 className="text-sm font-bold font-mono tracking-wide mb-1 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground font-mono text-xs max-w-sm mb-6">
        {description}
      </p>
      <Button
        onClick={onButtonClick}
        className="rounded-none font-mono text-xs tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-10 px-6"
      >
        <Plus className="size-4 mr-2" /> {buttonText}
      </Button>
    </div>
  );
}

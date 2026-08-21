"use client";

import React from "react";
import { User, FileText, HelpCircle, LogOut } from "lucide-react";

interface ProfileMenuDropdownProps {
  onLogout: () => void;
  orgName: string;
}

export function ProfileMenuDropdown({ onLogout, orgName }: ProfileMenuDropdownProps) {
  return (
    <div className="absolute right-0 mt-1 w-64 bg-background border border-zinc-200 dark:border-zinc-800 rounded-none shadow-xl z-50 font-mono text-xs text-foreground">
      {/* Header section with user initials */}
      <div className="p-3.5 flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
        <div className="size-8 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-foreground font-bold rounded-none select-none">
          {orgName.charAt(0).toUpperCase()}
        </div>
        <div className="overflow-hidden">
          <div className="font-bold truncate text-foreground">{orgName}</div>
          <div className="text-[10px] text-muted-foreground truncate mt-0.5">dyzulkdeveloper@gmail.com</div>
        </div>
      </div>

      {/* Menu items */}
      <div className="p-1.5 space-y-0.5">
        <button
          onClick={() => console.log("Account clicked")}
          className="w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors font-semibold text-muted-foreground hover:text-foreground"
        >
          <User className="size-3.5 text-zinc-400" />
          <span>Account</span>
        </button>

        <button
          onClick={() => window.open("/docs", "_blank")}
          className="w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors font-semibold text-muted-foreground hover:text-foreground"
        >
          <FileText className="size-3.5 text-zinc-400" />
          <span>Docs</span>
        </button>

        <button
          onClick={() => console.log("Help clicked")}
          className="w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors font-semibold text-muted-foreground hover:text-foreground"
        >
          <HelpCircle className="size-3.5 text-zinc-400" />
          <span>Help</span>
        </button>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* Sign out */}
      <div className="p-1.5">
        <button
          onClick={onLogout}
          className="w-full text-left px-3 py-2 flex items-center gap-2.5 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 hover:text-red-700 font-bold transition-colors"
        >
          <LogOut className="size-3.5" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}

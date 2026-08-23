"use client";

import React from "react";
import Link from "next/link";
import { User, FileText, HelpCircle, LogOut } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@dyzulk/ui/components/dropdown-menu";

interface ProfileMenuDropdownProps {
  onLogout: () => void;
  orgName: string;
}

export function ProfileMenuDropdown({ onLogout, orgName }: ProfileMenuDropdownProps) {
  return (
    <DropdownMenuContent align="end" className="w-64 rounded-none font-mono text-xs">
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
        <DropdownMenuItem render={<Link href="/profile" className="w-full text-left px-3 py-2 flex items-center gap-2.5 font-semibold text-muted-foreground hover:text-foreground rounded-none" />}>
          <User className="size-3.5 text-zinc-400" />
          <span>Account</span>
        </DropdownMenuItem>

        <DropdownMenuItem render={<button onClick={() => window.open("/docs", "_blank")} className="w-full text-left px-3 py-2 flex items-center gap-2.5 font-semibold text-muted-foreground hover:text-foreground rounded-none cursor-pointer" />}>
          <FileText className="size-3.5 text-zinc-400" />
          <span>Docs</span>
        </DropdownMenuItem>

        <DropdownMenuItem render={<button onClick={() => console.log("Help clicked")} className="w-full text-left px-3 py-2 flex items-center gap-2.5 font-semibold text-muted-foreground hover:text-foreground rounded-none cursor-pointer" />}>
          <HelpCircle className="size-3.5 text-zinc-400" />
          <span>Help</span>
        </DropdownMenuItem>
      </div>

      <DropdownMenuSeparator />

      {/* Sign out */}
      <div className="p-1.5">
        <DropdownMenuItem variant="destructive" render={<button onClick={onLogout} className="w-full text-left px-3 py-2 flex items-center gap-2.5 font-bold rounded-none cursor-pointer" />}>
          <LogOut className="size-3.5" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </div>
    </DropdownMenuContent>
  );
}

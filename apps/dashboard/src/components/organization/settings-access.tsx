"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useOrganizationSettings } from "@/hooks/use-organization-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Input } from "@dyzulk/ui/components/input";
import { Label } from "@dyzulk/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@dyzulk/ui/components/select";
import { Send, MoreHorizontal } from "lucide-react";

export function SettingsAccess() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  const {
    inviteEmail,
    setInviteEmail,
    inviteRole,
    setInviteRole,
    members,
    handleSendInvite,
    handleRoleChange,
  } = useOrganizationSettings(orgSlug);

  return (
    <div className="w-full font-mono text-xs rounded-none">
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Members</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Manage members of your organization, set roles, and invite new users.
          </p>
        </div>

        <CardContent className="p-5 space-y-6">
          {/* Invite form */}
          <form onSubmit={handleSendInvite} className="space-y-2">
            <Label htmlFor="invite-email" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Invite by email
            </Label>
            <div className="flex flex-col sm:flex-row border border-zinc-200 dark:border-zinc-800 rounded-none overflow-hidden focus-within:border-zinc-950 dark:focus-within:border-zinc-100">
              <Input
                id="invite-email"
                type="email"
                placeholder="user@example.com"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                className="rounded-none font-mono text-xs border-0 h-9 flex-1 shadow-none focus-visible:ring-0 focus-visible:border-0"
              />
              
              <div className="flex items-center shrink-0 border-t sm:border-t-0 sm:border-l border-zinc-200 dark:border-zinc-800 bg-background">
                <Select value={inviteRole} onValueChange={(val) => setInviteRole(val ?? "developer")}>
                  <SelectTrigger className="rounded-none border-0 font-mono text-xs h-9 px-3 bg-transparent w-32 focus:ring-0 focus:border-0 focus:outline-none">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800">
                    <SelectItem value="developer" className="rounded-none font-mono text-xs">Developer</SelectItem>
                    <SelectItem value="admin" className="rounded-none font-mono text-xs">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="rounded-none uppercase font-mono tracking-wider font-bold bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 border-t sm:border-t-0 sm:border-l border-zinc-200 dark:border-zinc-800 px-4 text-xs gap-1.5 shrink-0"
              >
                <span>Send Invite</span>
                <Send className="size-3" />
              </Button>
            </div>
          </form>

          {/* Members list */}
          <div className="space-y-3">
            <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
              Organization members
            </Label>
            
            <div className="border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 rounded-none overflow-hidden">
              {members.map((member) => (
                <div key={member.id} className="p-3.5 flex items-center justify-between gap-4 bg-background">
                  <div className="flex items-center gap-3">
                    <div className="size-8 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-foreground font-bold text-xs rounded-none select-none">
                      {member.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="font-mono text-xs">
                      <span className="font-bold text-foreground">
                        {member.name} {member.isYou && <span className="text-muted-foreground font-normal">(You)</span>}
                      </span>
                      <span className="block text-[10px] text-muted-foreground mt-0.5">{member.email}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {member.isYou ? (
                      <span className="font-mono text-xs text-muted-foreground uppercase border border-zinc-200 dark:border-zinc-800 px-3 py-1 font-semibold rounded-none bg-zinc-50/50 dark:bg-zinc-900/10">
                        {member.role}
                      </span>
                    ) : (
                      <Select
                        value={member.role}
                        onValueChange={(val) => handleRoleChange(member.id, (val as "admin" | "developer") ?? "developer")}
                      >
                        <SelectTrigger className="rounded-none border border-zinc-200 dark:border-zinc-800 font-mono text-xs h-8 px-2.5 bg-background w-28">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800">
                          <SelectItem value="developer" className="rounded-none">Developer</SelectItem>
                          <SelectItem value="admin" className="rounded-none">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                    
                    <button className="p-1.5 text-zinc-400 hover:text-foreground transition-colors">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

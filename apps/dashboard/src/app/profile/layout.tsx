import React from "react";
import { redirect } from "next/navigation";
import { getUserOrganizationsAction } from "@/actions/organization";
import { WorkspaceLayoutShell } from "@/components/workspace/layout/workspace-layout-shell";
import { ProfileSidebar } from "@/components/profile/profile-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function ProfileLayout({ children }: LayoutProps) {
  const result = await getUserOrganizationsAction();

  if (!result.success || !result.data || result.data.length === 0) {
    redirect("/org/new");
  }

  const defaultOrg = result.data[0];
  const activeSlug = defaultOrg?.slug || "";

  return (
    <WorkspaceLayoutShell activeSlug={activeSlug}>
      <div className="max-w-5xl mx-auto px-4 py-8 rounded-none flex flex-col gap-6 w-full">
        {/* Profile header branding */}
        <div className="flex items-center gap-3 pt-4 pb-2 border-b border-zinc-200 dark:border-zinc-800 rounded-none">
          <div className="size-10 flex items-center justify-center bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 text-lg font-bold font-mono rounded-none border border-green-200 dark:border-green-900/50 select-none">
            D
          </div>
          <h1 className="text-xl font-bold tracking-tight text-foreground font-mono">
            DyzulkDev
          </h1>
        </div>

        {/* Sidebar split layout */}
        <div className="flex flex-col md:flex-row gap-8 items-start w-full rounded-none">
          <ProfileSidebar />
          <div className="flex-1 w-full rounded-none">
            {children}
          </div>
        </div>
      </div>
    </WorkspaceLayoutShell>
  );
}

import React from "react";
import { WorkspaceLayoutShell } from "@/components/workspace/layout/workspace-layout-shell";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ org: string }>;
}

export default async function WorkspaceLayout({ children, params }: LayoutProps) {
  const { org } = await params;

  return (
    <WorkspaceLayoutShell activeSlug={org}>
      {children}
    </WorkspaceLayoutShell>
  );
}

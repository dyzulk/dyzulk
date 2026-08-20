import React from "react";
import { notFound, redirect } from "next/navigation";
import { getOrganizationBySlugAction } from "@/actions/organization";
import { WorkspaceHeader } from "@/components/workspace/workspace-header";
import { WorkspaceStats } from "@/components/workspace/workspace-stats";

interface PageProps {
  params: Promise<{ org: string }>;
}

export default async function WorkspaceDashboardPage({ params }: PageProps) {
  const { org } = await params;
  const result = await getOrganizationBySlugAction(org);

  if (!result.success || !result.data) {
    // If the org doesn't exist or user lacks access, redirect back to root (which redirects to default org)
    redirect("/");
  }

  const organization = result.data;

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto rounded-none">
      <WorkspaceHeader orgName={organization.name} />
      <WorkspaceStats />
    </div>
  );
}

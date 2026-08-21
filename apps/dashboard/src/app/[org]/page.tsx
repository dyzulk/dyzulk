import React from "react";
import { notFound, redirect } from "next/navigation";
import { getOrganizationBySlugAction } from "@/actions/organization";
import { OrganizationHeader } from "@/components/organization/organization-header";
import { OrganizationTabs } from "@/components/organization/organization-tabs";
import { OrganizationOverview } from "@/components/organization/organization-overview";

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
    <div className="flex flex-col w-full rounded-none">
      <OrganizationHeader orgName={organization.name} />
      <OrganizationTabs orgSlug={organization.slug} />
      <OrganizationOverview orgSlug={organization.slug} />
    </div>
  );
}

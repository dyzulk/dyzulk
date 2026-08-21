import React, { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import { getOrganizationBySlugAction } from "@/actions/organization";
import { OrganizationTabs } from "@/components/org/organization-tabs";
import { OrganizationOverview } from "@/components/org/organization-overview";
import { OrganizationOverviewSkeleton } from "@/components/org/organization-overview-skeleton";

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
      <OrganizationTabs orgSlug={organization.slug} />
      <Suspense fallback={<OrganizationOverviewSkeleton />}>
        <OrganizationOverview orgName={organization.name} orgSlug={organization.slug} />
      </Suspense>
    </div>
  );
}

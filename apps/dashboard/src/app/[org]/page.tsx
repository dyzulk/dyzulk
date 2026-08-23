import React from "react";
import { redirect } from "next/navigation";
import { getOrganizationBySlugAction } from "@/actions/organization";
import { OrganizationTabs } from "@/components/org/organization-tabs";
import { OrganizationHeader } from "@/components/org/organization-header";
import { InteractiveOverviewContainer } from "@/components/org/interactive-overview-container";
import { ApplicationGrid } from "@/components/org/application-grid";
import { DeploymentHistory } from "@/components/org/deployment-history";
import { MOCK_APPLICATIONS, MOCK_DEPLOYMENTS } from "@/lib/mock-data";

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
  const visibleApplications = MOCK_APPLICATIONS.slice(0, 4);
  const visibleDeployments = MOCK_DEPLOYMENTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full rounded-none">
      <OrganizationTabs orgSlug={organization.slug} />

      <div className="max-w-7xl mx-auto px-4 py-8 rounded-none flex flex-col gap-8 w-full">
        <OrganizationHeader orgName={organization.name} />

        <InteractiveOverviewContainer
          orgName={organization.name}
          orgSlug={organization.slug}
          applicationsGrid={<ApplicationGrid applications={visibleApplications} />}
          deploymentHistory={<DeploymentHistory deployments={visibleDeployments} />}
        />
      </div>
    </div>
  );
}

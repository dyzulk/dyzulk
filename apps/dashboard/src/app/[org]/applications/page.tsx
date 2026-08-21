import React from "react";
import { notFound, redirect } from "next/navigation";
import { getOrganizationBySlugAction } from "@/actions/organization";
import { OrganizationTabs } from "@/components/organization/organization-tabs";
import { OrganizationApplications } from "@/components/organization/organization-applications";

interface PageProps {
  params: Promise<{ org: string }>;
}

export default async function ApplicationsPage({ params }: PageProps) {
  const { org } = await params;
  const result = await getOrganizationBySlugAction(org);

  if (!result.success || !result.data) {
    redirect("/");
  }

  const organization = result.data;

  return (
    <div className="flex flex-col w-full rounded-none">
      <OrganizationTabs orgSlug={organization.slug} />
      <OrganizationApplications orgSlug={organization.slug} />
    </div>
  );
}

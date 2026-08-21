import React from "react";
import { notFound, redirect } from "next/navigation";
import { getOrganizationBySlugAction } from "@/actions/organization";
import { OrganizationTabs } from "@/components/org/organization-tabs";
import { OrganizationUsage } from "@/components/org/usage/organization-usage";

interface PageProps {
  params: Promise<{ org: string }>;
}

export default async function UsagePage({ params }: PageProps) {
  const { org } = await params;
  const result = await getOrganizationBySlugAction(org);

  if (!result.success || !result.data) {
    redirect("/");
  }

  const organization = result.data;

  return (
    <div className="flex flex-col w-full rounded-none">
      <OrganizationTabs orgSlug={organization.slug} />
      <OrganizationUsage orgSlug={organization.slug} />
    </div>
  );
}

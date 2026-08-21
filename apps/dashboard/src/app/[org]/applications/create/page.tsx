import React from "react";
import { notFound, redirect } from "next/navigation";
import { getOrganizationBySlugAction } from "@/actions/organization";
import { CreateApplicationTabs } from "@/components/org/applications/create/create-application-tabs";

interface PageProps {
  params: Promise<{ org: string }>;
}

export default async function CreateApplicationPage({ params }: PageProps) {
  const { org } = await params;
  
  // Verify that organization actually exists
  const result = await getOrganizationBySlugAction(org);
  if (!result.success || !result.data) {
    redirect("/");
  }

  const organization = result.data;

  return (
    <div className="flex flex-col w-full rounded-none">
      <CreateApplicationTabs orgSlug={organization.slug} />
    </div>
  );
}

import React from "react";
import { redirect } from "next/navigation";
import { getOrganizationBySlugAction } from "@/actions/organization";
import { OrganizationTabs } from "@/components/org/organization-tabs";
import { ResourcesSidebar } from "@/components/org/resources/resources-sidebar";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ org: string }>;
}

export default async function ResourcesLayout({ children, params }: LayoutProps) {
  const { org } = await params;
  const result = await getOrganizationBySlugAction(org);

  if (!result.success || !result.data) {
    redirect("/");
  }

  const organization = result.data;

  return (
    <div className="flex flex-col w-full rounded-none">
      <OrganizationTabs orgSlug={organization.slug} />
      
      <div className="max-w-5xl mx-auto px-4 py-8 rounded-none flex flex-col gap-6 w-full">
        <div>
          <h2 className="text-xl font-bold font-mono tracking-wide text-foreground">
            Resources
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start w-full rounded-none">
          <ResourcesSidebar orgSlug={organization.slug} />
          <div className="flex-1 w-full rounded-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

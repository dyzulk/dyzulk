"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useResources } from "@/hooks/use-resources";
import { ResourcesEmptyState } from "@/components/org/resources/resources-empty-state";

export function WebsocketsSection() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  const { isLoading } = useResources(orgSlug);

  return (
    <div className="w-full rounded-none">
      <ResourcesEmptyState
        type="websockets"
        title="No websockets yet"
        description="Create your first websockets project, powered by Socket.io."
        buttonText="New websockets connection"
        onButtonClick={() => console.log("Create websockets")}
        isLoading={isLoading}
      />
    </div>
  );
}

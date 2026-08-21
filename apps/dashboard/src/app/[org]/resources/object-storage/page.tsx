"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useResources } from "@/hooks/use-resources";
import { ResourcesEmptyState } from "@/components/org/resources/resources-empty-state";

export default function ObjectStoragePage() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  const { isLoading } = useResources(orgSlug);

  return (
    <div className="w-full rounded-none">
      <ResourcesEmptyState
        type="object-storage"
        title="No object storage yet"
        description="Create your first object storage bucket, compatible with AWS S3."
        buttonText="New bucket"
        onButtonClick={() => console.log("Create bucket")}
        isLoading={isLoading}
      />
    </div>
  );
}

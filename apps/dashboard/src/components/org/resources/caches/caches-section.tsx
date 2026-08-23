"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useResources } from "@/hooks/use-resources";
import { ResourcesEmptyState } from "@/components/org/resources/resources-empty-state";

export function CachesSection() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  const { setIsNewCacheModalOpen, isLoading } = useResources(orgSlug);

  return (
    <div className="w-full rounded-none">
      <ResourcesEmptyState
        type="caches"
        title="No caches yet"
        description="Create your first cache, compatible with the Redis™ API."
        buttonText="New cache"
        onButtonClick={() => setIsNewCacheModalOpen(true)}
        isLoading={isLoading}
      />
    </div>
  );
}

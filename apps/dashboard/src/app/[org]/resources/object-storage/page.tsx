"use client";

import React from "react";
import { ResourcesEmptyState } from "@/components/org/resources/resources-empty-state";

export default function ObjectStoragePage() {
  return (
    <div className="w-full rounded-none">
      <ResourcesEmptyState
        type="object-storage"
        title="No object storage yet"
        description="Create your first object storage bucket, compatible with AWS S3."
        buttonText="New bucket"
        onButtonClick={() => console.log("Create bucket")}
      />
    </div>
  );
}

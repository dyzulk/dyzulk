"use client";

import React from "react";
import { ResourcesEmptyState } from "@/components/organization/resources-empty-state";

export default function WebSocketsPage() {
  return (
    <div className="w-full rounded-none">
      <ResourcesEmptyState
        type="websockets"
        title="No websockets yet"
        description="Create your first websockets project, powered by Socket.io."
        buttonText="New websockets connection"
        onButtonClick={() => console.log("Create websockets")}
      />
    </div>
  );
}

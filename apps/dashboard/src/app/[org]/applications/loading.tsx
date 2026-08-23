import React from "react";
import { ApplicationsLoading } from "@/components/org/applications/applications-loading";

export default function Loading() {
  return (
    <div className="flex flex-col w-full rounded-none">
      <div className="max-w-5xl mx-auto px-4 py-8 rounded-none flex flex-col gap-6 w-full font-mono text-xs">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-none">
          <h2 className="text-lg font-bold font-mono tracking-wide text-foreground">
            All applications
          </h2>
        </div>
        <ApplicationsLoading />
      </div>
    </div>
  );
}

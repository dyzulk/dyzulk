"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useResources } from "@/hooks/use-resources";
import { ResourcesEmptyState } from "@/components/org/resources/resources-empty-state";
import { NewDatabaseModal } from "@/components/org/resources/databases/new-database-modal";

export default function DatabasesPage() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  
  const {
    isNewDbModalOpen,
    setIsNewDbModalOpen,
    dbName,
    setDbName,
    dbType,
    setDbType,
    region,
    setRegion,
    configPlan,
    setConfigPlan,
    handleCreateDatabase,
    isLoading,
  } = useResources(orgSlug);

  return (
    <div className="w-full rounded-none">
      <ResourcesEmptyState
        type="databases"
        title="No databases yet"
        description="Create your first database cluster, powered by MySQL or Postgres."
        buttonText="New database cluster"
        onButtonClick={() => setIsNewDbModalOpen(true)}
        isLoading={isLoading}
      />

      <NewDatabaseModal
        isOpen={isNewDbModalOpen}
        onOpenChange={setIsNewDbModalOpen}
        dbName={dbName}
        setDbName={setDbName}
        dbType={dbType}
        setDbType={setDbType}
        region={region}
        setRegion={setRegion}
        configPlan={configPlan}
        setConfigPlan={setConfigPlan}
        onSubmit={handleCreateDatabase}
      />
    </div>
  );
}

import { useState } from "react";

export function useResources(orgSlug: string) {
  const [isNewDbModalOpen, setIsNewDbModalOpen] = useState(false);
  const [isNewCacheModalOpen, setIsNewCacheModalOpen] = useState(false);
  const [dbName, setDbName] = useState("");
  const [dbType, setDbType] = useState("mysql-8.4");
  const [region, setRegion] = useState("us-east");
  const [configPlan, setConfigPlan] = useState("dev");

  const handleCreateDatabase = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating database cluster:", {
      name: dbName || "my_database_cluster",
      type: dbType,
      region,
      configPlan,
    });
    // Reset state & close modal
    setIsNewDbModalOpen(false);
    setDbName("");
  };

  const handleCreateCache = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating cache");
    setIsNewCacheModalOpen(false);
  };

  return {
    isNewDbModalOpen,
    setIsNewDbModalOpen,
    isNewCacheModalOpen,
    setIsNewCacheModalOpen,
    dbName,
    setDbName,
    dbType,
    setDbType,
    region,
    setRegion,
    configPlan,
    setConfigPlan,
    handleCreateDatabase,
    handleCreateCache,
  };
}

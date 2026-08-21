import { useState, useEffect } from "react";

export interface ResourceItem {
  name: string;
  type: string;
  status: string;
}

export interface ApplicationUsageItem {
  id: string;
  name: string;
  env: string;
  envId: string;
  isDeleted: boolean;
  compute: {
    type: string;
    replicas: number;
    cpuHours: number;
    cost: number;
  };
  envCost: number;
  totalCost: number;
}

export function useOrganizationUsage(orgSlug: string) {
  const [selectedPeriod, setSelectedPeriod] = useState("Jul 22 - Aug 21 Current period");
  const [isPeriodSelectorOpen, setIsPeriodSelectorOpen] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const periods = [
    "Jul 22 - Aug 21 Current period",
    "Jun 22 - Jul 21 Previous period",
    "May 22 - Jun 21 Previous period"
  ];

  const currentSpend = 0.01;
  const spendingLimit = "Get notified or stop compute to control usage.";
  
  const bandwidth = {
    percentage: 1,
    allowanceLabel: "1% of accrued allowance"
  };

  const credits = {
    used: 0.01,
    total: 5.00,
    label: "$0.01 used of $5.00"
  };

  // Mock resources (Databases, Caches, Buckets, WebSockets - showing empty states)
  const resources: ResourceItem[] = [];

  // Mock applications usage details
  const applicationsUsage: ApplicationUsageItem[] = [
    {
      id: "app-usage-1",
      name: "react-starter-kit",
      env: "production",
      envId: "env-a2559fb8-2c41-477b-84a1-b8479e0f6c24",
      isDeleted: true,
      compute: {
        type: "Flex 1 vCPU • 512 MiB",
        replicas: 1,
        cpuHours: 0.6,
        cost: 0.01
      },
      envCost: 0.01,
      totalCost: 0.01
    }
  ];

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    setIsPeriodSelectorOpen(false);
  };

  return {
    selectedPeriod,
    isPeriodSelectorOpen,
    setIsPeriodSelectorOpen,
    periods,
    currentSpend,
    spendingLimit,
    bandwidth,
    credits,
    resources,
    applicationsUsage,
    showLimitModal,
    setShowLimitModal,
    handlePeriodChange,
    isLoading,
  };
}

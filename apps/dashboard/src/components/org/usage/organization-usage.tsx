"use client";

import React from "react";
import { useOrganizationUsage } from "@/hooks/use-organization-usage";
import { UsagePeriodSelector } from "./usage-period-selector";
import { UsageSummaryCards } from "./usage-summary-cards";
import { ResourcesUsageCard } from "./resources-usage-card";
import { ApplicationsUsageList } from "./applications-usage-list";

interface OrganizationUsageProps {
  orgSlug: string;
}

export function OrganizationUsage({ orgSlug }: OrganizationUsageProps) {
  const {
    selectedPeriod,
    periods,
    currentSpend,
    spendingLimit,
    bandwidth,
    credits,
    applicationsUsage,
    handlePeriodChange,
    isLoading,
  } = useOrganizationUsage(orgSlug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 rounded-none flex flex-col gap-6 w-full font-mono text-xs">
      {/* Header and Period Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-none border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <div className="rounded-none">
          <h2 className="text-xl font-bold font-mono tracking-wide text-foreground">
            Usage
          </h2>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            Last updated 26 minutes ago. Updated hourly.
          </p>
        </div>
        
        {/* Period Selector Dropdown Menu */}
        <UsagePeriodSelector
          selectedPeriod={selectedPeriod}
          periods={periods}
          onPeriodChange={handlePeriodChange}
        />
      </div>

      {/* Main summary cards grid */}
      <UsageSummaryCards
        orgSlug={orgSlug}
        currentSpend={currentSpend}
        spendingLimit={spendingLimit}
        bandwidth={bandwidth}
        credits={credits}
        isLoading={isLoading}
      />

      {/* Resources usage section */}
      <ResourcesUsageCard />

      {/* Applications usage section */}
      <ApplicationsUsageList
        applicationsUsage={applicationsUsage}
        isLoading={isLoading}
      />
    </div>
  );
}

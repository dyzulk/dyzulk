"use client";

import { Check, Minus, Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@dyzulk/ui/components/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@dyzulk/ui/components/tooltip";

interface FeatureRow {
  name: string;
  tooltip?: string;
  hobby: string | boolean;
  pro: string | boolean;
  scale: string | boolean;
  enterprise: string | boolean;
}

interface FeatureCategory {
  category: string;
  rows: FeatureRow[];
}

const COMPARISON_DATA: FeatureCategory[] = [
  {
    category: "Compute & Storage",
    rows: [
      { name: "Max web services / sites", hobby: "25 services", pro: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
      { name: "Serverless runtime", tooltip: "Execution environment for dynamic backends", hobby: "Shared Node/Python", pro: "Standard Isolated Container", scale: "Standard + Performance plans", enterprise: "Dedicated Cluster" },
      { name: "Persistent Disk volume storage", hobby: "—", pro: "$0.25 / GB / month", scale: "$0.20 / GB / month", enterprise: "Custom high-speed volumes" },
      { name: "Managed Postgres & Redis", hobby: "Free Tier (shared)", pro: "Paid Compute Tiers", scale: "Paid Compute Tiers", enterprise: "Dedicated Database cluster" },
      { name: "Point-In-Time-Recovery (PITR)", tooltip: "Restore databases to any second in history", hobby: "—", pro: "3-day retention", scale: "14-day retention", enterprise: "30-day retention" },
    ],
  },
  {
    category: "Networking & Edge CDN",
    rows: [
      { name: "Bandwidth allocation", hobby: "5 GB / month included", pro: "100 GB / month included", scale: "1 TB / month included", enterprise: "Custom allowance / Unlimited" },
      { name: "Excess Bandwidth fee", hobby: "Not available", pro: "$0.15 per GB", scale: "$0.12 per GB", enterprise: "Volume discounts apply" },
      { name: "Global Anycast Edge Locations", hobby: "300+", pro: "300+", scale: "300+", enterprise: "300+ with dedicated IP sets" },
      { name: "Wildcard custom domains", hobby: "—", pro: "$0.25 / domain / month", scale: "15 included", enterprise: "Unlimited" },
      { name: "Automatic SSL/TLS certificate", hobby: true, pro: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Build & Deploy Pipelines",
    rows: [
      { name: "Build Minutes (CI/CD)", hobby: "500 / month", pro: "1,000 / month", scale: "5,000 / workspace / month", enterprise: "Custom limit" },
      { name: "Excess Build Fee", hobby: "Not available", pro: "$5 per 1,000 mins", scale: "$5 per 1,000 mins", enterprise: "Negotiated SLAs" },
      { name: "Docker/Container builds", hobby: true, pro: true, scale: true, enterprise: true },
      { name: "Monorepo support", tooltip: "Optimized Turborepo / Nx cache matching", hobby: true, pro: true, scale: true, enterprise: true },
      { name: "Full-stack preview environments", hobby: "—", pro: true, scale: true, enterprise: true },
      { name: "Instant rollback deploy history", hobby: "5 builds retained", pro: "15 builds retained", scale: "30 builds retained", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Access & Security",
    rows: [
      { name: "Team seats included", hobby: "1 seat", pro: "5 seats ($20/mo extra seat)", scale: "Unlimited", enterprise: "Unlimited" },
      { name: "Enforce 2FA & Google Login", hobby: "—", pro: true, scale: true, enterprise: true },
      { name: "Workspace granular user roles", hobby: "—", pro: "Admin, Dev, Billing", scale: "All standard roles", enterprise: "Custom roles & Audit logs" },
      { name: "SAML Single-Sign-On (SSO)", hobby: "—", pro: "—", scale: "$300 / month add-on", enterprise: "Included" },
      { name: "Compliance certifications", hobby: "GDPR", pro: "GDPR, SOC2 compliance", scale: "SOC2, ISO27001 compliance", enterprise: "SOC2 Type II, HIPAA BAA, Custom questionnaires" },
    ],
  },
  {
    category: "Support & SLAs",
    rows: [
      { name: "Support hours", hobby: "Community forums only", pro: "Standard business hours", scale: "24/7/365 email & chat", enterprise: "Dedicated VIP Slack & Account Mgr" },
      { name: "Response response SLA", hobby: "—", pro: "Next business day", scale: "Under 1 hour", enterprise: "Under 15 mins (custom SLA)" },
    ],
  },
];

export function DetailedComparison() {
  const renderCell = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="size-4 text-primary mx-auto" />
      ) : (
        <Minus className="size-4 text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm text-muted-foreground">{val}</span>;
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-4 sm:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">Compare Platform Features</h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Find the plan that matches your project requirements and team scope.
        </p>
      </div>

      <div className="border border-border/50 overflow-hidden bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border/60">
              <TableHead className="w-[30%] font-bold text-foreground">Features</TableHead>
              <TableHead className="w-[17.5%] text-center font-bold text-foreground">Hobby</TableHead>
              <TableHead className="w-[17.5%] text-center font-bold text-foreground">Pro</TableHead>
              <TableHead className="w-[17.5%] text-center font-bold text-foreground">Scale</TableHead>
              <TableHead className="w-[17.5%] text-center font-bold text-foreground">Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {COMPARISON_DATA.map((cat) => (
              <TooltipProvider key={cat.category}>
                {/* Category Header Row */}
                <TableRow className="bg-muted/40 hover:bg-muted/40 font-bold border-y border-border/60">
                  <TableCell colSpan={5} className="text-foreground py-3 font-semibold tracking-wide text-xs uppercase">
                    {cat.category}
                  </TableCell>
                </TableRow>

                {/* Rows under category */}
                {cat.rows.map((row) => (
                  <TableRow key={row.name} className="border-b border-border/40 hover:bg-accent/10 transition-colors">
                    <TableCell className="font-medium text-foreground py-3.5 flex items-center gap-1.5">
                      {row.name}
                      {row.tooltip && (
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="size-3.5 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[240px] text-xs">
                            {row.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </TableCell>
                    <TableCell className="text-center py-3.5">{renderCell(row.hobby)}</TableCell>
                    <TableCell className="text-center py-3.5">{renderCell(row.pro)}</TableCell>
                    <TableCell className="text-center py-3.5">{renderCell(row.scale)}</TableCell>
                    <TableCell className="text-center py-3.5">{renderCell(row.enterprise)}</TableCell>
                  </TableRow>
                ))}
              </TooltipProvider>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

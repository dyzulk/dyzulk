"use client";

import { useState } from "react";
import { Slider } from "@workspace/ui/components/slider";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Cpu, Database, Server, RefreshCw } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

interface InstancePlan {
  id: string;
  name: string;
  cpu: string;
  ram: string;
  hourlyPrice: number;
}

const INSTANCE_PLANS: InstancePlan[] = [
  { id: "nano", name: "Nano", cpu: "0.1 vCPU", ram: "256 MB", hourlyPrice: 0.005 },
  { id: "micro", name: "Micro", cpu: "0.25 vCPU", ram: "512 MB", hourlyPrice: 0.010 },
  { id: "small", name: "Small", cpu: "0.5 vCPU", ram: "1 GB", hourlyPrice: 0.020 },
  { id: "medium", name: "Medium", cpu: "1.0 vCPU", ram: "2 GB", hourlyPrice: 0.040 },
  { id: "large", name: "Large", cpu: "2.0 vCPU", ram: "4 GB", hourlyPrice: 0.080 },
];

export function ComputeEstimator() {
  const [selectedPlanId, setSelectedPlanId] = useState("small");
  const [hours, setHours] = useState(730); // 730 hours = 1 month 24/7
  const [instances, setInstances] = useState(1);

  const activePlan = (INSTANCE_PLANS.find((p) => p.id === selectedPlanId) || INSTANCE_PLANS[2]) as InstancePlan;

  const hourlyCost = activePlan.hourlyPrice * instances;
  const totalCost = hourlyCost * hours;

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-4 sm:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">Interactive Compute Estimator</h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Dyzulk Cloud compute is billed to the second. Use this tool to simulate your monthly spending based on workload, instance specs, and run durations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Options Configurer */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border/50 rounded-2xl p-6">
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <Server className="size-4 text-primary" />
              1. Choose Instance Size
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {INSTANCE_PLANS.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-3.5 border rounded-xl transition text-center gap-1 group",
                    selectedPlanId === plan.id
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border/50 bg-background hover:bg-accent/40"
                  )}
                >
                  <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                    {plan.name}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{plan.cpu}</span>
                  <span className="text-[11px] text-muted-foreground">{plan.ram}</span>
                  <span className="text-xs font-semibold mt-1 text-foreground">${plan.hourlyPrice}/hr</span>
                </button>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border/50 rounded-2xl p-6 space-y-6">
            {/* Instance Count */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-semibold flex items-center gap-2">
                  <RefreshCw className="size-4 text-primary" />
                  2. Number of Instances (Horizontal Scaling)
                </h3>
                <span className="text-sm font-bold text-primary">{instances} {instances === 1 ? "Instance" : "Instances"}</span>
              </div>
              <div className="px-1 py-3">
                <Slider
                  min={1}
                  max={20}
                  step={1}
                  value={[instances]}
                  onValueChange={(val) => {
                    if (Array.isArray(val)) {
                      setInstances(val[0]);
                    }
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                <span>1 instance</span>
                <span>10 instances</span>
                <span>20 instances</span>
              </div>
            </div>

            {/* Run Duration */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-semibold flex items-center gap-2">
                  <Cpu className="size-4 text-primary" />
                  3. Scheduled Running Duration / Month
                </h3>
                <span className="text-sm font-bold text-primary">
                  {hours === 730 ? "24/7 Full Month (730h)" : `${hours} Hours`}
                </span>
              </div>
              <div className="px-1 py-3">
                <Slider
                  min={1}
                  max={730}
                  step={1}
                  value={[hours]}
                  onValueChange={(val) => {
                    if (Array.isArray(val)) {
                      setHours(val[0]);
                    }
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                <span>1 hour (Cron/Task)</span>
                <span>365 hours (Half month)</span>
                <span>730 hours (Full month)</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Dynamic Invoice Summary */}
        <Card className="border-border/60 bg-accent/10 rounded-2xl p-6 sticky top-24 self-start">
          <CardHeader className="p-0 pb-4 border-b border-border/60">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Database className="size-4 text-primary" />
              Summary of Estimate
            </CardTitle>
            <CardDescription>Estimated cost of running workloads on Dyzulk</CardDescription>
          </CardHeader>

          <CardContent className="p-0 pt-5 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Selected Size:</span>
              <span className="font-semibold text-foreground">{activePlan.name} ({activePlan.cpu}, {activePlan.ram})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Instances:</span>
              <span className="font-semibold text-foreground">{instances}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Active Duration:</span>
              <span className="font-semibold text-foreground">{hours} hours / mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Hourly Rate:</span>
              <span className="font-semibold text-foreground">${hourlyCost.toFixed(4)} / hr</span>
            </div>

            <div className="pt-4 border-t border-border/60">
              <div className="flex items-baseline justify-between">
                <span className="text-base font-bold text-foreground">Total Estimate:</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-primary">${totalCost.toFixed(2)}</span>
                  <span className="text-[11px] text-muted-foreground block">/ month</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 border border-border/50 rounded-xl p-3.5 text-xs text-muted-foreground leading-relaxed mt-2">
              <strong>Billing Note:</strong> Active compute is prorated to the nearest second. If you shut down the service after 15 minutes, you will pay only 15 minutes of compute.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

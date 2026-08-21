"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationSettings } from "@/hooks/use-organization-settings";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import { Input } from "@dyzulk/ui/components/input";
import { Label } from "@dyzulk/ui/components/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@dyzulk/ui/components/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@dyzulk/ui/components/select";
import { Check, CreditCard } from "lucide-react";

export function SettingsBilling() {
  const params = useParams();
  const orgSlug = (params?.org as string) || "";
  const {
    billType,
    setBillType,
    billingName,
    setBillingName,
    billingEmail,
    setBillingEmail,
    spendingLimit,
    spendingLimitInput,
    setSpendingLimitInput,
    isSpendingLimitModalOpen,
    setIsSpendingLimitModalOpen,
    handleSaveBilling,
    handleSaveSpendingLimit,
  } = useOrganizationSettings(orgSlug);

  // Auto scroll to spending limit if hash is present
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#spending-limit") {
      const el = document.getElementById("spending-limit-card");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="space-y-6 w-full font-mono text-xs rounded-none">
      {/* 1. Base Plan */}
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Plan</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Manage your plan for this organization.
          </p>
        </div>

        <CardContent className="p-5 space-y-4">
          <div className="border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/20 dark:bg-zinc-900/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-none">
            <div className="space-y-1">
              <h4 className="font-bold text-foreground">Your plan</h4>
              <p className="text-[11px] text-muted-foreground">Your base pricing plan.</p>
              <div className="text-sm font-bold text-foreground mt-2">Starter</div>
              
              <ul className="space-y-1.5 mt-3 text-[10px] text-muted-foreground font-semibold">
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-zinc-950 dark:text-zinc-50 shrink-0" />
                  <span>Unlimited applications and automatic deployments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-zinc-950 dark:text-zinc-50 shrink-0" />
                  <span>Managed queues</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-zinc-950 dark:text-zinc-50 shrink-0" />
                  <span>Basic logs and monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-zinc-950 dark:text-zinc-50 shrink-0" />
                  <span>Scale-to-Zero compute and spending limits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-zinc-950 dark:text-zinc-50 shrink-0" />
                  <span>Custom domains and laravel.cloud domains</span>
                </li>
              </ul>
            </div>
            
            <div className="sm:text-right shrink-0">
              <div className="text-xs font-bold text-foreground">$0.00 <span className="text-[10px] font-normal text-muted-foreground">per month + usage</span></div>
            </div>
          </div>

          <div className="border border-zinc-200/60 dark:border-zinc-800/80 p-4 bg-zinc-50/10 dark:bg-zinc-900/5 rounded-none flex items-center justify-between gap-4">
            <div className="text-[11px] text-muted-foreground">
              You are on the legacy Starter plan. You can keep using it or upgrade.
            </div>
            <Button variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 h-8 font-semibold shrink-0">
              Select a plan
            </Button>
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-0.5">
              <h4 className="font-bold text-foreground">Cancel subscription</h4>
              <p className="text-[10px] text-muted-foreground">
                You won't be able to deploy projects, or use paid resources.
              </p>
            </div>
            <Button variant="outline" size="sm" className="rounded-none border-red-200 hover:border-red-300 text-red-600 hover:text-red-700 h-9 font-semibold">
              Cancel subscription
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 2. Spending Limit */}
      <Card id="spending-limit-card" className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none scroll-mt-6">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Spending limit</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Manage your spending limit for this organization. <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:underline">Learn more</a>
          </p>
        </div>

        <CardContent className="p-20 text-center rounded-none flex flex-col items-center justify-center">
          <h4 className="font-mono font-bold text-xs text-foreground mb-1">
            {spendingLimit !== null ? `$${spendingLimit.toFixed(2)} spending limit active` : "No spending limit set"}
          </h4>
          <p className="text-muted-foreground text-[11px] max-w-sm mb-6">
            Get notified or stop compute to control your organization's usage.
          </p>
          <Button
            onClick={() => setIsSpendingLimitModalOpen(true)}
            className="rounded-none font-mono text-xs bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-5"
          >
            Set spending limit
          </Button>
        </CardContent>
      </Card>

      {/* 3. Billing details */}
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Billing details</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Manage your billing details for this organization.
          </p>
        </div>

        <CardContent className="p-5">
          <form onSubmit={handleSaveBilling} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  Bill as
                </Label>
                <Select value={billType} onValueChange={(val) => setBillType(val ?? "individual")}>
                  <SelectTrigger className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9 w-full bg-background">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800">
                    <SelectItem value="individual" className="rounded-none">Individual</SelectItem>
                    <SelectItem value="company" className="rounded-none">Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="billing-name" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                  Billing name
                </Label>
                <Input
                  id="billing-name"
                  value={billingName}
                  onChange={(e) => setBillingName(e.target.value)}
                  className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="billing-email" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                Billing email
              </Label>
              <Input
                id="billing-email"
                type="email"
                value={billingEmail}
                onChange={(e) => setBillingEmail(e.target.value)}
                className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9 max-w-lg"
              />
            </div>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
                  Billing address
                </Label>
                <div className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                  Jl. H. Meli No.9, RT.6/RW.1, Duri Kosambi, Kecamatan Cengkareng<br />
                  11750 Jakarta Barat<br />
                  Daerah Khusus Ibukota Jakarta Indonesia
                </div>
              </div>
              <Button type="button" variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 h-8 font-semibold shrink-0">
                Change address
              </Button>
            </div>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <CreditCard className="size-4 text-zinc-400" />
                <span className="font-mono text-xs font-semibold text-foreground">
                  Visa ending in 5735 <span className="text-[10px] text-muted-foreground font-normal">Expires 12/2030</span>
                </span>
              </div>
              <Button type="button" variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 h-8 font-semibold shrink-0">
                Change payment method
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* 4. Discount Codes */}
      <Card className="rounded-none border border-zinc-200 dark:border-zinc-800 bg-background shadow-none">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-sm text-foreground">Discount codes</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Apply and manage discount codes for your subscription.
          </p>
        </div>

        <CardContent className="p-5 space-y-4">
          <div className="space-y-1.5 max-w-md">
            <Label htmlFor="discount-code" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Add discount code
            </Label>
            <div className="flex gap-2">
              <Input
                id="discount-code"
                placeholder="Enter discount code"
                className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9"
              />
              <Button variant="outline" size="sm" className="rounded-none border-zinc-200 dark:border-zinc-800 h-9 font-semibold shrink-0">
                Apply
              </Button>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground">No discount codes applied</p>
        </CardContent>
      </Card>

      {/* Spending Limit Dialog */}
      <Dialog open={isSpendingLimitModalOpen} onOpenChange={setIsSpendingLimitModalOpen}>
        <DialogContent className="rounded-none max-w-sm border border-zinc-200 dark:border-zinc-800 bg-background shadow-2xl p-6 font-mono text-xs">
          <DialogHeader className="pb-3 border-b border-zinc-100 dark:border-zinc-900/50">
            <DialogTitle className="text-xs font-bold uppercase tracking-wider text-foreground">
              Spending Limit
            </DialogTitle>
            <p className="text-[10px] text-muted-foreground mt-1">
              Enter your monthly threshold limit to receive alerts or halt resources when spending exceeds this budget.
            </p>
          </DialogHeader>

          <form onSubmit={handleSaveSpendingLimit} className="space-y-5 pt-4">
            <div className="flex gap-2 rounded-none">
              <span className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-2 font-mono text-sm flex items-center text-foreground">
                $
              </span>
              <Input
                type="number"
                placeholder="5.00"
                value={spendingLimitInput}
                onChange={(e) => setSpendingLimitInput(e.target.value)}
                className="w-full bg-background border border-zinc-200 dark:border-zinc-800 px-3 py-2 font-mono text-sm focus-visible:ring-0 rounded-none text-foreground h-9"
              />
            </div>

            <div className="flex justify-end gap-3 rounded-none">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSpendingLimitModalOpen(false)}
                className="font-mono text-xs rounded-none border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 h-8"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                className="font-mono text-xs rounded-none bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-8"
              >
                Save Limits
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

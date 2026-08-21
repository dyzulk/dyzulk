"use client";

import React from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@dyzulk/ui/components/dialog";
import { Button } from "@dyzulk/ui/components/button";
import { Input } from "@dyzulk/ui/components/input";
import { Label } from "@dyzulk/ui/components/label";
import { RadioGroup, RadioGroupItem } from "@dyzulk/ui/components/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@dyzulk/ui/components/select";

interface NewDatabaseModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  dbName: string;
  setDbName: (name: string) => void;
  dbType: string;
  setDbType: (type: string) => void;
  region: string;
  setRegion: (region: string) => void;
  configPlan: string;
  setConfigPlan: (plan: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function NewDatabaseModal({
  isOpen,
  onOpenChange,
  dbName,
  setDbName,
  dbType,
  setDbType,
  region,
  setRegion,
  configPlan,
  setConfigPlan,
  onSubmit,
}: NewDatabaseModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-none max-w-lg border border-zinc-200 dark:border-zinc-800 bg-background shadow-2xl p-6 font-mono text-xs">
        <DialogHeader className="relative pb-4 border-b border-zinc-100 dark:border-zinc-900/50">
          <DialogTitle className="text-sm font-bold uppercase tracking-wider text-foreground">
            New database cluster
          </DialogTitle>
          <p className="text-[11px] text-muted-foreground mt-1 lowercase first-letter:uppercase">
            Create a new database cluster and database.{" "}
            <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:underline">
              Learn more
            </a>
          </p>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-5 pt-4">
          {/* Name Field */}
          <div className="space-y-1.5">
            <Label htmlFor="db-name" className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Name
            </Label>
            <Input
              id="db-name"
              type="text"
              placeholder="my_database_cluster"
              value={dbName}
              onChange={(e) => setDbName(e.target.value)}
              className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9 focus-visible:ring-0 focus-visible:border-zinc-950 dark:focus-visible:border-zinc-100"
            />
          </div>

          {/* Type Field */}
          <div className="space-y-1.5">
            <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Type
            </Label>
            <Select value={dbType} onValueChange={(val) => setDbType(val ?? "mysql-8.4")}>
              <SelectTrigger className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9 w-full bg-background">
                <SelectValue placeholder="Select database type" />
              </SelectTrigger>
              <SelectContent className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800">
                <SelectItem value="mysql-8.4" className="rounded-none">Laravel MySQL 8.4</SelectItem>
                <SelectItem value="postgres-16" className="rounded-none">Laravel PostgreSQL 16</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Region Field */}
          <div className="space-y-1.5">
            <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Region
            </Label>
            <Select value={region} onValueChange={(val) => setRegion(val ?? "us-east")}>
              <SelectTrigger className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800 h-9 w-full bg-background">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent className="rounded-none font-mono text-xs border-zinc-200 dark:border-zinc-800">
                <SelectItem value="us-east" className="rounded-none">US East (Ohio)</SelectItem>
                <SelectItem value="eu-central" className="rounded-none">EU Central (Frankfurt)</SelectItem>
                <SelectItem value="ap-southeast" className="rounded-none">AP Southeast (Singapore)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Configuration Card Options */}
          <div className="space-y-2">
            <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Configuration
            </Label>
            <RadioGroup value={configPlan} onValueChange={setConfigPlan} className="gap-2">
              {/* Dev Option */}
              <div
                onClick={() => setConfigPlan("dev")}
                className={`border p-3 flex items-start gap-3 cursor-pointer transition-colors rounded-none ${
                  configPlan === "dev"
                    ? "border-zinc-900 dark:border-zinc-100 bg-zinc-50/50 dark:bg-zinc-900/10"
                    : "border-zinc-200 dark:border-zinc-800 bg-background hover:bg-zinc-50/30"
                }`}
              >
                <RadioGroupItem value="dev" id="plan-dev" className="mt-1" />
                <div className="space-y-0.5">
                  <Label htmlFor="plan-dev" className="font-bold text-foreground font-mono text-xs cursor-pointer">
                    Dev
                  </Label>
                  <p className="text-[10px] text-muted-foreground">
                    Flex 512 MiB • 5 GB storage • Sleep after 5m • 1 days backups
                  </p>
                </div>
              </div>

              {/* Prod Option */}
              <div
                onClick={() => setConfigPlan("prod")}
                className={`border p-3 flex items-start gap-3 cursor-pointer transition-colors rounded-none ${
                  configPlan === "prod"
                    ? "border-zinc-900 dark:border-zinc-100 bg-zinc-50/50 dark:bg-zinc-900/10"
                    : "border-zinc-200 dark:border-zinc-800 bg-background hover:bg-zinc-50/30"
                }`}
              >
                <RadioGroupItem value="prod" id="plan-prod" className="mt-1" />
                <div className="space-y-0.5">
                  <Label htmlFor="plan-prod" className="font-bold text-foreground font-mono text-xs cursor-pointer">
                    Prod
                  </Label>
                  <p className="text-[10px] text-muted-foreground">
                    Flex 2 GiB • 20 GB storage • 7 days backups
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="pt-2 rounded-none">
            <a href="#" className="text-[11px] text-zinc-900 dark:text-zinc-100 hover:underline">
              Custom configuration &gt;
            </a>
          </div>

          {/* Footer CTA & Pricing Warning */}
          <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-900/50 rounded-none">
            <Button
              type="submit"
              className="w-full rounded-none uppercase font-mono tracking-wider font-bold bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 h-10 text-xs"
            >
              Create database cluster
            </Button>
            <p className="text-[10px] text-muted-foreground text-center leading-normal">
              This database cluster will cost up to{" "}
              <span className="text-foreground font-semibold">$7.10 per month</span> +{" "}
              <span className="text-foreground font-semibold">$0.10 per GB-mo</span> of backups.{" "}
              <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:underline">
                Learn more
              </a>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

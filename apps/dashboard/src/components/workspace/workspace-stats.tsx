"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@dyzulk/ui/components/card";

export function WorkspaceStats() {
  return (
    <div className="grid gap-6 md:grid-cols-3 rounded-none">
      <Card className="rounded-none border-zinc-200 dark:border-zinc-800 shadow-none">
        <CardHeader className="rounded-none">
          <CardTitle className="rounded-none font-mono text-sm tracking-wider uppercase text-zinc-500">Analytics Overview</CardTitle>
          <CardDescription className="rounded-none">Monthly active client sessions</CardDescription>
        </CardHeader>
        <CardContent className="rounded-none font-mono">
          <p className="text-2xl font-bold">1,280</p>
          <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
        </CardContent>
      </Card>

      <Card className="rounded-none border-zinc-200 dark:border-zinc-800 shadow-none">
        <CardHeader className="rounded-none">
          <CardTitle className="rounded-none font-mono text-sm tracking-wider uppercase text-zinc-500">Total Revenue</CardTitle>
          <CardDescription className="rounded-none">Payments processed through Render</CardDescription>
        </CardHeader>
        <CardContent className="rounded-none font-mono">
          <p className="text-2xl font-bold">$12,450.00</p>
          <p className="text-xs text-muted-foreground mt-1">+4.3% from last week</p>
        </CardContent>
      </Card>

      <Card className="rounded-none border-zinc-200 dark:border-zinc-800 shadow-none">
        <CardHeader className="rounded-none">
          <CardTitle className="rounded-none font-mono text-sm tracking-wider uppercase text-zinc-500">System Status</CardTitle>
          <CardDescription className="rounded-none">All services operational</CardDescription>
        </CardHeader>
        <CardContent className="rounded-none font-mono">
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">99.98%</p>
          <p className="text-xs text-muted-foreground mt-1">Uptime monitored live</p>
        </CardContent>
      </Card>
    </div>
  );
}

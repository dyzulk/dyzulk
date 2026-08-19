import React from "react";
import Link from "next/link";
import { Terminal, Shield, Cpu, Activity } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12 rounded-none bg-background text-foreground">
      {/* Sidebar: Branding & Visuals (Visible only on large screens) */}
      <div className="relative hidden flex-col justify-between bg-zinc-950 p-10 text-white lg:col-span-5 lg:flex border-r border-zinc-800 rounded-none overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Top Branding */}
        <div className="relative z-10 flex items-center gap-3 font-mono text-lg tracking-wider rounded-none">
          <div className="flex h-9 w-9 items-center justify-center bg-white text-black rounded-none">
            <span className="font-extrabold text-xl">D</span>
          </div>
          <span className="font-semibold text-zinc-100">DYZULK DEV</span>
        </div>

        {/* Center content - Console/Stats Preview */}
        <div className="relative z-10 my-auto space-y-6 rounded-none">
          <div className="space-y-2 rounded-none">
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono">
              Developer Cloud Platform
            </h2>
            <p className="text-zinc-400 text-sm max-w-md">
              Secure, serverless edge runtime, and lightning-fast pipelines. Manage your applications with enterprise-grade isolation.
            </p>
          </div>

          {/* Minimal Terminal Mockup */}
          <div className="border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-5 font-mono text-xs text-zinc-300 rounded-none space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 rounded-none">
              <span className="text-zinc-500 flex items-center gap-1.5"><Terminal className="size-3.5" /> dyzulk-edge-daemon</span>
              <span className="text-emerald-500 flex items-center gap-1"><Activity className="size-3 animate-pulse" /> active</span>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500">&gt; dyzulk system status</p>
              <p className="text-emerald-400">✓ Edge clusters operational (24 nodes)</p>
              <p className="text-blue-400">ℹ CPU utilization: 14.8%</p>
              <p className="text-zinc-400">ℹ Active tunnels: 1,842 connections</p>
              <p className="text-zinc-500">&gt; _</p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 flex items-center gap-6 text-xs text-zinc-500 font-mono rounded-none">
          <span className="flex items-center gap-1"><Shield className="size-3.5" /> Zero-Trust Auth</span>
          <span className="flex items-center gap-1"><Cpu className="size-3.5" /> Edge Routing v2</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col justify-center lg:col-span-7 rounded-none px-6 py-12 md:px-12 lg:px-16 bg-background">
        <div className="mx-auto w-full max-w-[420px] space-y-8 rounded-none">
          {children}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Terminal, Check, Copy, Play, Cpu, Layers } from "lucide-react";

const codeSnippets = {
  cli: `$ pnpm create dyzulk-app my-platform
$ cd my-platform
$ dyzulk deploy --prod

[info] Connecting to edge network...
[info] Compiling Next.js monorepo workspace...
[info] Optimization complete (1.8s)
[success] Deployed to 325 edge regions!
🌐 URL: https://my-platform.dyzulk.cloud`,

  config: `import { defineConfig } from "@dyzulk/cloud";

export default defineConfig({
  framework: "nextjs",
  monorepo: "turborepo",
  regions: ["auto-global"],
  environment: {
    NODE_ENV: "production",
    DATABASE_URL: process.env.DATABASE_URL,
  },
  autoScale: {
    minReplicas: 1,
    maxReplicas: 100,
  },
});`,

  worker: `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/health") {
      return Response.json({ status: "healthy", region: env.REGION });
    }
    return env.ASSETS.fetch(request);
  },
};`,
};

export function TerminalPreview() {
  const [activeTab, setActiveTab] = useState<"cli" | "config" | "worker">("cli");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto w-full max-w-[1400px] mt-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Developer-First DX & Configuration
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Deploy from your terminal or push to GitHub. Declarative configuration for full transparency.
        </p>
      </div>

      <div className="relative border rounded-2xl bg-zinc-950 text-zinc-100 overflow-hidden shadow-2xl max-w-4xl mx-auto">
        {/* Terminal Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 me-4">
              <span className="size-3 rounded-full bg-red-500/80 inline-block" />
              <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="size-3 rounded-full bg-green-500/80 inline-block" />
            </div>

            {/* Tab Switches */}
            <div className="flex gap-1 bg-zinc-800/60 p-1 rounded-lg text-xs font-mono">
              <button
                onClick={() => setActiveTab("cli")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
                  activeTab === "cli" ? "bg-zinc-700 text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Terminal className="size-3.5" /> CLI Deploy
              </button>
              <button
                onClick={() => setActiveTab("config")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
                  activeTab === "config" ? "bg-zinc-700 text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Layers className="size-3.5" /> dyzulk.config.ts
              </button>
              <button
                onClick={() => setActiveTab("worker")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
                  activeTab === "worker" ? "bg-zinc-700 text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Cpu className="size-3.5" /> edge-worker.ts
              </button>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2.5 py-1 rounded-md border border-zinc-700/60 transition"
          >
            {copied ? <Check className="size-3.5 text-green-400" /> : <Copy className="size-3.5" />}
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>

        {/* Code View */}
        <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
          <pre className="text-zinc-300">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Status footer */}
        <div className="flex items-center justify-between px-6 py-2 border-t border-zinc-800/80 bg-zinc-900/40 text-[11px] text-zinc-400">
          <div className="flex items-center gap-2">
            <Play className="size-3 text-emerald-400 fill-emerald-400" />
            <span>Status: Ready to deploy</span>
          </div>
          <span>Environment: Node 22.x / Next.js 15</span>
        </div>
      </div>
    </section>
  );
}

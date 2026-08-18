"use client";

import { useState } from "react";
import { Terminal, Check, Copy, Play, Cpu, Layers } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@workspace/ui/components/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@workspace/ui/components/tabs";
import { Button } from "@workspace/ui/components/button";

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

      <Card className="border rounded-2xl bg-zinc-950 text-zinc-100 overflow-hidden shadow-2xl max-w-4xl mx-auto p-0 border-zinc-800">
        <Tabs defaultValue="cli" onValueChange={(val) => setActiveTab(val as "cli" | "config" | "worker")}>
          {/* Header Controls */}
          <CardHeader className="flex flex-row items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/80 space-y-0">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 me-2">
                <span className="size-3 rounded-full bg-red-500/80 inline-block" />
                <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="size-3 rounded-full bg-green-500/80 inline-block" />
              </div>

              <TabsList className="bg-zinc-800/60 p-1 border-0">
                <TabsTrigger value="cli" className="gap-1.5 text-xs font-mono">
                  <Terminal className="size-3.5" /> CLI Deploy
                </TabsTrigger>
                <TabsTrigger value="config" className="gap-1.5 text-xs font-mono">
                  <Layers className="size-3.5" /> dyzulk.config.ts
                </TabsTrigger>
                <TabsTrigger value="worker" className="gap-1.5 text-xs font-mono">
                  <Cpu className="size-3.5" /> edge-worker.ts
                </TabsTrigger>
              </TabsList>
            </div>

            <Button
              variant="outline"
              size="xs"
              onClick={handleCopy}
              className="text-xs border-zinc-700 bg-zinc-800/40 text-zinc-300 hover:bg-zinc-700 hover:text-white"
            >
              {copied ? <Check className="size-3.5 text-green-400" /> : <Copy className="size-3.5" />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </Button>
          </CardHeader>

          {/* Tab Contents */}
          <CardContent className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
            <TabsContent value="cli" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-zinc-300">
                <code>{codeSnippets.cli}</code>
              </pre>
            </TabsContent>
            <TabsContent value="config" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-zinc-300">
                <code>{codeSnippets.config}</code>
              </pre>
            </TabsContent>
            <TabsContent value="worker" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-zinc-300">
                <code>{codeSnippets.worker}</code>
              </pre>
            </TabsContent>
          </CardContent>

          {/* Status footer */}
          <CardFooter className="flex items-center justify-between px-6 py-2.5 border-t border-zinc-800/80 bg-zinc-900/40 text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <Play className="size-3 text-emerald-400 fill-emerald-400" />
              <span>Status: Ready to deploy</span>
            </div>
            <span>Environment: Node 22.x / Next.js 15</span>
          </CardFooter>
        </Tabs>
      </Card>
    </section>
  );
}

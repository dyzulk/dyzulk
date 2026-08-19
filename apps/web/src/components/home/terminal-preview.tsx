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

      <Card className="border rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto p-0">
        <Tabs defaultValue="cli" onValueChange={(val) => setActiveTab(val as "cli" | "config" | "worker")}>
          {/* Header Controls */}
          <CardHeader className="flex flex-row items-center justify-between px-4 py-3 border-b bg-muted/50 space-y-0">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 me-2">
                <span className="size-3 rounded-full bg-destructive/80 inline-block" />
                <span className="size-3 rounded-full bg-chart-2/80 inline-block" />
                <span className="size-3 rounded-full bg-chart-1/80 inline-block" />
              </div>

              <TabsList className="bg-muted p-1 border-0">
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
              className="text-xs"
            >
              {copied ? <Check className="size-3.5 text-chart-2" /> : <Copy className="size-3.5" />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </Button>
          </CardHeader>

          {/* Tab Contents */}
          <CardContent className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
            <TabsContent value="cli" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-muted-foreground">
                <code>{codeSnippets.cli}</code>
              </pre>
            </TabsContent>
            <TabsContent value="config" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-muted-foreground">
                <code>{codeSnippets.config}</code>
              </pre>
            </TabsContent>
            <TabsContent value="worker" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-muted-foreground">
                <code>{codeSnippets.worker}</code>
              </pre>
            </TabsContent>
          </CardContent>

          {/* Status footer */}
          <CardFooter className="flex items-center justify-between px-6 py-2.5 border-t text-[11px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <Play className="size-3 text-chart-2 fill-current" />
              <span>Status: Ready to deploy</span>
            </div>
            <span>Environment: Node 22.x / Next.js 15</span>
          </CardFooter>
        </Tabs>
      </Card>
    </section>
  );
}

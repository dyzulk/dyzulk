"use client";

import { useState } from "react";
import { Terminal, Check, Copy, Play, Database, Shield } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@workspace/ui/components/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@workspace/ui/components/tabs";
import { Button } from "@workspace/ui/components/button";

const codeSnippets = {
  db: `// Connect to Dyzulk Managed Postgres instantly from any worker
import { db } from "@dyzulk/database";

export default {
  async fetch(request) {
    // Zero connection-pool configuration needed
    const users = await db.select().from("users").limit(10);
    return Response.json(users);
  }
};`,

  waf: `# Define rate limits, SSL options, and WAF rules in dyzulk.config.json
{
  "security": {
    "ssl": "strict",
    "waf": {
      "rules": ["owasp", "bot-block"],
      "rateLimiting": {
        "requests": 100,
        "window": "1m"
      }
    }
  }
}`,

  cli: `# Setup and run edge nodes locally for debugging
$ dyzulk dev
[info] Starting local Dev server...
[info] Edge Worker listening at http://localhost:8000
[info] Syncing local SQLite with cloud replica... (0.4s)
[success] Hot Reloading Active!`
};

export function ProductsDx() {
  const [activeTab, setActiveTab] = useState<"db" | "waf" | "cli">("db");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Developer-First Configuration
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Manage databases, secure routes, and run local testing using unified, developer-friendly paradigms.
        </p>
      </div>

      <Card className="border border-border/60 rounded-none shadow-md max-w-3xl mx-auto p-0">
        <Tabs defaultValue="db" onValueChange={(val) => setActiveTab(val as "db" | "waf" | "cli")}>
          {/* Header Controls */}
          <CardHeader className="flex flex-row items-center justify-between px-4 py-3 border-b bg-muted/30 space-y-0 rounded-none">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 me-2">
                <span className="size-2.5 bg-foreground/30 inline-block rounded-full" />
                <span className="size-2.5 bg-foreground/20 inline-block rounded-full" />
                <span className="size-2.5 bg-foreground/10 inline-block rounded-full" />
              </div>

              <TabsList className="bg-muted p-1 border-0 rounded-none">
                <TabsTrigger value="db" className="gap-1.5 text-xs font-mono rounded-none">
                  <Database className="size-3.5" /> postgres-sync.ts
                </TabsTrigger>
                <TabsTrigger value="waf" className="gap-1.5 text-xs font-mono rounded-none">
                  <Shield className="size-3.5" /> dyzulk.config.json
                </TabsTrigger>
                <TabsTrigger value="cli" className="gap-1.5 text-xs font-mono rounded-none">
                  <Terminal className="size-3.5" /> Local CLI dev
                </TabsTrigger>
              </TabsList>
            </div>

            <Button
              variant="outline"
              size="xs"
              onClick={handleCopy}
              className="text-xs rounded-none border-border/80"
            >
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </Button>
          </CardHeader>

          {/* Tab Contents */}
          <CardContent className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[200px] bg-card">
            <TabsContent value="db" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-muted-foreground">
                <code>{codeSnippets.db}</code>
              </pre>
            </TabsContent>
            <TabsContent value="waf" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-muted-foreground">
                <code>{codeSnippets.waf}</code>
              </pre>
            </TabsContent>
            <TabsContent value="cli" className="m-0 border-0 p-0 shadow-none">
              <pre className="text-muted-foreground">
                <code>{codeSnippets.cli}</code>
              </pre>
            </TabsContent>
          </CardContent>

          {/* Status footer */}
          <CardFooter className="flex items-center justify-between px-6 py-2.5 border-t text-[10px] text-muted-foreground bg-muted/10 rounded-none">
            <div className="flex items-center gap-2">
              <Play className="size-3 text-primary" />
              <span>Status: Cloud Synchronized</span>
            </div>
            <span>Environment: Local Sandbox v1.0.4</span>
          </CardFooter>
        </Tabs>
      </Card>
    </section>
  );
}

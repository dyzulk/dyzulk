"use client";

import React from "react";
import { Button } from "@dyzulk/ui/components/button";
import { Input } from "@dyzulk/ui/components/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@dyzulk/ui/components/card";
import { Label } from "@dyzulk/ui/components/label";
import { Skeleton } from "@dyzulk/ui/components/skeleton";
import { ArrowRight, Building } from "lucide-react";
import { useCreateOrg } from "@/hooks/use-create-org";

export function CreateOrgSection() {
  const { name, setName, isLoading, error, handleSubmit, isChecking } = useCreateOrg();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 rounded-none">
      <Card className="group w-full max-w-md border-zinc-200 dark:border-zinc-800 bg-card rounded-none shadow-sm hover:border-primary/40 transition-all duration-300">
        {isChecking ? (
          <CardContent className="p-6 space-y-6 rounded-none">
            <div className="space-y-2 rounded-none">
              <Skeleton className="h-6 w-48 rounded-none animate-pulse" />
              <Skeleton className="h-3.5 w-full rounded-none animate-pulse" />
            </div>
            <div className="space-y-4 rounded-none">
              <div className="space-y-1.5 rounded-none">
                <Skeleton className="h-3 w-28 rounded-none animate-pulse" />
                <Skeleton className="h-10 w-full rounded-none animate-pulse" />
              </div>
              <Skeleton className="h-10 w-full rounded-none animate-pulse" />
            </div>
          </CardContent>
        ) : (
          <>
            <CardHeader className="space-y-2 pb-6 rounded-none bg-zinc-50/50 dark:bg-zinc-900/10 group-hover:bg-primary/[0.01] border-b border-zinc-100 dark:border-zinc-900/50 transition-colors duration-300">
              <div className="size-10 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center rounded-none font-bold mb-1 group-hover:scale-105 transition-transform duration-300">
                <Building className="size-5" />
              </div>
              <CardTitle className="text-lg font-bold tracking-tight font-mono rounded-none">
                Buat Organisasi Baru
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground rounded-none">
                Buat ruang kerja kolaboratif Anda sendiri untuk memonitor kluster dan layanan node.
              </CardDescription>
              {error && (
                <div className="text-xs font-mono text-red-500 bg-red-50 dark:bg-red-950/30 p-2 border border-red-200 dark:border-red-900 rounded-none mt-2">
                  {error}
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4 rounded-none pt-6">
              <form onSubmit={handleSubmit} className="space-y-3.5 rounded-none">
                <div className="space-y-1.5 rounded-none">
                  <Label htmlFor="org-name" className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    Nama Organisasi
                  </Label>
                  <Input
                    id="org-name"
                    type="text"
                    placeholder="Misal: Acme Corp atau Kelompok Kami"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isLoading}
                    className="rounded-none border-zinc-200 dark:border-zinc-800 bg-background text-sm focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary/50 h-10 transition-all duration-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-none bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 flex items-center justify-center gap-2 font-mono h-10 text-sm transition-all duration-300 cursor-pointer"
                  disabled={isLoading || !name.trim()}
                >
                  {isLoading ? (
                    <div className="size-4 animate-spin border-2 border-current border-t-transparent" />
                  ) : (
                    <>
                      Lanjutkan <ArrowRight className="size-3.5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}

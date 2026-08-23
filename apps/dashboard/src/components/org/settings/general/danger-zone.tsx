"use client";

import React from "react";
import { Button } from "@dyzulk/ui/components/button";
import { Card, CardContent } from "@dyzulk/ui/components/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@dyzulk/ui/components/alert-dialog";

interface DangerZoneProps {
  handleDeleteOrganization: () => void;
}

export function DangerZone({ handleDeleteOrganization }: DangerZoneProps) {
  return (
    <Card className="group rounded-none border border-red-200 dark:border-red-950/80 bg-background shadow-sm hover:border-red-500/50 transition-all duration-300">
      <div className="p-4 border-b border-red-200 dark:border-red-950/80 bg-red-50/20 dark:bg-red-950/5">
        <h3 className="font-bold text-sm text-red-600 dark:text-red-400">Danger</h3>
        <p className="text-[11px] text-red-500/80 mt-0.5 font-mono">
          Destructive settings that cannot be undone.
        </p>
      </div>

      <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="space-y-0.5">
          <h4 className="font-bold text-foreground">Delete organization</h4>
          <p className="text-[10px] text-muted-foreground">
            Deleting your organization will permanently delete all of its applications, environments, and resources.
          </p>
        </div>

        <AlertDialog>
          <AlertDialogTrigger
            className="rounded-none border-red-200 hover:border-red-500/50 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 hover:text-red-700 h-9 font-semibold transition-all duration-300 cursor-pointer border px-3 py-1 flex items-center justify-center text-xs"
          >
            Delete organization
          </AlertDialogTrigger>
          <AlertDialogContent className="font-mono text-xs">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the organization and all associated applications, environments, and configuration.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
              <AlertDialogAction
                variant="destructive"
                onClick={handleDeleteOrganization}
                className="cursor-pointer"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}

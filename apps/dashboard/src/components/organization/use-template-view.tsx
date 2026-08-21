"use client";

import React from "react";
import { SiNextdotjs, SiReact, SiVuedotjs, SiSvelte, SiNodedotjs, SiPython, SiGo, SiLaravel, SiWordpress } from "@icons-pack/react-simple-icons";
import { Cpu } from "lucide-react";
import { Card } from "@dyzulk/ui/components/card";
import { ApplicationTemplate } from "@/hooks/use-create-application";

interface UseTemplateViewProps {
  templates: ApplicationTemplate[];
  onSelect: (templateId: string) => void;
}

export function UseTemplateView({ templates, onSelect }: UseTemplateViewProps) {
  const renderTemplateIcon = (tech: string) => {
    const iconSize = "size-5 text-muted-foreground group-hover:text-foreground transition-colors";
    switch (tech) {
      case "nextjs":
        return <SiNextdotjs className={iconSize} />;
      case "react":
        return <SiReact className={`${iconSize} text-sky-500`} />;
      case "vue":
        return <SiVuedotjs className={`${iconSize} text-emerald-500`} />;
      case "svelte":
        return <SiSvelte className={`${iconSize} text-orange-500`} />;
      case "node":
        return <SiNodedotjs className={`${iconSize} text-green-600 dark:text-green-500`} />;
      case "python":
        return <SiPython className={`${iconSize} text-yellow-500 dark:text-yellow-400`} />;
      case "go":
        return <SiGo className={`${iconSize} text-sky-400`} />;
      case "laravel":
        return <SiLaravel className={`${iconSize} text-red-600 dark:text-red-500`} />;
      case "wordpress":
        return <SiWordpress className={`${iconSize} text-sky-600 dark:text-sky-500`} />;
      default:
        return <Cpu className={iconSize} />;
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-none">
      {templates.map((tmpl) => (
        <Card
          key={tmpl.id}
          onClick={() => onSelect(tmpl.id)}
          className="group rounded-none border border-zinc-200 dark:border-zinc-800 bg-background p-4 shadow-none hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer transition-colors flex items-start gap-4"
        >
          <div className="size-10 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-center rounded-none shrink-0">
            {renderTemplateIcon(tmpl.tech)}
          </div>
          <div className="flex flex-col gap-0.5 rounded-none">
            <h3 className="font-mono font-bold text-sm text-foreground">
              {tmpl.name}
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              {tmpl.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

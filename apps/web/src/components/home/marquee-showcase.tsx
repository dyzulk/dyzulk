const techStack = [
  { name: "Next.js 15", category: "Framework" },
  { name: "React 19", category: "UI Library" },
  { name: "Turborepo", category: "Monorepo Build System" },
  { name: "Tailwind CSS v4", category: "Styling" },
  { name: "Cloudflare Workers", category: "Edge Execution" },
  { name: "Render Platform", category: "App Hosting" },
  { name: "PostgreSQL & Prisma", category: "Database" },
  { name: "Redis & Upstash", category: "Caching" },
  { name: "TypeScript 5", category: "Language" },
  { name: "Docker", category: "Containers" },
];

export function MarqueeShowcase() {
  return (
    <section className="mx-auto w-full max-w-[1400px] mt-24 px-4 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          Powering Modern Web Frameworks & Stack Ecosystems
        </p>
      </div>

      <div className="relative flex overflow-hidden select-none border-y border-border/40 py-6 mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex gap-6 animate-marquee shrink-0 min-w-full">
          {techStack.concat(techStack).map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border bg-card/60 backdrop-blur-sm text-card-foreground shrink-0 shadow-sm hover:border-primary/40 transition"
            >
              <div className="size-2.5 rounded-full bg-primary" />
              <div>
                <p className="text-sm font-semibold whitespace-nowrap">{item.name}</p>
                <p className="text-[10px] text-muted-foreground">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

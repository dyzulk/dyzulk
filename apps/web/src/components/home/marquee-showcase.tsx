import {
  SiNextdotjs,
  SiReact,
  SiTurborepo,
  SiTailwindcss,
  SiCloudflare,
  SiRender,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiUpstash,
  SiTypescript,
  SiDocker,
} from "@icons-pack/react-simple-icons";

const techStack = [
  { name: "Next.js 15", category: "Framework", icon: SiNextdotjs },
  { name: "React 19", category: "UI Library", icon: SiReact },
  { name: "Turborepo", category: "Monorepo Build System", icon: SiTurborepo },
  { name: "Tailwind CSS v4", category: "Styling", icon: SiTailwindcss },
  { name: "Cloudflare Workers", category: "Edge Execution", icon: SiCloudflare },
  { name: "Render Platform", category: "App Hosting", icon: SiRender },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
  { name: "Prisma", category: "ORM", icon: SiPrisma },
  { name: "Redis", category: "Caching", icon: SiRedis },
  { name: "Upstash", category: "Serverless Data", icon: SiUpstash },
  { name: "TypeScript 5", category: "Language", icon: SiTypescript },
  { name: "Docker", category: "Containers", icon: SiDocker },
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
          {techStack.concat(techStack).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border bg-card/60 backdrop-blur-sm text-card-foreground shrink-0 shadow-sm hover:border-primary/40 transition group"
              >
                <div className="size-6 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <Icon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold whitespace-nowrap">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground">{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


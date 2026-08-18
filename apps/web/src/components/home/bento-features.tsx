import { Globe, Cpu, GitBranch, ShieldCheck, Zap, Server, BarChart3, Database } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Anycast Edge Network",
    description: "Deploy your frontend and serverless APIs to 300+ edge locations worldwide for instant sub-10ms response times.",
    badge: "Cloudflare Speed",
    className: "lg:col-span-2",
  },
  {
    icon: Cpu,
    title: "Instant Auto-Scaling Compute",
    description: "Scale seamlessly from 0 to 100,000 requests per second. Pay only for the exact milliseconds your code runs.",
    badge: "Render Simplicity",
    className: "lg:col-span-1",
  },
  {
    icon: GitBranch,
    title: "Native Monorepo & Git CI/CD",
    description: "Built-in Turborepo workspace optimization. Push to Git and let smart caching skip redundant builds.",
    badge: "Laravel Cloud DX",
    className: "lg:col-span-1",
  },
  {
    icon: Database,
    title: "Managed Edge Databases & Caching",
    description: "Connect to low-latency Postgres, Redis, and Blob storage with automatic replication and zero-downtime migrations.",
    badge: "Zero Config",
    className: "lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security & DDoS",
    description: "Automatic SSL, Web Application Firewall (WAF), rate limiting, and Bot Management built right in.",
    badge: "Built-in Protection",
    className: "lg:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Real-Time Observability",
    description: "Stream server logs, track performance metrics, and receive instant alerting on anomalies.",
    badge: "Live Telemetry",
    className: "lg:col-span-2",
  },
];

export function BentoFeatures() {
  return (
    <section className="mx-auto w-full max-w-[1400px] mt-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Everything You Need for Enterprise Apps
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Combining the best features of modern cloud infrastructure into one unified monorepo platform.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className={`group relative p-8 border rounded-3xl bg-card text-card-foreground hover:border-primary/50 transition-all duration-300 shadow-md flex flex-col justify-between ${feature.className}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="size-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border bg-secondary text-secondary-foreground">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <Zap className="size-3" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

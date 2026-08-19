import { Cpu, Database, Shield, Terminal, Check, Globe, Server, Key, GitBranch } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

interface ProductItem {
  name: string;
  description: string;
  badge?: string;
  icon: any;
  features: string[];
}

interface ProductSection {
  category: string;
  description: string;
  items: ProductItem[];
}

const productSections: ProductSection[] = [
  {
    category: "Compute",
    description: "Highly scalable, low-latency execution environments for applications and APIs.",
    items: [
      {
        name: "Edge Compute Workers",
        description: "Execute lightweight JavaScript/Wasm code at edge locations directly on request arrival.",
        badge: "Production Ready",
        icon: Cpu,
        features: [
          "Sub-10ms startup times",
          "Deploy globally to 300+ locations",
          "Unlimited scaling on-demand",
          "Full Node.js API compatibility"
        ]
      },
      {
        name: "Serverless Containers",
        description: "Deploy complex applications packages in Docker containers with scale-to-zero capabilities.",
        badge: "Beta",
        icon: Server,
        features: [
          "Zero-configuration buildpacks",
          "Automatic scaling from 0 to 100+ units",
          "Environment variable secrets management",
          "HTTP and gRPC protocol support"
        ]
      }
    ]
  },
  {
    category: "Storage & Database",
    description: "Reliable database engines and persistent caching designed for global operations.",
    items: [
      {
        name: "Managed Postgres",
        description: "Fully-managed, highly-available relational SQL database with automated backups.",
        badge: "Production Ready",
        icon: Database,
        features: [
          "Active-active global read replicas",
          "Point-in-time recovery (PITR)",
          "Auto-indexing and query advisor",
          "Serverless connection pooling"
        ]
      },
      {
        name: "KV & Cache Storage",
        description: "Ultra-fast distributed key-value store optimized for high-read web apps.",
        badge: "Active",
        icon: Key,
        features: [
          "Sub-ms read latencies globally",
          "JSON-compatible document structures",
          "TTL expiration for cache items",
          "Edge network synchronization"
        ]
      }
    ]
  },
  {
    category: "Network & Security",
    description: "Content delivery and automatic enterprise security protections.",
    items: [
      {
        name: "Global Anycast CDN",
        description: "Static and dynamic caching architecture using a global high-speed backbone.",
        badge: "Active",
        icon: Globe,
        features: [
          "Smart routing bypasses outages",
          "Custom headers & cache control rules",
          "Instant purge in <150ms",
          "Brotli/Gzip dynamic compression"
        ]
      },
      {
        name: "WAF & DDoS Shield",
        description: "Enterprise protection defending your sites and APIs from threats automatically.",
        badge: "Active",
        icon: Shield,
        features: [
          "OWASP Top 10 rule matching",
          "Automatic global TLS certificates",
          "Rate limiting & bot control rules",
          "L3/L4/L7 volumetric DDoS protection"
        ]
      }
    ]
  },
  {
    category: "Developer DX",
    description: "Modern developer workflow tools designed to maximize productivity.",
    items: [
      {
        name: "Dyzulk CLI",
        description: "Run, test, and deploy applications right from your local developer terminal.",
        badge: "Active",
        icon: Terminal,
        features: [
          "Local edge sandbox runtime",
          "Zero-config monorepo bindings",
          "Deploy with simple `dyzulk deploy`",
          "Project templates for all frameworks"
        ]
      },
      {
        name: "Git CI/CD Pipeline",
        description: "Push-to-deploy workflow with built-in Turborepo workspace optimization.",
        badge: "Popular",
        icon: GitBranch,
        features: [
          "Automatic preview deployments",
          "Smart workspace caching",
          "GitHub, GitLab, and Bitbucket sync",
          "Collaborator build logs streaming"
        ]
      }
    ]
  }
];

export function ProductsGrid() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 space-y-16">
      {productSections.map((section, idx) => (
        <div key={idx} className="space-y-6">
          {/* Section Header */}
          <div className="border-b border-border/60 pb-3 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
              {section.category}
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl md:text-right">
              {section.description}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item, itemIdx) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={itemIdx}
                  className="flex flex-col justify-between border border-border/50 hover:border-primary/50 transition-colors duration-300"
                >
                  <CardHeader className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="size-10 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary rounded-none">
                        <IconComp className="size-5" />
                      </div>
                      {item.badge && (
                        <Badge variant="outline" className="rounded-none font-semibold uppercase tracking-wider text-[10px]">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold tracking-tight">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="mt-1.5 text-xs/relaxed text-muted-foreground min-h-[36px]">
                        {item.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 pb-6">
                    <div className="space-y-2.5">
                      {item.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs">
                          <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

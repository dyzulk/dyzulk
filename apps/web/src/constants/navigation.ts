import { SITE_CONFIG } from "./site";

export const PATHS = {
  home: "/",
  docs: "/docs",
  login: "#login",
  products: "#products",
  solutions: "#solutions",
  pricing: "/pricing",
  changelog: "#changelog",
} as const;

export const HEADER_NAV_LINKS = [
  { name: "Products", href: PATHS.products },
  { name: "Solutions", href: PATHS.solutions },
  { name: "Pricing", href: PATHS.pricing },
  { name: "Docs", href: PATHS.docs },
  { name: "Changelog", href: PATHS.changelog },
] as const;

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { label: "Edge Compute Workers", href: "#" },
      { label: "Serverless Containers", href: "#" },
      { label: "Global Anycast CDN", href: "#" },
      { label: "Managed Postgres", href: "#" },
      { label: "KV Storage & Cache", href: "#" },
      { label: "WAF & DDoS Shield", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Next.js Monorepos", href: "#" },
      { label: "AI Applications", href: "#" },
      { label: "Micro-frontends", href: "#" },
      { label: "Enterprise Infra", href: "#" },
      { label: "E-Commerce Engines", href: "#" },
    ],
  },
  {
    title: "Developer DX",
    links: [
      { label: "Documentation", href: PATHS.docs },
      { label: "API Reference", href: "#" },
      { label: "Dyzulk CLI", href: "#" },
      { label: "GitHub Repository", href: SITE_CONFIG.links.github },
      { label: "Release Notes", href: "#" },
      { label: "Community Forum", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#", badge: "Hiring" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security & SOC2", href: "#" },
      { label: "System Status", href: "#" },
    ],
  },
];

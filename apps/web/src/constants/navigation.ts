import { SITE_CONFIG } from "./site";

export const PATHS = {
  home: "/",
  docs: "/docs",
  login: "http://dash.dyzulk.com/login",
  products: "/products",
  solutions: "#solutions",
  pricing: "/pricing",
  changelog: "#changelog",
} as const;

export const HEADER_NAV_LINKS = [
  { name: "Product", href: PATHS.products, hasMegaMenu: true },
  { name: "Developers", href: PATHS.docs, hasMegaMenu: true },
  { name: "Solutions", href: PATHS.solutions, hasMegaMenu: true },
  { name: "Pricing", href: PATHS.pricing, hasMegaMenu: false },
  { name: "Company", href: "#", hasMegaMenu: true },
] as const;

export const PRODUCT_MEGA_MENU = {
  platformOverview: {
    title: "Platform Overview",
    href: "/products",
    features: [
      { name: "Autoscaling", href: "#" },
      { name: "Private Networking", href: "#" },
      { name: "Persistent Disks", href: "#" },
      { name: "Infrastructure as Code", href: "#" },
      { name: "Preview Environments", href: "#" },
      { name: "Zero Downtime Deploys", href: "#" },
      { name: "Render API", href: "#" },
    ],
  },
  workflows: {
    title: "Workflows",
    href: "#",
    services: [
      { name: "Static Sites", href: "#" },
      { name: "Web Services", href: "#" },
      { name: "Private Services", href: "#" },
      { name: "Background Workers", href: "#" },
      { name: "Cron Jobs", href: "#" },
      { name: "Render Postgres", href: "#" },
      { name: "Render Key Value", href: "#" },
    ],
  },
};

export const DEVELOPERS_MEGA_MENU = {
  docs: {
    title: "Docs",
    description: "Learn how to build and deploy on Render",
    href: PATHS.docs,
  },
  agents: {
    title: "Agents",
    description: "Deploy to Render with your coding agent",
    href: "#",
  },
  getStarted: {
    title: "GET STARTED",
    links: [
      { name: "Framework Quickstarts", href: "#" },
      { name: "Templates", href: "#" },
    ],
  },
  updates: {
    title: "UPDATES & ANNOUNCEMENTS",
    links: [
      { name: "Blog", href: "#" },
      { name: "Changelog", href: PATHS.changelog },
    ],
  },
};

export const SOLUTIONS_MEGA_MENU = {
  customers: {
    title: "Customers",
    description: "How the best teams scale faster",
    href: "#",
  },
  migrationCredits: {
    title: "Migration Credits",
    description: "Apply for credits to cover switching costs",
    href: "#",
  },
  build: {
    title: "BUILD",
    links: [
      { name: "Render for Startups", href: "#" },
      { name: "HIPAA on Render", href: "#" },
    ],
  },
  migrate: {
    title: "MIGRATE",
    links: [
      { name: "Heroku Migration Guide", href: "#" },
      { name: "Railway Migration Guide", href: "#" },
    ],
  },
};

export const COMPANY_MEGA_MENU = [
  { name: "About Us", href: "#" },
  { name: "Security", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Newsroom", href: "#" },
];

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

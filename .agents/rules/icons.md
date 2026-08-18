# Icon Guidelines: `lucide-react` vs `@icons-pack/react-simple-icons`

To prevent import errors and ensure consistency across the monorepo, AI agents MUST follow these icon conventions:

## 1. UI & System Icons (`lucide-react`)
Use `lucide-react` **exclusively** for UI controls, navigation, status indicators, and generic actions.
- **Allowed**: `ArrowRight`, `Layers`, `ShieldCheck`, `Sparkles`, `Globe`, `Cpu`, `Database`, `Terminal`, `Check`, `X`, `Search`, `Menu`, `ChevronRight`, etc.
- **STRICTLY PROHIBITED**: Do NOT attempt to import company/brand/social logos from `lucide-react` (e.g., `Github`, `Twitter`, `Discord`, `Facebook`, `Google`, `Slack`, etc.). Lucide does not export or maintain brand logos.

## 2. Brand, Tech Stack & Social Media Icons (`@icons-pack/react-simple-icons`)
Use `@icons-pack/react-simple-icons` **exclusively** for brand logos, technology stack items, frameworks, and social media links.
- **Naming Convention**: Import names start with `Si` followed by PascalCase brand name.
- **Common Social Brands**: `SiGithub`, `SiX`, `SiDiscord`, `SiYoutube`, `SiLinkedin`, `SiInstagram`
- **Common Tech Stack Brands**: `SiNextdotjs`, `SiReact`, `SiTurborepo`, `SiTailwindcss`, `SiCloudflare`, `SiRender`, `SiPostgresql`, `SiPrisma`, `SiRedis`, `SiUpstash`, `SiTypescript`, `SiDocker`

## 3. Styling Standards
- Prefer Tailwind size utilities over hardcoded width/height props:
  ```tsx
  <SiGithub className="size-4" />
  <Layers className="size-5" />
  ```
- Use theme-aware text color utilities for hover states:
  ```tsx
  <SiX className="text-muted-foreground hover:text-foreground transition-colors" />
  ```

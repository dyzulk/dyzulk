<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Icon Usage Guidelines (`lucide-react` vs `@icons-pack/react-simple-icons`)

- **UI & System Icons (`lucide-react`)**: Use strictly for generic UI components, system actions, and navigation (e.g. `ArrowRight`, `Layers`, `ShieldCheck`, `Check`, `Sparkles`, `Globe`, `Cpu`, `Database`, `Terminal`).
  - **DO NOT** import brand/social logos from `lucide-react` (e.g. `Github`, `Twitter`, `Facebook`, `Discord`, `Google`, `Slack`).
- **Brand, Social & Tech Stack Icons (`@icons-pack/react-simple-icons`)**: Use strictly for company logos, technology stack logos, and social media platforms.
  - Component names start with `Si` followed by PascalCase brand name (e.g., `SiGithub`, `SiX`, `SiDiscord`, `SiNextdotjs`, `SiReact`, `SiTurborepo`, `SiTailwindcss`, `SiCloudflare`, `SiRender`, `SiPostgresql`, `SiDocker`).
- **Styling**: Always use Tailwind `size-*` classes (e.g. `size-4`, `size-5`) and theme text color classes (`text-muted-foreground hover:text-foreground`).


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

# Front-end Development Guidelines

- **Explicit Page Composition**: Main pages must always explicitly list and call the rendered child components directly in the page body (e.g., `<HeroSection />`, `<TerminalPreview />`) instead of concealing them behind dynamic routing or bloated layout hierarchies.
- **Shadcn UI Monorepo Components**: Always use UI components from the monorepo's shared packages (`@workspace/ui/components/...`).
- **No Raw CSS Component Overrides**: Do not override default style configurations of UI components via custom CSS styles or files. Use utility classes (Tailwind CSS) or customize the theme configuration.
- **Strict Zero Rounded (Flat Design) Rule**: This codebase uses the flat **Lyra theme**. All UI elements—including buttons, cards, menus, accordions, inputs, AND manual layouts (like `div` containers, wrappers, or grids)—must have **square corners** (`rounded-none`).
  - **DO NOT** use `rounded`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl` on any structural or layout element.
  - The **ONLY** exception is for naturally circular elements (such as `Avatar`, `Switch`, checkboxes, or status dot indicators) which should use `rounded-full`.



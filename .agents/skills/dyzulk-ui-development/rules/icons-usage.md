# Icon Usage Guidelines

To ensure visual consistency and avoid build-time errors across the monorepo, follow these strict rules when adding or modifying icons.

---

## 1. UI & System Icons (`lucide-react`)

Use `lucide-react` **exclusively** for generic UI components, system actions, controls, status indicators, and navigation.

### Permitted Examples:
- Navigation / Arrows: `ArrowRight`, `ChevronDown`, `ChevronRight`, `Menu`
- Actions / Indicators: `Check`, `X`, `Search`, `Trash2`, `Edit`, `Plus`
- System abstractions: `Layers`, `ShieldCheck`, `Sparkles`, `Globe`, `Cpu`, `Database`, `Terminal`

### Strict Prohibition:
**DO NOT** import brand, company, or social logos from `lucide-react` (e.g. `Github`, `Twitter`, `Discord`, `Google`, `Slack`, `Facebook`). Lucide does not export or maintain third-party brand logos.

---

## 2. Brand & Technology Icons (`@icons-pack/react-simple-icons`)

Use `@icons-pack/react-simple-icons` **exclusively** for company logos, technology stack items, frameworks, and social media platforms.

### Permitted Examples:
- Social / Brands: `SiGithub`, `SiX`, `SiDiscord`, `SiYoutube`, `SiLinkedin`
- Tech Stack: `SiNextdotjs`, `SiReact`, `SiTurborepo`, `SiTailwindcss`, `SiCloudflare`, `SiRender`, `SiPostgresql`, `SiDocker`

---

## Code Pattern Comparison

```diff
- import { ArrowRight, Github, Twitter } from "lucide-react";
+ import { ArrowRight } from "lucide-react";
+ import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

  export function SocialNav() {
    return (
      <div className="flex items-center gap-4">
-       <Github className="w-4 h-4" />
-       <Twitter className="w-4 h-4" />
+       <SiGithub className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
+       <SiX className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
        <ArrowRight className="size-4" />
      </div>
    );
  }
```

---

## 3. Styling Standards & Strict Prohibition of Emojis

- Always prefer Tailwind `size-*` classes (`size-4`, `size-5`) over explicit `w-*` and `h-*` pairs or numeric `width`/`height` props.
- Use theme-aware text color classes: `text-muted-foreground hover:text-foreground transition-colors`.
- **STRICT PROHIBITION OF EMOJIS**: **DO NOT** use raw emojis (e.g. 🚀, ⚡, 📦, 🔒, 🔥) as icons, status indicators, badges, or decorative visual symbols in UI components. Always use corresponding SVG icons from `lucide-react`.


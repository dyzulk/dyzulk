# Shadcn/UI Integration Rules

This monorepo uses [shadcn/ui](https://ui.shadcn.com/) with the `base-lyra` style. All agent and developer contributions MUST follow these rules when working with UI components.

---

## 1. Component Location

All Shadcn/UI components live in:
```
packages/ui/src/components/
```

Import them in consuming apps via the workspace alias:
```tsx
import { Button, buttonVariants } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
```

Never copy-paste component code directly into an app's local `components/` folder.

---

## 2. Adding New Components

To add a new Shadcn component, run from the **workspace root**:
```bash
pnpm dlx shadcn@latest add <component-name> -c apps/web
```
The CLI automatically places the output into `packages/ui/src/components/`.

---

## 3. Extending Components — Variants First

When a new visual style is needed (e.g., a green "success" badge), **always extend the `cva` variant map** inside the component file rather than overriding with ad-hoc Tailwind utilities at the call site.

✅ **Correct — extend cva variants:**
```tsx
// packages/ui/src/components/badge.tsx
const badgeVariants = cva("...", {
  variants: {
    variant: {
      success: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30 dark:text-emerald-400 dark:border-emerald-500/20",
    },
  },
});
```
```tsx
// Usage
<Badge variant="success">All Systems Operational</Badge>
```

❌ **Incorrect — hardcoded override at call site:**
```tsx
<Badge className="text-emerald-600 border-emerald-500/30 bg-emerald-500/10 rounded-full px-3 py-1.5">
  All Systems Operational
</Badge>
```

---

## 4. Border Radius — Use Design Tokens, Not Hardcoded Classes

The base theme sets `--radius: 0.625rem` and maps it to semantic tokens in `@theme inline`:
```
--radius-sm  → calc(var(--radius) * 0.6)
--radius-md  → calc(var(--radius) * 0.8)
--radius-lg  → var(--radius)
--radius-xl  → calc(var(--radius) * 1.4)
```

The `base-lyra` style defaults components to **`rounded-none`** (square corners). Do **not** override `rounded-full` or `rounded-xl` at call sites to change individual buttons or badges.

✅ **Correct — use design token radius classes:**
```tsx
className={cn(buttonVariants({ size: "sm" }), "rounded-lg")}
```

❌ **Incorrect — arbitrary rounded override bypasses design system:**
```tsx
className={cn(buttonVariants({ size: "sm" }), "rounded-full px-4")}
```

If a component family needs a consistently rounded style, update its `cva` base class inside `packages/ui/src/components/`.

---

## 5. Colors — CSS Variables Only

All color values must reference CSS custom properties defined in `globals.css`. Never use raw Tailwind color palette classes (e.g., `text-emerald-600`, `bg-blue-500`) on layout or navigation-level elements.

✅ **Correct — semantic CSS variables:**
```tsx
className="text-primary bg-muted border-border"
```

❌ **Incorrect — hardcoded Tailwind color palette:**
```tsx
className="text-emerald-600 bg-emerald-500/10 border-emerald-500/30"
```

Exception: Tailwind palette colors are acceptable **inside component variant definitions** in `packages/ui/src/components/`, where they form part of the design system itself.

---

## 6. Size and Spacing — Use `size` Variants

Button and badge sizes are controlled by the `size` prop defined in `cva`. Do not add custom `px-*`, `py-*`, or `h-*` utilities to adjust sizing at the call site.

✅ **Correct:**
```tsx
<Button size="sm">Deploy Free</Button>
```

❌ **Incorrect:**
```tsx
<Button size="sm" className="px-4 h-9">Deploy Free</Button>
```

If a new size profile is needed, add it to the `size` variants in the component file.

---

## 7. `className` Overrides — Additive Only

The `cn()` utility uses `tailwind-merge`, which handles class conflicts. When adding `className` at the call site, only add classes that are **additive** (not overriding existing variant styles like color, size, or border-radius).

Acceptable additive classes at call sites: `font-semibold`, `shadow-sm`, `opacity-80`, `transition-colors`, layout classes like `w-full`, `justify-center`.

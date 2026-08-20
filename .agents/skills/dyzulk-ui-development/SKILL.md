---
name: dyzulk-ui-development
description: "Apply this skill whenever creating, designing, reviewing, or modifying UI components, Next.js pages, layouts, or visual elements in the Dyzulk monorepo. Enforces the strict flat Lyra theme (rounded-none), icon separation rules (lucide vs simple-icons), and clean page composition patterns."
license: MIT
metadata:
  author: dyzulk
---

# Dyzulk UI Development

Best practices and guidelines for building user interfaces across Dyzulk web applications (`apps/web`, `apps/dashboard`, `apps/docs`) and the shared component library (`packages/ui`).

## Consistency First

Before creating new components or overriding styles, inspect what the application already does.
- Check neighboring components, existing layouts in the same app, and `@workspace/ui` packages for established patterns.
- Never introduce rounded corners or ad-hoc Tailwind colors when the design system mandates square borders (`rounded-none`) and CSS variable tokens.
- Keep components declarative, modular, and consistent.

## How to Apply

1. Check the target application, existing components, and theme tokens.
2. Map your task to the relevant rule files in the index below and review them before writing code.
3. Keep pages strictly compositional; extract all visual sections into sub-components.
4. Verify that all components use semantic CSS variable classes (`bg-background`, `text-foreground`, `border-border`).
5. Ensure all icons are correctly sourced (`lucide-react` for system/UI vs `@icons-pack/react-simple-icons` for brands).

## Rule Index

| Concern | Read |
| --- | --- |
| Flat design enforcement, zero-rounded rules, and CSS variables | [`rules/lyra-theme.md`](rules/lyra-theme.md) |
| UI icons vs brand/social logos separation and styling | [`rules/icons-usage.md`](rules/icons-usage.md) |
| Next.js `page.tsx` composition and orchestrator architecture | [`rules/page-composition.md`](rules/page-composition.md) |

## Decision Rules

- **Square Corners by Default**: Always use `rounded-none`. Only use `rounded-full` for inherently circular indicators, avatars, or switches.
- **Component Variants First**: Always extend the `cva` variants inside `packages/ui` rather than overriding styles at call sites with ad-hoc classes.
- **Strict UI-Only Views**: Never write inline business logic, API calls, or state mutation directly in presentational UI components.

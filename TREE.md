dyzulk/
├─ .agents/
│  └─ rules/
│     ├─ icons.md
│     └─ shadcn.md
├─ .devcontainer/
│  ├─ devcontainer.json
│  ├─ docker-compose.yml
│  ├─ Dockerfile
│  ├─ post-create.sh
│  └─ README.md
├─ apps/
│  ├─ dashboard/
│  │  ├─ .next/
│  │  ├─ src/
│  │  │  ├─ app/
│  │  │  │  ├─ error.tsx
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ loading.tsx
│  │  │  │  ├─ not-found.tsx
│  │  │  │  └─ page.tsx
│  │  │  └─ components/
│  │  │     └─ theme-provider.tsx
│  │  ├─ eslint.config.js
│  │  ├─ next.config.ts
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  └─ tsconfig.json
│  ├─ docs/
│  │  ├─ .next/
│  │  ├─ content/
│  │  │  └─ docs/
│  │  │     ├─ index.mdx
│  │  │     └─ test.mdx
│  │  ├─ public/
│  │  │  ├─ favicon.ico
│  │  │  ├─ logo-no-padding.svg
│  │  │  └─ logo.svg
│  │  ├─ src/
│  │  │  ├─ app/
│  │  │  │  ├─ (home)/
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ api/
│  │  │  │  │  └─ search/
│  │  │  │  │     └─ route.ts
│  │  │  │  ├─ docs/
│  │  │  │  │  ├─ [[...slug]]/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  └─ layout.tsx
│  │  │  │  ├─ llms-full.txt/
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ llms.mdx/
│  │  │  │  │  └─ docs/
│  │  │  │  │     └─ [[...slug]]/
│  │  │  │  │        └─ route.ts
│  │  │  │  ├─ llms.txt/
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ og/
│  │  │  │  │  └─ docs/
│  │  │  │  │     └─ [...slug]/
│  │  │  │  │        └─ route.tsx
│  │  │  │  ├─ global.css
│  │  │  │  └─ layout.tsx
│  │  │  ├─ components/
│  │  │  │  └─ mdx.tsx
│  │  │  └─ lib/
│  │  │     ├─ cn.ts
│  │  │     ├─ layout.shared.tsx
│  │  │     ├─ shared.ts
│  │  │     └─ source.ts
│  │  ├─ .gitignore
│  │  ├─ eslint.config.mjs
│  │  ├─ next.config.mjs
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ proxy.ts
│  │  ├─ README.md
│  │  └─ tsconfig.json
│  └─ web/
│     ├─ .next/
│     ├─ public/
│     │  ├─ favicon.ico
│     │  ├─ logo-no-padding.svg
│     │  └─ logo.svg
│     ├─ src/
│     │  ├─ app/
│     │  │  ├─ (home)/
│     │  │  │  └─ page.tsx
│     │  │  ├─ pricing/
│     │  │  │  └─ page.tsx
│     │  │  ├─ products/
│     │  │  │  └─ page.tsx
│     │  │  ├─ error.tsx
│     │  │  ├─ global-error.tsx
│     │  │  ├─ layout.tsx
│     │  │  ├─ loading.tsx
│     │  │  └─ not-found.tsx
│     │  ├─ components/
│     │  │  ├─ home/
│     │  │  │  ├─ bento-features.tsx
│     │  │  │  ├─ cta-footer.tsx
│     │  │  │  ├─ hero.tsx
│     │  │  │  ├─ marquee-showcase.tsx
│     │  │  │  └─ terminal-preview.tsx
│     │  │  ├─ navigation/
│     │  │  │  ├─ footer.tsx
│     │  │  │  └─ header.tsx
│     │  │  ├─ pricing/
│     │  │  │  ├─ compute-estimator.tsx
│     │  │  │  ├─ detailed-comparison.tsx
│     │  │  │  ├─ pricing-cards.tsx
│     │  │  │  ├─ pricing-faq.tsx
│     │  │  │  └─ pricing-hero.tsx
│     │  │  ├─ products/
│     │  │  │  ├─ products-dx.tsx
│     │  │  │  ├─ products-faq.tsx
│     │  │  │  ├─ products-grid.tsx
│     │  │  │  └─ products-hero.tsx
│     │  │  ├─ theme-provider.tsx
│     │  │  └─ theme-toggle.tsx
│     │  ├─ constants/
│     │  │  ├─ navigation.ts
│     │  │  └─ site.ts
│     │  ├─ hooks/
│     │  ├─ lib/
│     │  └─ styles/
│     ├─ eslint.config.js
│     ├─ next.config.ts
│     ├─ package.json
│     ├─ postcss.config.mjs
│     └─ tsconfig.json
├─ packages/
│  ├─ eslint-config/
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ package.json
│  │  ├─ react-internal.js
│  │  └─ README.md
│  ├─ typescript-config/
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ package.json
│  │  ├─ react-library.json
│  │  └─ README.md
│  └─ ui/
│     ├─ src/
│     │  ├─ components/
│     │  │  ├─ .gitkeep
│     │  │  ├─ accordion.tsx
│     │  │  ├─ alert-dialog.tsx
│     │  │  ├─ alert.tsx
│     │  │  ├─ aspect-ratio.tsx
│     │  │  ├─ attachment.tsx
│     │  │  ├─ avatar.tsx
│     │  │  ├─ badge.tsx
│     │  │  ├─ breadcrumb.tsx
│     │  │  ├─ bubble.tsx
│     │  │  ├─ button-group.tsx
│     │  │  ├─ button.tsx
│     │  │  ├─ calendar.tsx
│     │  │  ├─ card.tsx
│     │  │  ├─ carousel.tsx
│     │  │  ├─ chart.tsx
│     │  │  ├─ checkbox.tsx
│     │  │  ├─ collapsible.tsx
│     │  │  ├─ combobox.tsx
│     │  │  ├─ command.tsx
│     │  │  ├─ context-menu.tsx
│     │  │  ├─ dialog.tsx
│     │  │  ├─ direction.tsx
│     │  │  ├─ drawer.tsx
│     │  │  ├─ dropdown-menu.tsx
│     │  │  ├─ empty.tsx
│     │  │  ├─ field.tsx
│     │  │  ├─ hover-card.tsx
│     │  │  ├─ input-group.tsx
│     │  │  ├─ input-otp.tsx
│     │  │  ├─ input.tsx
│     │  │  ├─ item.tsx
│     │  │  ├─ kbd.tsx
│     │  │  ├─ label.tsx
│     │  │  ├─ logo.tsx
│     │  │  ├─ marker.tsx
│     │  │  ├─ menubar.tsx
│     │  │  ├─ message-scroller.tsx
│     │  │  ├─ message.tsx
│     │  │  ├─ native-select.tsx
│     │  │  ├─ navigation-menu.tsx
│     │  │  ├─ pagination.tsx
│     │  │  ├─ popover.tsx
│     │  │  ├─ progress.tsx
│     │  │  ├─ questionnaire.tsx
│     │  │  ├─ radio-group.tsx
│     │  │  ├─ resizable.tsx
│     │  │  ├─ scroll-area.tsx
│     │  │  ├─ select.tsx
│     │  │  ├─ separator.tsx
│     │  │  ├─ sheet.tsx
│     │  │  ├─ sidebar.tsx
│     │  │  ├─ skeleton.tsx
│     │  │  ├─ slider.tsx
│     │  │  ├─ spinner.tsx
│     │  │  ├─ switch.tsx
│     │  │  ├─ table.tsx
│     │  │  ├─ tabs.tsx
│     │  │  ├─ textarea.tsx
│     │  │  ├─ toast.tsx
│     │  │  ├─ toggle-group.tsx
│     │  │  ├─ toggle.tsx
│     │  │  └─ tooltip.tsx
│     │  ├─ hooks/
│     │  │  ├─ .gitkeep
│     │  │  └─ use-mobile.ts
│     │  ├─ lib/
│     │  │  ├─ .gitkeep
│     │  │  └─ utils.ts
│     │  └─ styles/
│     │     └─ globals.css
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ tsconfig.json
│     └─ tsconfig.lint.json
├─ scripts/
│  └─ tools/
│     ├─ content-scraper.ts
│     ├─ README.md
│     └─ seo-scraper.ts
├─ submodule/
├─ traefik/
│  └─ traefik.yml
├─ .eslintrc.js
├─ .gitignore
├─ .gitmodules
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ AGENTS.md
├─ Dockerfile
├─ logo-no-padding.svg
├─ logo.svg
├─ package.json
├─ playwright.config.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ SHADCN.md
├─ TREE.md
├─ tsconfig.json
└─ turbo.json

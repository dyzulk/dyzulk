# Page Composition Guidelines

## Strict Orchestrator Rule (`page.tsx`)

Every `page.tsx` file in Next.js applications (`apps/web`, `apps/dashboard`, `apps/docs`) must act solely as an orchestrator shell.

### Prohibitions:
- **DO NOT** write deep inline HTML, layout structures, grid containers, or raw JSX sections inside `page.tsx`.
- **DO NOT** declare state, event handlers, or inline API calls inside `page.tsx`.

### Requirements:
- All page visual sections must be extracted into dedicated, modular child components placed under their respective feature/page folder (e.g. `apps/web/src/components/home/`).
- `page.tsx` must explicitly import and render these child components in order.

---

## Code Pattern Comparison

### ❌ Incorrect Pattern (Bloated Inline `page.tsx`):
```tsx
// apps/web/src/app/(home)/page.tsx
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b border-border p-4 flex justify-between">
        <h1 className="text-xl font-bold">Dyzulk Cloud</h1>
        <nav className="flex gap-4">...</nav>
      </header>
      <section className="py-20 text-center">
        <h2 className="text-4xl font-extrabold">Next-Gen PaaS</h2>
        <p className="text-muted-foreground">High performance cloud deployments</p>
      </section>
      <section className="grid grid-cols-3 gap-6 p-8">
        <div className="border p-4">Feature 1</div>
        <div className="border p-4">Feature 2</div>
      </section>
    </div>
  );
}
```

### ✅ Correct Pattern (Clean Orchestrator Shell):
```tsx
// apps/web/src/app/(home)/page.tsx
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesGrid } from "@/components/home/features-grid";
import { InfrastructureMatrix } from "@/components/home/infrastructure-matrix";
import { CallToAction } from "@/components/home/call-to-action";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesGrid />
      <InfrastructureMatrix />
      <CallToAction />
    </main>
  );
}
```

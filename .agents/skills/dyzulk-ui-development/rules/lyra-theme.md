# Lyra Theme & Flat Design Guidelines

## Strict Zero-Rounded Rule

All structural, container, and UI elements in the Dyzulk codebase must have square corners (`rounded-none`).

### Prohibited Classes
Never use any standard Tailwind border radius utility classes:
- `rounded`
- `rounded-sm`
- `rounded-md`
- `rounded-lg`
- `rounded-xl`
- `rounded-2xl`
- `rounded-3xl`

### Permitted Exception
The **ONLY** exception is for elements that are circular by nature:
- Status indicators / live status dots
- `Avatar` components
- `Switch` toggles
- Circular badges or circular icon containers
- Circular checkboxes

For these elements, use `rounded-full`.

```diff
- <div className="p-4 bg-card rounded-lg border border-border">
+ <div className="p-4 bg-card rounded-none border border-border">
    <CardHeader>
-     <Button className="rounded-md">Deploy</Button>
+     <Button className="rounded-none">Deploy</Button>
    </CardHeader>
  </div>
```

---

## Semantic Color Tokens via CSS Variables

Never use hardcoded Tailwind color palette utilities (e.g. `bg-blue-600`, `text-emerald-500`, `border-gray-200`) for structural and navigation styling. Always use semantic CSS variable-backed Tailwind classes.

### Theme Tokens:
- **Backgrounds:** `bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-primary`, `bg-secondary`
- **Text / Foreground:** `text-foreground`, `text-muted-foreground`, `text-primary-foreground`, `text-card-foreground`
- **Borders & Dividers:** `border-border`, `border-input`, `divide-border`
- **Focus Rings:** `ring-ring`

```diff
- <div className="bg-slate-900 text-white border-slate-800">
+ <div className="bg-background text-foreground border-border">
-   <p className="text-gray-400">Subtitle text</p>
+   <p className="text-muted-foreground">Subtitle text</p>
  </div>
```

---

## Component Extending Strategy

When a new style variant is required (for example, a custom badge or button state), extend the component's `cva` definition inside `packages/ui/src/components/` instead of applying ad-hoc override classes at the call site.

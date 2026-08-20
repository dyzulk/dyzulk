# Logic and Presentation Separation Rules

To prevent code clutter and maintain clean modular architecture across `apps/web`, `apps/dashboard`, and `apps/docs`, presentation and application logic must be completely decoupled.

---

## 1. Directory Structure Standards

- **`types/`**: All TypeScript interfaces, type definitions, and schema types.
- **`lib/`**: General helper methods, utility functions, configuration setups, and API/DB clients.
- **`hooks/`**: React custom hooks managing state, effects, calculations, and event handlers.
- **`actions/`**: Next.js Server Actions or asynchronous API logic.

---

## 2. The Strict "No Logic in UI" Rule

UI files (`page.tsx`, layout components, visual sub-components) must remain **pure presentational shells**.

### Strictly Prohibited in UI Files:
- Direct `fetch()` calls or database queries
- Complex `useState` state-manipulation logic
- Inline event handler function definitions (except calling handlers provided via props/hooks)
- Complex computations or data formatting calculations

### Permitted in UI Files:
- Declarative JSX structure and layout composition
- Receiving data and handler functions via props or custom hooks
- Applying Tailwind styling classes

---

## Code Pattern Comparison

### ❌ Incorrect Pattern (Logic Cluttering UI Component):

```tsx
// apps/dashboard/src/components/deployments/deploy-form.tsx
export function DeployForm() {
  const [repo, setRepo] = useState("");
  const [loading, setLoading] = useState(false);

  // VIOLATION: Business logic defined inline
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/deploy", {
      method: "POST",
      body: JSON.stringify({ repo }),
    });
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={repo} onChange={(e) => setRepo(e.target.value)} />
      <button disabled={loading}>{loading ? "Deploying..." : "Submit"}</button>
    </form>
  );
}
```

### ✅ Correct Pattern (Extracted Custom Hook & Pure UI Shell):

```tsx
// apps/dashboard/src/hooks/use-deployment-form.ts
export function useDeploymentForm() {
  const [repo, setRepo] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleDeploy() {
    setLoading(true);
    await triggerDeployAction({ repo });
    setLoading(false);
  }

  return { repo, setRepo, loading, handleDeploy };
}
```

```tsx
// apps/dashboard/src/components/deployments/deploy-form.tsx
import { useDeploymentForm } from "@/hooks/use-deployment-form";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

export function DeployForm() {
  const { repo, setRepo, loading, handleDeploy } = useDeploymentForm();

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleDeploy(); }}>
      <Input value={repo} onChange={(e) => setRepo(e.target.value)} />
      <Button type="submit" disabled={loading}>
        {loading ? "Deploying..." : "Submit"}
      </Button>
    </form>
  );
}
```

---

## 3. No Size Exception Rule

Even if a helper function or custom type consists of a single function or only 3 lines of code, it **MUST** be extracted to a separate file within the correct directory structure (`types/`, `lib/`, `hooks/`, etc.).

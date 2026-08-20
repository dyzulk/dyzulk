# Turborepo & Monorepo Workflow Commands

This guide provides exact commands for building, developing, and running tasks within the Dyzulk monorepo.

---

## 1. Development Servers

To start development servers from the repository root:

- **All Applications Concurrently**:
  ```bash
  pnpm dev
  ```
- **Web Portal (`apps/web`)**:
  ```bash
  pnpm dev:web
  # or
  pnpm --filter web dev
  ```
- **Dashboard (`apps/dashboard`)**:
  ```bash
  pnpm dev:dashboard
  # or
  pnpm --filter dashboard dev
  ```
- **Docs (`apps/docs`)**:
  ```bash
  pnpm dev:docs
  # or
  pnpm --filter docs dev
  ```

---

## 2. Workspace Quality Checks & Build

- **Type Checking (Entire Workspace)**:
  ```bash
  pnpm typecheck
  ```
- **Linting (Entire Workspace)**:
  ```bash
  pnpm lint
  ```
- **Formatting**:
  ```bash
  pnpm format
  ```
- **Building All Apps & Packages**:
  ```bash
  pnpm build
  ```

---

## 3. Managing Packages & Dependencies

### Adding an External Dependency to a Specific Application:
```bash
pnpm --filter <app_name> add <package_name>
# Example:
pnpm --filter web add clsx
```

### Linking Shared Workspace Packages:
In the target `package.json`, use the `"workspace:*"` protocol:
```json
{
  "dependencies": {
    "@dyzulk/ui": "workspace:*",
    "@dyzulk/server": "workspace:*"
  }
}
```

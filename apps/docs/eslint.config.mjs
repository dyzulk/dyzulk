import { nextJsConfig } from "@workspace/eslint-config/next-js"

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    ignores: [
      "out/**",
      "build/**",
      "next-env.d.ts",
      ".source/**",
    ],
  },
]
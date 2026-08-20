import { nextJsConfig } from "@dyzulk/eslint-config/next-js"

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
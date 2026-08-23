import type { NextConfig } from "next"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: join(__dirname, "../../"),
  transpilePackages: ["@dyzulk/ui"],
}

export default nextConfig

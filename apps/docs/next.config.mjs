import { createMDX } from 'fumadocs-mdx/next';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  outputFileTracingRoot: join(__dirname, '../../'),
};

export default withMDX(config);

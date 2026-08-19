# Tools & Scripts

A collection of command-line tools and utility scripts used in this project.

| Script / Command | Description | Usage |
| :--- | :--- | :--- |
| `seo-scrape` | Extracts SEO tags, metadata, and OG images using Playwright and Cheerio into clean JSON. Supports device emulation. | `pnpm run seo-scrape <URL> [--device mobile\|desktop]` |
| `content-scrape` | Extracts main web page content and converts it into clean Markdown. Supports CSR/SPA pages and device emulation. | `pnpm run content-scrape <URL> [--device mobile\|desktop]` |

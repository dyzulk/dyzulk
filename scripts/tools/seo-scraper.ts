import * as cheerio from 'cheerio';
import { chromium } from 'playwright';
import { devicesConfig } from '../../playwright.config.ts';

interface SeoData {
  title: string | null;
  description: string | null;
  keywords: string | null;
  author: string | null;
  robots: string | null;
  canonical: string | null;
  openGraph: {
    title: string | null;
    description: string | null;
    image: string | null;
    url: string | null;
    type: string | null;
    siteName: string | null;
  };
  twitter: {
    card: string | null;
    title: string | null;
    description: string | null;
    image: string | null;
    site: string | null;
    creator: string | null;
  };
  headings: {
    h1: string[];
    h2Count: number;
    h3Count: number;
  };
}

async function scrapeSeo(url: string, deviceType: 'desktop' | 'mobile' = 'desktop'): Promise<SeoData> {
  // Add protocol if missing
  let targetUrl = url;
  if (!/^https?:\/\//i.test(targetUrl)) {
    targetUrl = 'https://' + targetUrl;
  }

  const config = (devicesConfig[deviceType] || devicesConfig.desktop) as any;

  const browser = await chromium.launch({ headless: true });
  let html = '';
  
  try {
    const context = await browser.newContext({
      userAgent: config.userAgent,
      viewport: config.viewport,
      deviceScaleFactor: config.deviceScaleFactor,
      isMobile: config.isMobile,
      hasTouch: config.hasTouch,
    });
    const page = await context.newPage();
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 30000 });
    html = await page.content();
  } finally {
    await browser.close();
  }

  const $ = cheerio.load(html);

  // Helper to extract meta content
  const getMeta = (query: string): string | null => {
    const element = $(query);
    return element.length ? (element.attr('content') || null) : null;
  };

  // Get H1 tags content (no html tags)
  const h1s: string[] = [];
  $('h1').each((_, el) => {
    const text = $(el).text().trim();
    if (text) h1s.push(text);
  });

  const data: SeoData = {
    title: $('title').text().trim() || null,
    description: getMeta('meta[name="description"]') || getMeta('meta[property="description"]'),
    keywords: getMeta('meta[name="keywords"]'),
    author: getMeta('meta[name="author"]'),
    robots: getMeta('meta[name="robots"]'),
    canonical: $('link[rel="canonical"]').attr('href') || null,
    openGraph: {
      title: getMeta('meta[property="og:title"]') || getMeta('meta[name="og:title"]'),
      description: getMeta('meta[property="og:description"]') || getMeta('meta[name="og:description"]'),
      image: getMeta('meta[property="og:image"]') || getMeta('meta[name="og:image"]'),
      url: getMeta('meta[property="og:url"]') || getMeta('meta[name="og:url"]'),
      type: getMeta('meta[property="og:type"]') || getMeta('meta[name="og:type"]'),
      siteName: getMeta('meta[property="og:site_name"]') || getMeta('meta[name="og:site_name"]'),
    },
    twitter: {
      card: getMeta('meta[name="twitter:card"]'),
      title: getMeta('meta[name="twitter:title"]'),
      description: getMeta('meta[name="twitter:description"]'),
      image: getMeta('meta[name="twitter:image"]'),
      site: getMeta('meta[name="twitter:site"]'),
      creator: getMeta('meta[name="twitter:creator"]'),
    },
    headings: {
      h1: h1s,
      h2Count: $('h2').length,
      h3Count: $('h3').length,
    },
  };

  return data;
}

// Main execution block
async function main() {
  const args = process.argv.slice(2);
  const targetUrl = args.find(arg => !arg.startsWith('--'));

  if (!targetUrl) {
    console.error('Usage: pnpm run seo-scrape <url> [--device mobile|desktop]');
    process.exit(1);
  }

  let device: 'desktop' | 'mobile' = 'desktop';
  const deviceIdx = args.indexOf('--device');
  const deviceVal = deviceIdx !== -1 ? args[deviceIdx + 1] : undefined;
  if (deviceVal) {
    const val = deviceVal.toLowerCase();
    if (val === 'mobile' || val === 'desktop') {
      device = val as 'desktop' | 'mobile';
    }
  }

  try {
    const seoData = await scrapeSeo(targetUrl, device);
    console.log(JSON.stringify(seoData, null, 2));
  } catch (error: any) {
    console.error(JSON.stringify({ error: error.message || String(error) }, null, 2));
    process.exit(1);
  }
}

main();

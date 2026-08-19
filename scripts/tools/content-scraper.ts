import * as cheerio from 'cheerio';
import { chromium } from 'playwright';
import { devicesConfig } from '../../playwright.config.ts';

interface ScrapeResult {
  title: string;
  url: string;
  markdown: string;
}

// Custom interfaces for node structure using 'any' to bypass strict version differences in Cheerio types
interface CustomElement {
  type: 'tag';
  tagName: string;
  childNodes: CustomNode[];
  parentNode: CustomNode | null;
}

interface CustomText {
  type: 'text';
  data: string;
}

type CustomNode = CustomElement | CustomText | any;

// Check if a cheerio node is an Element
function isElement(node: any): node is CustomElement {
  return node && node.type === 'tag' && typeof node.tagName === 'string';
}

// Check if a cheerio node is a Text node
function isText(node: any): node is CustomText {
  return node && node.type === 'text' && typeof node.data === 'string';
}

/**
 * Custom recursive HTML to Markdown converter
 */
class HtmlToMarkdownConverter {
  private $: cheerio.CheerioAPI;

  constructor($: cheerio.CheerioAPI) {
    this.$ = $;
  }

  public convert(element: cheerio.Cheerio<any>): string {
    return this.processNode(element.get(0)).trim();
  }

  private processNode(node: CustomNode | null, listContext?: { type: 'ul' | 'ol'; index: number }): string {
    if (!node) return '';

    if (isText(node)) {
      // Clean up multiple spaces, but preserve newlines if deliberate
      return node.data;
    }

    if (!isElement(node)) {
      return '';
    }

    const tagName = node.tagName.toLowerCase();

    // Skip scripts, styles, metadata
    if (['script', 'style', 'noscript', 'iframe', 'svg', 'canvas', 'embed', 'object'].includes(tagName)) {
      return '';
    }

    // Process children helper
    const processChildren = (el: CustomElement): string => {
      let result = '';
      let olIndex = 1;
      
      el.childNodes.forEach((child: CustomNode) => {
        const nextListContext = tagName === 'ul' ? { type: 'ul' as const, index: 0 } : 
                            tagName === 'ol' ? { type: 'ol' as const, index: olIndex++ } : 
                            listContext;
        result += this.processNode(child, nextListContext);
      });
      return result;
    };

    switch (tagName) {
      // Headings
      case 'h1':
        return `\n\n# ${processChildren(node).trim()}\n\n`;
      case 'h2':
        return `\n\n## ${processChildren(node).trim()}\n\n`;
      case 'h3':
        return `\n\n### ${processChildren(node).trim()}\n\n`;
      case 'h4':
        return `\n\n#### ${processChildren(node).trim()}\n\n`;
      case 'h5':
        return `\n\n##### ${processChildren(node).trim()}\n\n`;
      case 'h6':
        return `\n\n###### ${processChildren(node).trim()}\n\n`;

      // Inline styles
      case 'strong':
      case 'b': {
        const content = processChildren(node).trim();
        return content ? ` **${content}** ` : '';
      }
      case 'em':
      case 'i': {
        const content = processChildren(node).trim();
        return content ? ` *${content}* ` : '';
      }
      case 'code': {
        // If inside a pre tag, pre will handle it
        const parent = node.parentNode as CustomElement | null;
        if (parent && parent.tagName && parent.tagName.toLowerCase() === 'pre') {
          return processChildren(node);
        }
        return ` \`${processChildren(node)}\` `;
      }
      case 'pre': {
        const codeText = this.$(node as any).text().trim();
        return `\n\n\`\`\`\n${codeText}\n\`\`\`\n\n`;
      }

      // Links & Images
      case 'a': {
        const href = this.$(node as any).attr('href');
        const text = processChildren(node).trim();
        if (!href) return text;
        return ` [${text || href}](${href}) `;
      }
      case 'img': {
        const src = this.$(node as any).attr('src');
        const alt = this.$(node as any).attr('alt') || 'image';
        if (!src) return '';
        return `\n\n![${alt}](${src})\n\n`;
      }

      // Block elements
      case 'p':
        return `\n\n${processChildren(node).trim()}\n\n`;
      case 'blockquote':
        return `\n\n> ${processChildren(node).trim().replace(/\n/g, '\n> ')}\n\n`;
      case 'br':
        return '\n';
      case 'hr':
        return '\n\n---\n\n';

      // Lists
      case 'ul':
      case 'ol':
        return `\n\n${processChildren(node)}\n\n`;
      case 'li': {
        const content = processChildren(node).trim();
        if (!content) return '';
        if (listContext && listContext.type === 'ol') {
          return `\n${listContext.index}. ${content}`;
        }
        return `\n- ${content}`;
      }

      // Tables
      case 'table': {
        return `\n\n${this.renderTable(node)}\n\n`;
      }

      default:
        // Handle generic wrapper tags (div, section, article, body, etc.)
        const content = processChildren(node);
        // If it's block-like, let's keep some spacing around it
        if (['div', 'section', 'article', 'body', 'main'].includes(tagName)) {
          return `${content}`;
        }
        return content;
    }
  }

  private renderTable(tableNode: CustomElement): string {
    const $ = this.$;
    const rows: string[][] = [];
    
    // Find all rows in table
    $(tableNode as any).find('tr').each((_, tr) => {
      const row: string[] = [];
      $(tr).find('th, td').each((_, cell) => {
        // Clean cell text (remove newlines and extra spaces)
        const cellText = $(cell).text().trim().replace(/\s+/g, ' ');
        row.push(cellText);
      });
      if (row.length > 0) {
        rows.push(row);
      }
    });

    if (rows.length === 0) return '';

    let markdownTable = '';
    const maxCols = Math.max(...rows.map(r => r.length));

    // Render rows
    rows.forEach((row, rowIndex) => {
      // Pad row to match maxCols
      while (row.length < maxCols) {
        row.push('');
      }

      // Row separator or content
      markdownTable += '| ' + row.join(' | ') + ' |\n';

      // If this is the first row, add header separator
      if (rowIndex === 0) {
        const separator = Array(maxCols).fill('---');
        markdownTable += '| ' + separator.join(' | ') + ' |\n';
      }
    });

    return markdownTable;
  }
}

/**
 * Scrape content from URL and convert to Markdown
 */
async function scrapeContent(url: string, deviceType: 'desktop' | 'mobile' = 'desktop'): Promise<ScrapeResult> {
  let targetUrl = url;
  if (!/^https?:\/\//i.test(targetUrl)) {
    targetUrl = 'https://' + targetUrl;
  }

  const config = (devicesConfig[deviceType] || devicesConfig.desktop) as any;

  const browser = await chromium.launch({ headless: true });
  let html = '';
  let title = 'Untitled Page';
  
  try {
    const context = await browser.newContext({
      userAgent: config.userAgent,
      viewport: config.viewport,
      deviceScaleFactor: config.deviceScaleFactor,
      isMobile: config.isMobile,
      hasTouch: config.hasTouch,
      ignoreHTTPSErrors: true,
    });
    const page = await context.newPage();
    
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 30000 });
    
    // Scroll to the bottom to trigger lazy-loaded images/content
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
    
    html = await page.content();
    title = await page.title();
  } finally {
    await browser.close();
  }

  const $ = cheerio.load(html);

  // Clean the document a bit first
  $('script, style, noscript, iframe, svg, header, footer, nav').remove();

  title = title || $('title').text().trim() || 'Untitled Page';
  
  // Try to target main content areas first, fallback to body
  const mainSelectors = ['article', 'main', '[role="main"]', '#content', '.content', 'body'];
  let contentElement = $('body') as cheerio.Cheerio<any>;
  
  for (const selector of mainSelectors) {
    const el = $(selector);
    if (el.length > 0) {
      // Check if it has a reasonable amount of HTML inside
      if (el.html() && el.html()!.length > 200) {
        contentElement = el;
        break;
      }
    }
  }

  const converter = new HtmlToMarkdownConverter($);
  let markdown = converter.convert(contentElement);

  // Post-processing cleanup for markdown spacing
  markdown = markdown
    .replace(/\n{3,}/g, '\n\n') // Remove excessive empty lines
    .replace(/[ \t]+/g, ' ') // Remove multiple spaces
    .replace(/ \n/g, '\n') // Clean trailing spaces
    .replace(/\n /g, '\n') // Clean leading spaces
    .trim();

  return {
    title,
    url: targetUrl,
    markdown,
  };
}

// Main execution block
async function main() {
  const args = process.argv.slice(2);
  const targetUrl = args.find(arg => !arg.startsWith('--'));

  if (!targetUrl) {
    console.error('Usage: node --experimental-strip-types scripts/tools/content-scraper.ts <url> [--device mobile|desktop]');
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
    const result = await scrapeContent(targetUrl, device);
    console.log(`Title: ${result.title}`);
    console.log(`URL: ${result.url}`);
    console.log(`Device: ${device}`);
    console.log('\n--- MARKDOWN CONTENT ---\n');
    console.log(result.markdown);
  } catch (error: any) {
    console.error(JSON.stringify({ error: error.message || String(error) }, null, 2));
    process.exit(1);
  }
}

main();

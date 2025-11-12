import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const RAW_BASES = process.env.SITE_URLS || process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://www.silverhoofacademy.com, https://www.silverhoofacademy.in';
// Allow comma-separated domains
const BASES = String(RAW_BASES)
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);
const PRIMARY = BASES[0];
const today = new Date().toISOString().slice(0, 10);

// All public routes of the SPA
const routes = [
  '/',
  '/about',
  '/contact',
  '/services/playgroup',
  '/services/nursery',
  '/services/junior-kg',
  '/services/senior-kg',
];

const buildUrlSet = (base) => routes.map((path) => `  <url>
    <loc>${base.replace(/\/$/, '')}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n');
const buildXml = (base) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${buildUrlSet(base)}
</urlset>\n`;

const distDir = join(__dirname, '..', 'dist');
try { if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true }); } catch {}
// Always write primary sitemap.xml
const primaryXml = buildXml(PRIMARY);
const outPath = join(distDir, 'sitemap.xml');
writeFileSync(outPath, primaryXml, 'utf8');

// If multiple bases provided, also write domain-specific sitemaps and a sitemap-index.xml
if (BASES.length > 1) {
  const entries = [];
  BASES.forEach((base) => {
    const host = new URL(base).hostname.replace(/[^a-z0-9.-]/gi, '').replace(/\./g, '-');
    const fileName = `sitemap-${host}.xml`;
    const xml = buildXml(base);
    writeFileSync(join(distDir, fileName), xml, 'utf8');
    entries.push({ base, fileName });
  });
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <sitemap>\n    <loc>${e.base.replace(/\/$/, '')}/${e.fileName}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`).join('\n')}
</sitemapindex>\n`;
  writeFileSync(join(distDir, 'sitemap-index.xml'), indexXml, 'utf8');
}

// Also copy or ensure robots.txt points to sitemap; if public/robots.txt exists, Vite will copy it.
// As a convenience for local preview, also write a dev sitemap in public if missing.
const publicDir = join(__dirname, '..', 'public');
const publicSitemap = join(publicDir, 'sitemap.xml');
try {
  if (!existsSync(publicSitemap)) {
    writeFileSync(publicSitemap, primaryXml, 'utf8');
  }
} catch {}

console.log(`[sitemap] Wrote sitemap to ${outPath} with base(s): ${BASES.join(', ')}`);

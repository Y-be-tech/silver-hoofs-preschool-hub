import { writeFileSync, mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || 'http://localhost:8080';
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

const urlset = routes.map((path, i) => `  <url>
    <loc>${SITE_URL.replace(/\/$/, '')}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>\n`;

const distDir = join(__dirname, '..', 'dist');
try { if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true }); } catch {}
const outPath = join(distDir, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');

// Also copy or ensure robots.txt points to sitemap; if public/robots.txt exists, Vite will copy it.
// As a convenience for local preview, also write a dev sitemap in public if missing.
const publicDir = join(__dirname, '..', 'public');
const publicSitemap = join(publicDir, 'sitemap.xml');
try {
  if (!existsSync(publicSitemap)) {
    writeFileSync(publicSitemap, xml, 'utf8');
  }
} catch {}

console.log(`[sitemap] Wrote sitemap to ${outPath} with base ${SITE_URL}`);

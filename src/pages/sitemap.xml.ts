import { getCollection } from 'astro:content';
import { site } from '../data/site';

// src/pages/ にある固定ページを自動で載せる（ページを追加しても、ここを直す必要はない）。
// 404 と、[slug] のような動的ページ（お知らせ記事は下で個別に追加）は除く。
const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));
const staticPages = pageFiles
  .filter((f) => !f.includes('[') && f !== './404.astro')
  .map((f) => f.replace(/^\./, '').replace(/\.astro$/, '').replace(/\/index$/, '') || '/')
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

export async function GET() {
  const news = await getCollection('news', ({ data }) => !data.draft);
  const urls = [
    ...staticPages.map((p) => `${site.url}${p}`),
    ...news.map((n) => `${site.url}/news/${n.id}`),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

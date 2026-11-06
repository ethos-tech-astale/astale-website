import { getCollection } from 'astro:content';
import { site, staticPages } from '../data/site';

export async function GET() {
  const news = await getCollection('news', ({ data }) => !data.draft);
  const urls = [
    ...staticPages.map((p) => `${site.url}${p === '/' ? '/' : p}`),
    ...news.map((n) => `${site.url}/news/${n.id}`),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

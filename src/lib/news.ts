import { getCollection } from 'astro:content';

/** 公開対象のお知らせを新しい順で返す。開発中（npm run dev）は下書きも含める */
export async function getNews() {
  const items = await getCollection('news', ({ data }) => import.meta.env.DEV || !data.draft);
  return items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(d: Date) {
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

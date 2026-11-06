import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// お知らせ・講習会。src/content/news/*.md の1ファイルが1件。
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['講習会', 'お知らせ', '受験生', 'おとな', 'こども']).default('お知らせ'),
    summary: z.string().optional(),
    /** true の間は本番に出ない（npm run dev では表示される） */
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };

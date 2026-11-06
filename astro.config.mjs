import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.astale-art.com',
  // /about.html を出力 → Cloudflare Pages では /about で表示（末尾スラッシュなし）
  build: { format: 'file' },
  trailingSlash: 'never',
});

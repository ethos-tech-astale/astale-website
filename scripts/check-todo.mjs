// 本番切替前のチェック：ビルド結果（dist）に「原稿未入力」の箇所が残っていないか確認する。
// 使い方: npm run build && npm run check:todo
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const hits = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|txt|xml)$/.test(name)) {
      const s = readFileSync(p, 'utf8');
      const n = (s.match(/data-todo|原稿未入力/g) || []).length;
      if (n) hits.push(`${p}: ${n}件`);
    }
  }
}
try { walk(root); } catch { console.error('dist がありません。先に npm run build を実行してください。'); process.exit(2); }
if (hits.length) {
  console.log('未入力の原稿が残っています：\n' + hits.join('\n'));
  process.exit(1);
}
console.log('OK：未入力の原稿はありません。');

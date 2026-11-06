# アステール総合美術研究所 公式サイト

https://www.astale-art.com のソースです。Astro で作り、Cloudflare Pages で公開しています。
AI・スタッフ向けの編集ルールは [AGENTS.md](AGENTS.md)、移行の進め方は [docs/migration-checklist.md](docs/migration-checklist.md) を見てください。

## 更新のしくみ

```
自宅Mac / 会社Mac（Claude Code） ─┐
スタッフ（Grok Bot）────────────┼─→ GitHub（ブランチ → PR）─→ Cloudflare がプレビューURLを自動作成
                                   │                              ↓ 管理者が確認して承認（merge）
                                   └──────────────────────────→ main → 本番に自動公開
```

## Mac の準備（自宅・会社それぞれ1回だけ）

ターミナルで：

```sh
cd ~/dev
git clone https://github.com/ethos-tech-astale/astale-website.git
cd astale-website
npm install
```

- Node.js 22 以上が必要です（`node -v` で確認）。
- iCloud Drive・Google ドライブの同期フォルダには置かないでください（同期と Git が衝突します）。

## 毎回の作業

```sh
cd ~/dev/astale-website
git switch main && git pull          # ① 始める前に必ず最新にする
git switch -c fix/内容               # ② 作業用ブランチを作る
npm run dev                          # ③ http://localhost:4321 で確認しながら編集
npm run build                        # ④ エラーがないか確認
git add -A && git commit -m "変更内容"
git push -u origin HEAD              # ⑤ GitHub で PR を作る → プレビューURLで確認 → merge
```

Claude Code に頼む場合は、このフォルダで Claude Code を起動して「〇〇を直してPRを出して」と依頼すれば、上の流れを代行します。

## Cloudflare Pages の設定（初回のみ）

| 項目 | 値 |
|---|---|
| リポジトリ | `ethos-tech-astale/astale-website` |
| 本番ブランチ | `main` |
| フレームワーク | Astro |
| ビルドコマンド | `npm run build` |
| 出力ディレクトリ | `dist` |
| 環境変数 | `NODE_VERSION` = `22`（`.nvmrc` があれば不要） |

## GitHub の設定（設定済み）

- Settings → Rules → Rulesets の `protect-main`（対象: `main`）：「PRを必須」「承認1件を必須」「強制pushの禁止」「ブランチ削除の禁止」。
- 管理者（Admin 権限）は「PRのときだけ」バイパスできます。GitHub では自分のPRを自分で承認できないため、管理者は承認なしでPRをマージできます。直接 push はできません。
- スタッフ・Grok Bot には Write 権限（Admin は付けない）。
- リポジトリは公開（Public）です。パスワード・APIキー・生徒の個人情報・掲載許可のない写真は、履歴を含めて絶対に置かないでください。

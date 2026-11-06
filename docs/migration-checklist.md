# 移行チェックリスト（Wix → Cloudflare Pages）

移行検討資料（第2版）の段階計画に、手順の修正（DNS → サイト → ドメイン移管の順）を反映したもの。

## 第0段階：事前確認（Wix の管理画面で見る）

- [ ] Wix のプラン名・料金・次回更新日
- [ ] ドメイン astale-art.com の登録先（Wix で購入か、外部か）・有効期限
- [ ] ドメインが Wix プラン付属の無料特典か（特典なら、移管を済ませてからプランを解約する）
- [ ] 現在の DNS レコードを**全件**スクリーンショットで保存（MX・SPF・DKIM・DMARC・google-site-verification などの TXT・CNAME すべて）
- [ ] お問い合わせフォームの通知先メールアドレス
- [ ] `https://www.astale-art.com/sitemap.xml` で全URLを洗い出し → `docs/url-map.md` に追記
- [ ] 料金・時間割が画像で載っているページの一覧
- [ ] Search Console に「ドメインプロパティ」として登録（移行前のデータを残すため、今のうちに）

## 第1段階：新サイト作成

- [x] GitHub リポジトリ作成（ethos-tech-astale/astale-website）
- [x] 骨組み・AGENTS.md・転送設定のたたき台
- [ ] Cloudflare Pages とリポジトリを接続 → `*.pages.dev` で確認できるようにする
- [ ] `main` の保護ルール（PR必須・承認必須）
- [ ] 各ページの原稿を Wix から移す（`<Todo>` を順に埋める）
- [ ] 画像を Wix のメディアマネージャーから回収 → 最適化して `public/images/` へ（alt を付ける）
- [ ] `src/data/site.ts` の住所・電話・駅からの所要時間・Instagram を確定
- [ ] よくある質問の回答（`src/data/faq.ts`）
- [ ] Google フォーム作成 → `contactFormUrl` に設定 → 送信テスト・通知確認
- [ ] `public/llms.txt` の概要を確定
- [ ] Grok Bot から PR を出すテスト（お知らせ1件）

## 第2段階：切替準備

- [ ] `npm run build && npm run check:todo` が OK（未入力ゼロ）
- [ ] `docs/url-map.md` の全URLが `_redirects` に入っている
- [ ] 全ブログ記事の draft を外す（または転送先を `/news` に変更）
- [ ] Cloudflare にドメインを追加し、Wix の DNS レコードを全件写す。**このときサイト向けのレコードはまだ Wix を指したままにする**

## 第3段階：切替（3回に分けて実施）

1. [ ] **DNS の移動**：ドメインのネームサーバーを Cloudflare に変更 → メールの送受信テスト（社外アドレスとの往復）。サイトは Wix のまま表示されることを確認
2. [ ] **サイトの切替**（数日後）：Cloudflare Pages にカスタムドメイン `www.astale-art.com` と `astale-art.com` を設定 → 表示・転送・フォームを確認 → Search Console にサイトマップを送信
3. [ ] **ドメイン移管**（落ち着いてから）：Wix で認証コード（EPPコード）を取得 → Cloudflare Registrar へ移管（登録・移管から60日以内は不可の場合あり）

## 第4段階：安定化・解約

- [ ] Instagram・Google ビジネスプロフィール・ポータルサイトのリンクを更新
- [ ] 駅からの所要時間など、外部サイトの表記の修正依頼
- [ ] Search Console でエラー・順位を2週間ほど確認
- [ ] ドメイン移管の完了を確認してから Wix を解約（更新日に注意）

## 時期の目安

- 冬期講習〜入試期（12〜2月）は問い合わせが重要な時期のため、本番切替は避ける
- 冬の間に新サイトを仕上げ、来年度パンフレット（教室名変更）に合わせて切替

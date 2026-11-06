# Wixサイト調査レポート：アステール総合美術研究所 → Cloudflare Pages 移行準備

- **調査日**: 2026-11-07（Asia/Tokyo）
- **対象サイト**: https://www.astale-art.com/
- **Wixサイト名**: アステール総合美術研究所
- **metaSiteId**: `cd6da8ef-f29c-4125-ad68-b4abdc420105`
- **方針**: 調査のみ（Wix / GitHub / Cloudflare への変更は一切なし）
- **情報源**: Wix MCP（GetSiteContext / List Static Pages / Blog / CMS / SEO Redirects / Site Properties / Installed Apps）、公開 sitemap・HTML クロール、DNS/RDAP

---

## 0. サイト概要（確認済み）

| 項目 | 内容 |
|---|---|
| 公開状態 | Published（Premium・カスタムドメイン） |
| エディタ | Classic Editor |
| Velo | 有効 |
| 言語 / 地域 | ja / JP、Asia/Tokyo、JPY |
| 表示名 | アステール総合美術研究所 |
| 公開電話（トップページ表示） | 055-971-7579 |
| 公開住所（トップページ表示） | 静岡県三島市泉町3-2 |
| Instagram | https://www.instagram.com/astale_art_official |
| 公式LINE | https://lin.ee/4gr1kzCK |
| Site Properties の email/phone/address API | 空または未設定（公開ページ上の表記とは別） |
| trackClicksAnalytics | false |

### インストール済みアプリ（GetSiteContext で明示 + Apps API）

| アプリ | 公開サイトでの利用 |
|---|---|
| Wix Blog | **利用中**（投稿15件、`/blog`・`/post/...`） |
| Wix CMS / Data | **利用中**（お問い合わせ・時間割など） |
| Promote SEO | **利用中**（サイトSEOタグ・リダイレクト） |
| Wix Members Area | インストール済。会員3件。公開ページにログインUIの痕跡はあるが、**受講生向け機能として使っているかは未確認** |
| Wix Hotels | インストール済。公開HTMLにHotelsウィジェットは**見つからず**（未使用の可能性） |
| Wix Invoices (V1) | インストール済。公開HTMLに請求UIは**見つからず**（ダッシュボード用途の可能性） |
| Wix Forms (New) | Forms v4 API は **0件**（新フォームアプリは未使用） |

※ Apps Installer はプラットフォーム系を含め多数返す。上表は移行判断に関係しそうなものを中心に記載。

---

## 1. ページ構成表

### 1.1 集計

| 種別 | 件数 | 備考 |
|---|---:|---|
| 静的ページ（sitemap / List Static Pages） | **36** | HOME は `/home`（実体は `/` へリダイレクト） |
| ブログ投稿 | **15** | URL は `/post/{slug}`（日本語スラッグ多数） |
| ブログカテゴリ sitemap | 1 | `/blog`（静的ページと重複） |
| 動的ページ（CMS 動的テンプレート） | **0** | List Dynamic Pages は空 |
| SEO リダイレクト | **34** | 旧スラッグ・日本語パスから現行パスへ |

公開 sitemap 合計のユニークURLはおおむね **51**（静的36 + 投稿15。`/blog` の重複を除くと50前後）。

### 1.2 静的ページ一覧

テキスト量は HTML からタグ除去した概算（ナビ・フッター込み）。画像枚数も概算。

| パス | ページタイトル（エディタ/API） | 公開 title（ブラウザ） | 内容の目安 | 動的・埋め込みの所見 |
|---|---|---|---|---|
| `/` | HOME（`/home`） | 三島の美大受験・画塾｜アステール総合美術研究所 | 中（テキスト約500字超、画像十数枚）。新着・教室案内・LINE誘導 | Pro Gallery、Instagram/LINEリンク、Members関連スクリプト。meta description あり |
| `/astale-about` | アステールとは？ | 同左系 | 中 | 静的紹介 |
| `/examination` | 受験生の教室 | 同左 | 中（画像多め） | 静的。meta description あり |
| `/examination-about` | 受験の教室について | 同左 | 中 | 静的 |
| `/art-exam` | 受験部詳細 | 同左 | 中〜多 | 静的 |
| `/exam-basic` | 受験基礎概要 | 同左 | 多め | 静的 |
| `/basic` | 基礎の教室 | 同左 | 中 | 静的 |
| `/kids` | こどもの教室 | 同左 | 中（画像多） | 静的。meta description あり |
| `/kids-about` | こどもの教室詳細 | 同左 | 中 | 静的 |
| `/adult` | おとなの教室 | 同左 | 少〜中 | 静的。meta description あり |
| `/tuition-guidance` | 総合案内・学費 | 同左 | 多め（約1500字相当、画像多） | **CMS「時間割」参照の可能性**（コレクションに現行データあり） |
| `/availability` | 空き状況 | 同左 | 少〜中 | CMS「空き状況」は **0件**。表示は手書き/別手段の可能性 |
| `/result` | 受験実績 | 美大・芸大合格実績｜… | 中 | **YouTube 埋め込み1**。meta description あり |
| `/graduates` | 活躍する卒業生 | 卒業生紹介｜… | 中 | 静的 |
| `/interview-asakura` 他3本 | 卒業生インタビュー（浅倉/杉本/山根/奥村） | 各タイトル | 多（約2700字相当） | 長文インタビュー＋画像 |
| `/staff` | スタッフ紹介 | 同左 | 少（画像多） | 静的ギャラリー寄り |
| `/staff/tamura` | 田村明彦 | 同左 | 中 | スタッフ個別 |
| `/staff/noro` | 野呂美樹 | 同左 | 中 | スタッフ個別 |
| `/photo` | フォトレコ | フォトレコについてについて（※title重複表現） | 少〜中 | フォト関連説明。meta description なし |
| `/blog` | 新着情報 | 同左 | 中（記事一覧） | **Wix Blog 一覧** |
| `/contact` | お問い合わせ | 同左 | 中 | **お問い合わせフォーム**（CMS `contact12` 連携の旧系）。meta description なし |
| `/official` | 公式LINE | title が `line` のみ | 少 | LINE誘導。SEO title が弱い |
| `/line-openchat` | LINEオープンチャット・スクパス | 同左 | 中 | LINE関連 |
| `/recruit-children` | 求人 - こどもの教室スタッフ | 同左 | 中 | 求人 |
| `/recruit-model` | 求人 - 絵画人物モデル | 同左 | 中 | 求人 |
| `/covid-19` | 新型コロナウイルス対応 | 同左 | 中 | 過去対応ページ（残すか要判断） |
| `/demo` | 複製 - 受験生の教室 | 受験生の教室 | 多め | **複製ページ**。公開継続か要判断 |
| `/2026regulation` | 2026regulation | 同左 | **最大級**（約5000字相当） | 規約・規程系。テキスト中心 |
| `/2024regulation` | 2024regulation | 同左 | 最大級 | 旧年度規程。リダイレクト候補 |
| `/2024winter` `/summer2024` `/summerkids2024` `/summerkids2024out` | 季節講習系 | 各英数字タイトル | 中 | キャンペーン過去ページ。要取捨 |

> ヘッダーメニューの階層は、Wixの圧縮HTMLからは機械抽出できず**未検証**。上記は sitemap + API のページ単位。実メニューはダッシュボード／エディタで要確認。

### 1.3 ブログ投稿（15件）

| 公開日（UTC） | タイトル | パス |
|---|---|---|
| 2026-10-28 | 11月15日(日) 進路ガイダンスのご案内 | `/post/11月15日-日-進路ガイダンスのご案内` |
| 2026-06-18 | こども 夏の特別教室2026 | `/post/こども-夏の特別教室２０２６` |
| 2026-05-25 | 夏期講習会2026 | `/post/夏期講習会2026` |
| 2026-05-11 | 6月13日(土) 進路ガイダンスのご案内 | `/post/6月13日-土-進路ガイダンスのご案内` |
| 2026-02-04 | 春期講習会2026 | `/post/春期講習会2026` |
| 2025-11-03 | 冬期講習会2025 | `/post/冬期講習会2025` |
| 2025-06-12 | 夏のこども特別教室2025 | `/post/夏のこども特別教室2025` |
| 2025-06-06 | 夏期講習会2025 | `/post/夏期講習会２０２５` |
| 2025-04-12 | 2025年度美大受験入試　結果報告 | `/post/２０２５年度美大受験入試-結果報告-1` |
| 2025-01-28 | 春期講習会2025 | `/post/春期講習会2025` |
| 2024-11-01 | 冬期講習会2024 | `/post/冬期講習会2024` |
| 2024-06-24 | 夏のこども美術教室2024 | `/post/夏のこども美術教室2024` |
| 2024-03-24 | 2024年度美大受験入試　結果報告 | `/post/2024年度美大受験入試-結果報告` |
| 2023-04-10 | 2023年度美大受験入試　結果報告 | `/post/2023年度美大受験入試-結果報告` |
| 2022-07-07 | 夏のデジタルイラスト教室 | `/post/夏のデジタルイラスト教室` |

コメント機能は投稿側で `commentingEnabled: true`。実際にコメント運用しているかは未確認。

### 1.4 SEO・URL・DNS

#### URL構造
- 正規ドメイン表記: `https://www.astale-art.com/...`
- トップは `/`。`/home` → `/` のリダイレクトあり
- ブログは `/post/{slug}`（日本語・全角数字を含むスラッグあり）→ **Cloudflare でも同一パスを維持**し、エンコーディングに注意
- 既存301を34件保持（下記「注意点」参照）

#### サイト全体SEOタグ（API）
- `google-site-verification` meta: `JCGVG6Is1mE7tTL1m0b5sZ3G9XTAzCCkFaRd8mcxL8E`
- 既定 og:image あり（WixメディアID）
- site-level description / keywords は空
- embedTags（追加検証タグ）は空

#### ページ単位SEO（クロール）
- 主要ページの title はおおむね「…｜アステール総合美術研究所」
- meta description が**空のページあり**（例: `/contact`, `/availability`, `/photo`）
- `/official` の title が `line` のみ（要改善）
- `/photo` の title に「について」重複

#### Google Analytics / Tag Manager
- 公開HTMLから **GTM / gtag / UA- / G- 測定IDは確認できず**（誤検出のみ）
- `trackClicksAnalytics: false`
- → **GA導入有無は未確定**。Search Console 接続状態も API では未確認（DNS/meta の verification 文字列はある）

#### DNS / ドメイン（確認済み）

| レコード | 値 |
|---|---|
| レジストラ | **Wix.com Ltd.**（RDAP handle 3817） |
| ドメイン状態 | `client transfer prohibited`, `client update prohibited` |
| 有効期限 | 2029-01-12（UTC表記） |
| NS | `ns10.wixdns.net` / `ns11.wixdns.net` |
| apex A | `185.230.63.107` ほか（Wix） |
| www | CNAME `cdn3.wixdns.net` → Cloudflare エッジIP（**Wix CDN 経由の Cloudflare**。ユーザーが Cloudflare に移管済みという意味ではない） |
| MX | Google（`aspmx.l.google.com` ほか alt1–4） |
| TXT | `v=spf1 include:_spf.google.com ~all` |
| TXT | `google-site-verification=xmXi-NLysXMiXCzdHSD9hA0IuKhBzP3SdH1IOwT1zVA`（DNS検証。metaタグ側とは**別文字列**） |

→ メールは **Google Workspace（または Google 宛てMX）**。ネームサーバを Cloudflare に切る場合、**MX / SPF / 検証TXTを必ず同時に移す**こと。

---

## 2. 動的機能と移行後の代替案

| 機能 | 現状 | 移行後の候補 | 備考 |
|---|---|---|---|
| **お問い合わせフォーム** | CMSコレクション `contact12`「お問い合わせフォーム」（姓/名/メール/電話/住所/件名/メッセージ）。Forms v4 は0件。送信データ件数はAPI上 **5件** | Cloudflare Pages Functions + メール転送 / Formspree / Google Forms埋め込み / Notion/DB連携 | 送信先メール・スパム対策（Turnstile等）を要設計。**既存送信データのエクスポートは個人情報扱い** |
| **ブログ** | Wix Blog 15件 | Markdown/MDX（Astro/Hugo/Next静的）+ Git管理 | 日本語スラッグと画像の移行が作業の中心。コメント要否を確認 |
| **時間割** | CMS `Import2`「時間割」3件（公開）。`Import3` はほぼ重複 | JSON/YAML/Markdown表、またはスプレッドシート→ビルド時取り込み | `/tuition-guidance` で使っている可能性が高い |
| **空き状況** | CMS `w8j333pyzdf1i` は **0件** | 手更新の静的表 / Notion / Google Sheets | 現行ページの更新方法をユーザーに確認 |
| **アイテム** | CMS `ccke6h9d` はプレースホルダのみ | 移行不要の可能性大 | |
| **ギャラリー** | 多数ページで Pro Gallery | 静的画像グリッド / Cloudflare Images / 軽量ギャラリーJS | 画像の一括エクスポートが必要 |
| **YouTube** | `/result` に埋め込み | iframe または lite-youtube | そのまま移植可 |
| **Instagram / LINE** | フッター等の外部リンク | 同リンク維持。フィード埋め込みは現状「リンク中心」に見える | フィードウィジェットの有無は未完全検証 |
| **Members** | 会員3・Members Areaインストール | 不要なら廃止。必要なら Cloudflare Access / 別会員基盤 | 公開サイトの必須機能か要確認 |
| **Hotels / Invoices** | インストールのみ確認 | 公開面で未使用なら移行対象外 | ダッシュボード利用の有無を確認 |
| **Bookings / Stores / Events** | GetSiteContext に無し。公開ウィジェットも未確認 | 対象外とみなす | |
| **SEOリダイレクト** | 34件 | Cloudflare Redirect Rules / `_redirects` / Pages Functions | Wixの既存ルールをそのまま再現 |
| **Velo** | 有効 | カスタムコードの洗い出しが必要 | フォーム・時間割連携が Velo 経由の可能性 |
| **解析** | GAは未確認。GSC検証文字列あり | Cloudflare Web Analytics / GA4 / GSC再認証 | 切替時に verification を新ホストへ |

### CMSコレクション一覧（API）

| ID | 表示名 | 種別 | 件数（確認） |
|---|---|---|---|
| Blog/Posts, Categories, Tags | Blog系 | WIX_APP | 投稿15 |
| contact12 | お問い合わせフォーム | NATIVE | 5 |
| Import2 | 時間割 | NATIVE | 3 |
| Import3 | インポート 3 | NATIVE | 3（Import2と類似） |
| w8j333pyzdf1i | 空き状況 | NATIVE | 0 |
| ccke6h9d | アイテム | NATIVE | プレースホルダ |
| Members/* , Locations, Coupons | システム | WIX_APP | — |

---

## 3. 移行時の注意点（優先度順）

1. **メール（MX）を絶対に落とさない**  
   MX は Google。ネームサーバを Wix → Cloudflare に切り替える瞬間に、MX・SPF・（必要なら）DKIM/DMARC を Cloudflare 側へ正確に再設定する。失敗すると `@astale-art.com` のメールが止まる。

2. **DNS切替は「新サイト検証完了後」**  
   先に Cloudflare Pages でプレビュー（`*.pages.dev` 等）を作り、内容・フォーム・リダイレクトを確認してから本番DNSを切る。切替前に Wix 本番を止めない。

3. **URLパスの維持 + 既存34件の301再現**  
   検索・ブックマーク・チラシQR対策。特に日本語パス（`/こどもの教室` → `/kids` 等）とブログ日本語スラッグ。Cloudflare で `_redirects` または Redirect Rules に移植。

4. **ドメインは Wix レジストラ**  
   NS もレジストラも Wix。Cloudflare に移す場合は (a) NSだけ Cloudflare に向ける / (b) ドメイン自体を他レジストラへ移管、の選択が必要。現状 `client transfer prohibited` のため、移管前に Wix 側でロック解除が必要。

5. **お問い合わせフォームの再実装と送信データ**  
   新FormsではないCMS連携フォーム。代替手段と通知先メールを決める。既存5件のエクスポートは個人情報のため取り扱いに注意（本レポートには内容を記載しない）。

6. **ブログ15件 + メディア資産のエクスポート**  
   本文・画像・スラッグ・公開日を移す。Wix Media（`static.wixstatic.com`）依存をやめ、リポジトリまたは R2/Images へ。トップだけでも多数の wixstatic 参照あり。

7. **CMS「時間割」など運用データの移行**  
   学費ページが参照しているなら、静的化後の更新フロー（誰が・どこを直すか）を先に決める。

8. **Google Search Console / サイト検証の付け直し**  
   meta と DNS TXT の verification が別値。DNS移管後は再確認。sitemap は `https://www.astale-art.com/sitemap.xml` を新ホストで出し直す。

9. **Wix Premium 解約タイミング**  
   DNS切替・インデックス・フォーム実運用が安定してから。早すぎる解約はロールバック不能リスク。ドメインを Wix に残す場合、ホスティング解約とドメイン更新の関係も確認。

10. **不要ページの整理方針**  
    `/demo`（複製）、旧キャンペーン、`/covid-19`、旧 regulation などを残す／301／noindex のどれにするか。移行コストに直結。

11. **Members / Hotels / Invoices の要否確認**  
    公開サイト必須でなければ静的化が単純化される。

12. **SEOの弱いページを移行時に直す余地**  
    `/official` の title、`/photo` の重複表現、description 空ページなど。

---

## 4. ユーザーへの確認事項（未解決）

1. **Members Area** は生徒・保護者向けに使っていますか？ 使っていなければ移行対象外にできます。  
2. **Wix Hotels / Invoices** はダッシュボードで実運用がありますか？（公開面では未確認）  
3. お問い合わせの通知は今どこに届いていますか？ 移行後の希望（メール / Notion / Googleフォーム等）は？  
4. **空き状況** ページはどのように更新していますか？（CMSは空）  
5. 過去の講習・規程・`/demo`・`/covid-19` は新サイトに残しますか？  
6. ブログの**コメント**は必要ですか？  
7. Cloudflare アカウントは既にありますか？ 目的は「Pagesホスティング」だけでなく「DNSも Cloudflare」ですか？  
8. apex（`astale-art.com`）と `www` のどちらを正規にしますか？（現状は www 中心）  
9. Google Analytics / Search Console の管理画面は使っていますか？（公開ソースからはGA未確認）  
10. ドメインを Wix レジストラに残しますか、他社へ移管しますか？  
11. GitHub の新規リポジトリ名（例: `astale-website`）と、希望スタック（素の静的 / Astro 等）の希望はありますか？

---

## 5. 既存SEOリダイレクト一覧（移行時に再現）

| from | to | 出典 |
|---|---|---|
| `/複製-summerkids2024` | `/summerkids2024out` | REDIRECTOR |
| `/公式` | `/official` | PAGE_SLUG_RENAME |
| `/こどもの教室` | `/kids` | PAGE_SLUG_RENAME |
| `/obの就職先` | `/graduates` | REDIRECTOR |
| `/yamane-02` | `/interview-yamane` | PAGE_SLUG_RENAME |
| `/受験部詳細` | `/art-exam` | PAGE_SLUG_RENAME |
| `/photoreco` | `/photo` | PAGE_SLUG_RENAME |
| `/複製-受験生の教室` | `/demo` | PAGE_SLUG_RENAME |
| `/空き状況` | `/availability` | PAGE_SLUG_RENAME |
| `/複製-ymane` | `/yamane02` | PAGE_SLUG_RENAME |
| `/blank` | `/` | REDIRECTOR |
| `/スタッフ紹介` | `/staff` | PAGE_SLUG_RENAME |
| `/おとなの教室` | `/adult` | PAGE_SLUG_RENAME |
| `/recruit` | `/recruit-children` | PAGE_SLUG_RENAME |
| `/受験生の教室` | `/examination` | PAGE_SLUG_RENAME |
| `/アステールとは` | `/astale-about` | PAGE_SLUG_RENAME |
| `/lineオープンチャット` | `/line-openchat` | PAGE_SLUG_RENAME |
| `/受験基礎` | `/exam-basic` | PAGE_SLUG_RENAME |
| `/home` | `/` | PAGE_SLUG_RENAME |
| `/求人` | `/recruit` | PAGE_SLUG_RENAME |
| `/基礎の教室` | `/basic` | PAGE_SLUG_RENAME |
| `/result01` | `/result` | PAGE_SLUG_RENAME |
| `/2025regulation` | `/2026regulation` | PAGE_SLUG_RENAME |
| `/ob-01` | `/graduates` | REDIRECTOR |
| `/新型コロナウイルス対応` | `/covid-19` | PAGE_SLUG_RENAME |
| `/冬期講習会` | `/` | REDIRECTOR |
| `/result02` | `/result` | REDIRECTOR |
| `/受験実績` | `/result` | PAGE_SLUG_RENAME |
| `/contact-5` | `/contact` | PAGE_SLUG_RENAME |
| `/複製-受験実績` | `/result01` | PAGE_SLUG_RENAME |
| `/総合案内-学費` | `/tuition-guidance` | PAGE_SLUG_RENAME |
| `/こどもの教室詳細` | `/kids-about` | PAGE_SLUG_RENAME |
| `/sugimoto-02` | `/interview-sugimoto` | PAGE_SLUG_RENAME |
| `/複製-2024regulation` | `/2025regulation` | PAGE_SLUG_RENAME |

※ チェーン（例: `/複製-2024regulation` → `/2025regulation` → `/2026regulation`）があるため、Cloudflare 側では最終URLへ直接301する方が安全。

---

## 6. 未検証・限界

- ヘッダー／フッターのメニュー階層（HTMLから抽出できず）
- Velo カスタムコードの具体的ロジック
- Google Analytics / Tag Manager の有無（公開ソースでは未確認）
- Google Search Console の接続状態（verification文字列のみ確認）
- Hotels / Invoices / Members のダッシュボード実利用
- 画像の総枚数・動画・PDFの完全インベントリ
- apex 直打ち時の証明書／リダイレクト挙動の詳細
- お問い合わせ送信時の通知メールアドレス（API上はコレクション保存のみ確認）

---

## 7. 次の作業候補（このレポート後）

1. 上記「確認事項」への回答  
2. 残すページの確定と情報設計（ナビ案）  
3. GitHub 空リポジトリ作成後、静的サイト骨格 + コンテンツ移行  
4. Cloudflare Pages プレビュー → リダイレクト／フォーム試験 → DNS切替手順書


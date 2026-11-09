# 旧URL → 新URL 対応表

現行Wixサイトの事実は [wix_site_survey.md](wix_site_survey.md)（2026-11-07 調査）を正とする。
転送設定の実体は `public/_redirects`。この表と必ず一致させる。

## 扱いの区分

| 区分 | 意味 |
|---|---|
| そのまま移す | 新サイトに同じURLのページがある（転送不要） |
| 新URLへ301 | 旧URLを新サイトの別URLへ転送する |
| 統合して301 | 複数の旧ページを1つの新ページにまとめて転送する |
| Wixと同じURLで作る | 新サイトに同じURLでページを作る（転送不要）。ページ作成まで未公開 |
| やめて301 | 新サイトに載せず、関連ページへ転送する |
| **要確認** | 残す・統合・削除がまだ決まっていない。決まるまで301は書かない |

2026-11-09 の担当者向け確認シートの回答で、多くのページの扱いが決まった。新しく作るページはWixと同じURLにする（管理者了承済み）。

## 1. 静的ページ（36件）

新サイトにあるページは `/` `/about` `/exam` `/adult` `/kids` `/guide` `/results` `/faq` `/news` `/contact` の10ページ。「Wixと同じURLで作る」ページは今後追加する。

| 旧URL（Wix） | 新URL | 扱い | メモ |
|---|---|---|---|
| `/` | `/` | そのまま移す | `/home` も `/` へ転送（Wix側にも同じ転送あり） |
| `/astale-about` | `/about` | 新URLへ301 | アステールとは？ |
| `/examination` | `/exam` | 新URLへ301 | 受験生の教室 |
| `/examination-about` | `/examination-about` | Wixと同じURLで作る | 受験の教室について |
| `/art-exam` | `/art-exam` | Wixと同じURLで作る | 受験部詳細 |
| `/exam-basic` | `/exam-basic` | Wixと同じURLで作る | 受験基礎概要 |
| `/basic` | `/basic` | Wixと同じURLで作る | 基礎の教室。受験生とは別コース（中学生・高校生を対象に、デッサン・色彩の基礎を体験する教室） |
| `/kids` | `/kids` | そのまま移す | |
| `/kids-about` | `/kids-about` | Wixと同じURLで作る | こどもの教室詳細 |
| `/adult` | `/adult` | そのまま移す | |
| `/tuition-guidance` | `/guide` | 新URLへ301 | 総合案内・学費。CMS「時間割」参照の可能性あり |
| `/availability` | `/availability` | Wixと同じURLで作る | 空き状況。更新する人・方法は未回答 |
| `/result` | `/results` | 新URLへ301 | 受験実績。YouTube埋め込み1件。**現行は `/result`（新サイトは `/results`）** |
| `/graduates` | `/graduates` | Wixと同じURLで作る | 活躍する卒業生 |
| `/interview-asakura` | `/interview-asakura` | Wixと同じURLで作る | 本人の掲載許可は確認済み。実名・写真とも今と同じ |
| `/interview-sugimoto` | `/interview-sugimoto` | Wixと同じURLで作る | 同上 |
| `/interview-yamane` | `/interview-yamane` | Wixと同じURLで作る | 同上 |
| 奥村さんのインタビュー（スラッグ未確認） | — | **要確認** | 載せる・掲載許可は確認済み。URLが未確認のため、Wixの管理画面で確認する |
| `/staff` | `/staff` | Wixと同じURLで作る | スタッフ紹介。載せてよい内容（氏名・経歴・顔写真など）は未回答 |
| `/staff/tamura` | `/staff/tamura` | Wixと同じURLで作る | 一人ずつのページを残す。載せてよい内容は未回答 |
| `/staff/noro` | `/staff/noro` | Wixと同じURLで作る | 同上 |
| `/photo` | `/` | やめて301 | フォトレコは終了済み |
| `/blog` | `/news` | 新URLへ301 | ブログ一覧。個別記事は2章 |
| `/contact` | `/contact` | そのまま移す | フォームは再実装が必要（報告書2章） |
| `/official` | `/official` | Wixと同じURLで作る | 公式LINE。独立したページとして残す。問い合わせの受け方も公式LINEを希望 |
| `/line-openchat` | `/official` | やめて301 | 運用していない |
| `/recruit-children` | `/recruit-children` | Wixと同じURLで作る | 募集中 |
| `/recruit-model` | `/recruit-model` | Wixと同じURLで作る | 募集中 |
| `/covid-19` | `/` | やめて301 |  |
| `/demo` | — | **要確認** | 「複製 - 受験生の教室」。担当者の確認待ち |
| `/2026regulation` | `/2026regulation` | Wixと同じURLで作る | 2026年度の規程 |
| `/2024regulation` | `/2026regulation` | やめて301 | 最新の規程へ案内 |
| `/2024winter` | `/news` | やめて301 | 過去の講習ページ |
| `/summer2024` | `/news` | やめて301 | 過去の講習ページ |
| `/summerkids2024` | `/news` | やめて301 | 過去の講習ページ |
| `/summerkids2024out` | `/news` | やめて301 | 過去の講習ページ |

## 2. ブログ記事（15件）

URLは `/post/{スラッグ}`（日本語・全角数字を含む）。

確認シートの回答で扱いが決まった。「移す」記事は `/news/〜` へ、「合格実績にまとめる」記事は `/results` へ個別に転送し、「やめる」記事は `/post/*` で `/news`（一覧）へ転送する。コメント機能は不要。

| 公開日 | 旧URL（`/post/` 以降） | 新URL | 扱い |
|---|---|---|---|
| 2026-10-28 | `11月15日-日-進路ガイダンスのご案内` | — | やめる（`/post/*` で `/news` へ） |
| 2026-06-18 | `こども-夏の特別教室２０２６` | `/news/kids-summer-2026` | 移す。新URLへ301（本文未移行・draft） |
| 2026-05-25 | `夏期講習会2026` | `/news/summer-course-2026` | 移す。新URLへ301（本文未移行・draft） |
| 2026-05-11 | `6月13日-土-進路ガイダンスのご案内` | — | やめる（`/post/*` で `/news` へ） |
| 2026-02-04 | `春期講習会2026` | — | 移す。記事を作るときに301を追加する（それまでは `/news` へ） |
| 2025-11-03 | `冬期講習会2025` | — | やめる（`/post/*` で `/news` へ）。準備中だった下書きは削除 |
| 2025-06-12 | `夏のこども特別教室2025` | — | やめる（`/post/*` で `/news` へ） |
| 2025-06-06 | `夏期講習会２０２５` | — | やめる（`/post/*` で `/news` へ） |
| 2025-04-12 | `２０２５年度美大受験入試-結果報告-1` | `/results` | 合格実績にまとめて301 |
| 2025-01-28 | `春期講習会2025` | — | やめる（`/post/*` で `/news` へ） |
| 2024-11-01 | `冬期講習会2024` | — | やめる（`/post/*` で `/news` へ） |
| 2024-06-24 | `夏のこども美術教室2024` | `/news`（一覧） | やめる（`/post/*` で `/news` へ） |
| 2024-03-24 | `2024年度美大受験入試-結果報告` | `/results` | 合格実績にまとめて301 |
| 2023-04-10 | `2023年度美大受験入試-結果報告` | `/results` | 合格実績にまとめて301 |
| 2022-07-07 | `夏のデジタルイラスト教室` | — | やめる（`/post/*` で `/news` へ） |

## 3. Wix の既存301リダイレクト（34件）

Wix の SEO リダイレクト（報告書5章）を、チェーンを最終URLまで平らにして整理したもの。
「新サイトでのURL」が空欄の行は、転送先のページがまだ決まっていない（1章で要確認）ため、301を書かない。

| 旧URL | Wixでの最終転送先 | 新サイトでのURL | 扱い |
|---|---|---|---|
| `/アステールとは` | `/astale-about` | `/about` | 新URLへ301 |
| `/受験生の教室` | `/examination` | `/exam` | 新URLへ301 |
| `/おとなの教室` | `/adult` | `/adult` | 新URLへ301 |
| `/こどもの教室` | `/kids` | `/kids` | 新URLへ301 |
| `/総合案内-学費` | `/tuition-guidance` | `/guide` | 新URLへ301 |
| `/contact-5` | `/contact` | `/contact` | 新URLへ301 |
| `/受験実績` | `/result` | `/results` | 新URLへ301 |
| `/result01` | `/result` | `/results` | 統合して301 |
| `/result02` | `/result` | `/results` | 統合して301 |
| `/複製-受験実績` | `/result01` → `/result` | `/results` | 統合して301 |
| `/home` | `/` | `/` | 新URLへ301 |
| `/blank` | `/` | `/` | 新URLへ301 |
| `/冬期講習会` | `/` | `/` | 新URLへ301（Wixの転送先を踏襲） |
| `/公式` | `/official` | `/official` | 新URLへ301 |
| `/obの就職先` | `/graduates` | `/graduates` | 新URLへ301 |
| `/ob-01` | `/graduates` | `/graduates` | 新URLへ301 |
| `/yamane-02` | `/interview-yamane` | `/interview-yamane` | 新URLへ301 |
| `/複製-ymane` | `/yamane02` | — | **要確認**（`/yamane02` が現存するか未確認） |
| `/sugimoto-02` | `/interview-sugimoto` | `/interview-sugimoto` | 新URLへ301 |
| `/受験部詳細` | `/art-exam` | `/art-exam` | 新URLへ301 |
| `/受験基礎` | `/exam-basic` | `/exam-basic` | 新URLへ301 |
| `/基礎の教室` | `/basic` | `/basic` | 新URLへ301 |
| `/こどもの教室詳細` | `/kids-about` | `/kids-about` | 新URLへ301 |
| `/photoreco` | `/photo` | `/` | 新URLへ301 |
| `/複製-受験生の教室` | `/demo` | — | **要確認**（`/demo` の扱いが未定） |
| `/空き状況` | `/availability` | `/availability` | 新URLへ301 |
| `/スタッフ紹介` | `/staff` | `/staff` | 新URLへ301 |
| `/recruit` | `/recruit-children` | `/recruit-children` | 新URLへ301 |
| `/求人` | `/recruit` → `/recruit-children` | `/recruit-children` | 新URLへ301 |
| `/lineオープンチャット` | `/line-openchat` | `/official` | 新URLへ301 |
| `/新型コロナウイルス対応` | `/covid-19` | `/` | 新URLへ301 |
| `/2025regulation` | `/2026regulation` | `/2026regulation` | 新URLへ301 |
| `/複製-2024regulation` | `/2025regulation` → `/2026regulation` | `/2026regulation` | 新URLへ301 |
| `/複製-summerkids2024` | `/summerkids2024out` | `/news` | 新URLへ301 |

## 4. 補足

- 未確認の点：奥村さんのインタビューページのスラッグ、`/yamane02` の現存、`/demo` の扱い、メニュー階層。
- 「Wixと同じURLで作る」ページと `/news/〜` の記事は、作成するまで転送先が404になる。本番切替前にすべて作る。
- 日本語URLは `_redirects` ではパーセントエンコードで書く（Python: `urllib.parse.quote('/受験生の教室')`）。
- 記事の draft を false にするまで、転送先の `/news/〜` は本番に存在しない。本番切替前に全記事を移すか、転送先を `/news` に変える。
- 切替後、旧URLを1件ずつブラウザで開いて転送を確認する。

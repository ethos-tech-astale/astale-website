# 旧URL → 新URL 対応表

転送設定の実体は `public/_redirects`。この表と必ず一致させる。
**現時点では検索結果から分かった分のみ。** Wix の `https://www.astale-art.com/sitemap.xml` から全URLを洗い出して追記すること（ブログは17記事あるはず）。

| 旧URL（Wix） | 新URL | 状態 |
|---|---|---|
| `/` | `/` | 同じ |
| `/アステールとは` | `/about` | 転送設定済み |
| `/総合案内-学費` | `/guide` | 転送設定済み |
| `/受験生の教室` | `/exam` | 転送設定済み |
| `/おとなの教室` | `/adult` | 転送設定済み。※`/adult` が既に存在するかWixで要確認 |
| `/adult` | `/adult` | 同じ（要確認） |
| `/kids` | `/kids` | 同じ（要確認） |
| `/results` | `/results` | 同じ（要確認） |
| `/contact-5` | `/contact` | 転送設定済み |
| `/post/冬期講習会2025` | `/news/winter-course-2025` | 転送設定済み・本文未移行（draft） |
| `/post/夏期講習会2026` | `/news/summer-course-2026` | 転送設定済み・本文未移行（draft） |
| `/post/こども-夏の特別教室２０２６` | `/news/kids-summer-2026` | 転送設定済み・本文未移行（draft） |
| `/post/夏のこども美術教室2024` | `/news`（一覧へ） | 個別には移さない |
| `/post/*`（その他） | `/news` | まとめて一覧へ |
| covid-19 関連ページ | （削除） | URL判明後に `/` か `/news` へ転送を追加 |

## 注意

- 日本語URLは `_redirects` ではパーセントエンコードで書く（Python: `urllib.parse.quote('/受験生の教室')`）。
- 記事の draft を false にするまで、転送先の `/news/〜` は本番に存在しない。本番切替前に全記事を移すか、転送先を `/news` に変える。
- 切替後、旧URLを1件ずつブラウザで開いて転送を確認する。

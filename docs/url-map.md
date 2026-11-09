# 旧URL → 新URL 対応表

転送設定の実体は `public/_redirects`。この表と必ず一致させる。
Wix の全ページ（静的36・ブログ15・既存301転送34件）は `docs/wix_site_survey.md` を参照。**現時点では転送先が決まっているページのみ。** 残りは担当者向け確認シートの回答後に追記する。

| 旧URL（Wix） | 新URL | 状態 |
|---|---|---|
| `/` | `/` | 同じ |
| `/home` `/blank` `/冬期講習会` | `/` | 転送設定済み（Wixの既存301） |
| `/astale-about` | `/about` | 転送設定済み（Wixの実URL） |
| `/アステールとは` | `/about` | 転送設定済み（Wixの既存301） |
| `/examination` | `/exam` | 転送設定済み（Wixの実URL） |
| `/受験生の教室` | `/exam` | 転送設定済み（Wixの既存301） |
| `/tuition-guidance` | `/guide` | 転送設定済み（Wixの実URL） |
| `/総合案内-学費` | `/guide` | 転送設定済み（Wixの既存301） |
| `/result` | `/results` | 転送設定済み（Wixの実URL） |
| `/result01` `/result02` `/受験実績` `/複製-受験実績` | `/results` | 転送設定済み（Wixの既存301） |
| `/adult` | `/adult` | 同じ |
| `/おとなの教室` | `/adult` | 転送設定済み（Wixの既存301） |
| `/kids` | `/kids` | 同じ |
| `/こどもの教室` | `/kids` | 転送設定済み（Wixの既存301） |
| `/contact` | `/contact` | 同じ |
| `/contact-5` | `/contact` | 転送設定済み（Wixの既存301） |
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

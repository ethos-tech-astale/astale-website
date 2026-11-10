// サイト全体の基本情報。住所・電話・駅からの所要時間などは「ここだけ」に書く。
// ページに直接書かないこと（表記の食い違いを防ぐため）。
// null の項目は未確定。確定したら値を入れると、ページと構造化データに自動で反映される。

export const site = {
  name: 'アステール総合美術研究所',
  shortName: 'アステール',
  url: 'https://www.astale-art.com',
  description: '静岡県三島市の美術研究所。美大・芸大受験の予備校、おとなの教室、こどもの教室を開いています。',
  address: {
    region: '静岡県',
    locality: '三島市',
    street: null as string | null, // 例: '〇〇町1-2-3 〇〇ビル2F'
    postalCode: null as string | null, // 例: '411-0000'
  },
  telephone: null as string | null,
  /** 最寄り駅からの所要時間（例: 'JR三島駅 南口から徒歩1分'）。Web上の表記はこれに統一する */
  access: null as string | null,
  instagram: null as string | null, // 例: 'https://www.instagram.com/xxxx/'
  /** お問い合わせ用 Google フォームの埋め込みURL（…/viewform?embedded=true） */
  contactFormUrl: null as string | null,
};

export const nav = [
  { href: '/about', label: 'アステールとは' },
  { href: '/exam', label: '受験生の教室' },
  { href: '/adult', label: 'おとなの教室' },
  { href: '/kids', label: 'こどもの教室' },
  { href: '/guide', label: '総合案内・学費' },
  { href: '/results', label: '合格実績' },
  { href: '/news', label: 'お知らせ' },
  { href: '/faq', label: 'よくある質問' },
  { href: '/contact', label: 'お問い合わせ' },
];

// サイトマップ（/sitemap.xml）は src/pages/ のページから自動で作る（src/pages/sitemap.xml.ts）。

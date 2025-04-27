import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "EN" | "JP";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  EN: {
    "nav.about": "ABOUT",
    "nav.community": "COMMUNITY",
    "nav.news": "NEWS",
    "nav.joinUs": "JOIN US",
    "hero.headline": "Welcome to",
    "hero.headline2": "ITea Lab",
    "hero.tagline": "Where tech meets its quali-tea",
    "hero.scroll": "SCROLL",
    "workStyle.title": "HOW OUR TEAM WORKS",
    "workStyle.intro":
      "At ITea Lab, we embrace challenges, diversity, and creativity in our work environment.",
    "workStyle.research.title": "Research-Driven",
    "workStyle.research.text":
      "We balance academic rigor with practical applications, publishing our findings and contributing to open-source projects.",
    "workStyle.agile.title": "Agile Methodology",
    "workStyle.agile.text":
      "We embrace iterative development, continuous feedback, and adaptive planning to deliver exceptional results.",
    "workStyle.remote.title": "Flexible Work",
    "workStyle.remote.text":
      "We support remote work and flexible schedules, focusing on outcomes rather than hours spent at a desk.",
    "workStyle.growth.title": "Continuous Growth",
    "workStyle.growth.text":
      "We invest in our team's development through conferences, courses, and dedicated learning time.",
    "culture.mistake.title": "Mistake",
    "culture.mistake.text":
      "We value learning from failures and see mistakes as opportunities for growth.",
    "vision.title": "OUR VISION",
    "vision.text":
      "To further expand the community and cultivate an inclusive space where Computer Science students can explore, research, and exchange knowledge, fostering connections among curious and passionate CS minds across all boundaries.",
    "aboutUs.title": "ABOUT US",
    "aboutUs.content":
      "ITea Lab is a community built from a group of Computer Science students at Swinburne Vietnam, dedicated to cutting-edge research and development in technology.",
    "timeline.title": "OUR JOURNEY",
    "timeline.text":
      "From humble beginnings to a thriving community, explore our journey through the years.",
    "activity.title": "WHAT WE DO",
    "activity.text":
      "We bring tech to life through hands-on workshops, meaningful community projects, and fun team activities that build real connections. It's not just about coding—it's about creating together, solving problems that matter, and having a blast while we do it.",
    "community.title": "JOIN OUR COMMUNITY",
    "community.text":
      "Join our vibrant community of innovators, researchers, and technology enthusiasts.",
    "community.events.title": "Community Events",
    "community.events.text":
      "We organize various events to share knowledge and experiences.",
    "community.events.link": "View post",
    "community.opensource.title": "Open Source",
    "community.opensource.text":
      "We contribute to open source projects and encourage collaboration.",
    "community.opensource.link": "Github projects",
    "news.title": "ITEA LAB NEWS",
    "news.text": "Stay updated with the latest happenings at our community.",
    "footer.copyright": "© 2025 ITEA LAB TEAM.",
  },
  JP: {
    "nav.about": "私たちについて",
    "nav.community": "コミュニティ",
    "nav.news": "ニュース",
    "nav.joinUs": "参加する",
    "hero.headline": "ようこそ",
    "hero.headline2": "ITea Labへ",
    "hero.tagline": "技術とクオリティが出会う場所",
    "hero.scroll": "スクロール",
    "workStyle.title": "私たちの働き方",
    "workStyle.intro":
      "ITea Labでは、挑戦、多様性、創造性を大切にする職場環境を築いています。",
    "workStyle.research.title": "リサーチ主導",
    "workStyle.research.text":
      "学術的厳密さと実用的応用のバランスを取り、研究成果を発表し、オープンソースプロジェクトに貢献しています。",
    "workStyle.agile.title": "アジャイル手法",
    "workStyle.agile.text":
      "反復的な開発、継続的なフィードバック、柔軟な計画を取り入れ、卓越した成果を追求しています。",
    "workStyle.remote.title": "柔軟な働き方",
    "workStyle.remote.text":
      "リモートワークや柔軟な勤務時間を支援し、成果重視の働き方を推進しています。",
    "workStyle.growth.title": "継続的成長",
    "workStyle.growth.text":
      "カンファレンス、講座、学習専用時間を通じて、チームの成長に投資しています。",
    "culture.mistake.title": "失敗",
    "culture.mistake.text":
      "失敗から学ぶことを重視し、成長のチャンスと捉えています。",
    "vision.title": "私たちのビジョン",
    "vision.text":
      "コンピュータサイエンスの学生が探求・研究・知識交換できる包括的なコミュニティをさらに広げ、好奇心と情熱を持つ仲間たちを国境を越えてつなげることを目指します。",
    "aboutUs.title": "私たちについて",
    "aboutUs.content":
      "ITea Labは、スウィンバーン・ベトナムのコンピュータサイエンス学生によって設立された、最先端技術の研究と開発に取り組むコミュニティです。",
    "timeline.title": "私たちの歩み",
    "timeline.text":
      "小さな始まりから活気あるコミュニティへと成長した、私たちの歴史を辿ってください。",
    "activity.title": "私たちの活動",
    "activity.text":
      "ワークショップ、コミュニティプロジェクト、楽しいチーム活動を通じて、テクノロジーを実際に体験し、絆を深めます。単なるコーディングにとどまらず、共に創造し、社会に貢献し、楽しみながら問題解決に取り組みます。",
    "community.title": "コミュニティに参加する",
    "community.text":
      "イノベーター、研究者、テクノロジー愛好家が集う活気あるコミュニティに参加しよう。",
    "community.events.title": "コミュニティイベント",
    "community.events.text":
      "知識と経験を共有する様々なイベントを開催しています。",
    "community.events.link": "投稿を見る",
    "community.opensource.title": "オープンソース",
    "community.opensource.text":
      "オープンソースプロジェクトに貢献し、コラボレーションを推進しています。",
    "community.opensource.link": "Githubプロジェクト",
    "news.title": "ITEA LAB ニュース",
    "news.text": "私たちのコミュニティの最新情報をチェックしましょう。",
    "footer.copyright": "© 2025 ITEA LAB TEAM.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "EN" | "VN";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  EN: {
    "nav.career": "CAREER",
    "nav.newGraduates": "NEW GRADUATES",
    "hero.tagline": "From you, to HENNGE, to the world. Let's change.",
    "hero.scroll": "SCROLL",
    "identity.vision.title": "VISION",
    "identity.vision.text":
      "LIBERATION OF TECHNOLOGY - Liberating Technology For All.",
    "identity.ceo.title": "MESSAGE FROM CEO",
    "identity.ceo.subtitle": "EAT UNRIPE FRUITS AND MAKE MISTAKES EARLY",
    "identity.ceo.name": "Kazuhiro Ogura",
    "identity.ceo.seeMore": "SEE MORE",
    "identity.values.title": "CORE VALUES",
    "identity.values.v1.title": "Believe in technology.",
    "identity.values.v1.text":
      "We believe technology can change the world for the better.",
    "identity.values.v2.title": "Make mistakes early.",
    "identity.values.v2.text": "We learn from our failures and grow stronger.",
    "identity.values.v3.title": "Stay curious, be a learnaholic.",
    "identity.values.v3.text": "We continuously learn and improve ourselves.",
    "identity.values.v4.title": "Embrace diversity & inclusion.",
    "identity.values.v4.text":
      "We value different perspectives and backgrounds.",
    "culture.workStyle.title": "WORK STYLE",
    "culture.workStyle.text":
      "At HENNGE, we embrace challenges, diversity, and creativity in our work environment.",
    "culture.technology.title": "Technology",
    "culture.technology.text":
      "We actively engage with cutting-edge technologies to create innovative solutions.",
    "culture.mistake.title": "Mistake",
    "culture.mistake.text":
      "We value learning from failures and see mistakes as opportunities for growth.",
    "culture.learnaholic.title": "Learnaholic",
    "culture.learnaholic.text":
      "We support continuous learning and professional development for all employees.",
    "culture.diversity.title": "Diversity",
    "culture.diversity.text":
      "Our inclusive environment welcomes employees from diverse backgrounds and nationalities.",
    "content.aboutUs.title": "ABOUT US",
    "content.aboutUs.link": "Company Introduction Deck",
    "content.stories.title": "STORIES",
    "content.stories.blog": "HENNGE Blog",
    "content.stories.blogDesc":
      "Read stories from our employees and company activities",
    "content.stories.life": "Life at HENNGE",
    "content.stories.lifeDesc":
      "Get insights into our work culture and environment",
    "corporate.title": "CORPORATE PROFILE",
    "corporate.address":
      "Daiwa Shibuya Square, 16-28, Nanpeidai-cho, Shibuya-ku, Tokyo, 150-0036 Japan",
    "corporate.station": "Near Shibuya station",
    "corporate.link": "SEE CORPORATE SITE",
    "footer.privacy": "Privacy Policy",
    "footer.gdpr": "GDPR Policy",
    "footer.copyright": "© 2025 ITEA LAB TEAM.",
  },
  VN: {
    "nav.career": "キャリア採用",
    "nav.newGraduates": "新卒採用",
    "hero.tagline": "あなたから、HENNGEから、世界へ。変えていこう。",
    "hero.scroll": "スクロール",
    "identity.vision.title": "ビジョン",
    "identity.vision.text": "テクノロジーの解放 - すべての人にテクノロジーを",
    "identity.ceo.title": "CEOからのメッセージ",
    "identity.ceo.subtitle": "未熟な果実を食べ、早めに失敗しよう",
    "identity.ceo.name": "小倉 一宏",
    "identity.ceo.seeMore": "もっと見る",
    "identity.values.title": "コアバリュー",
    "identity.values.v1.title": "テクノロジーを信じる",
    "identity.values.v1.text":
      "私たちは、テクノロジーが世界をより良くすると信じています。",
    "identity.values.v2.title": "早めに失敗する",
    "identity.values.v2.text": "私たちは失敗から学び、より強くなります。",
    "identity.values.v3.title": "好奇心を持ち、学び続ける",
    "identity.values.v3.text": "私たちは継続的に学び、自己を向上させます。",
    "identity.values.v4.title": "多様性と包括性を受け入れる",
    "identity.values.v4.text": "私たちは異なる視点や背景を大切にします。",
    "culture.workStyle.title": "働き方",
    "culture.workStyle.text":
      "HENNGEでは、挑戦、多様性、創造性を大切にした職場環境を提供しています。",
    "culture.technology.title": "テクノロジー",
    "culture.technology.text":
      "私たちは最先端のテクノロジーに積極的に取り組み、革新的なソリューションを創造します。",
    "culture.mistake.title": "失敗",
    "culture.mistake.text":
      "私たちは失敗から学ぶことを重視し、ミスを成長の機会と捉えています。",
    "culture.learnaholic.title": "学習好き",
    "culture.learnaholic.text":
      "私たちはすべての従業員の継続的な学習と専門能力開発をサポートしています。",
    "culture.diversity.title": "多様性",
    "culture.diversity.text":
      "私たちの包括的な環境は、多様な背景や国籍を持つ従業員を歓迎します。",
    "content.aboutUs.title": "会社について",
    "content.aboutUs.link": "会社紹介資料",
    "content.stories.title": "ストーリー",
    "content.stories.blog": "HENNGEブログ",
    "content.stories.blogDesc": "従業員のストーリーや会社の活動を読む",
    "content.stories.life": "HENNGEでの生活",
    "content.stories.lifeDesc": "私たちの職場文化や環境についての洞察を得る",
    "corporate.title": "企業プロフィール",
    "corporate.address":
      "〒150-0036 東京都渋谷区南平台町16-28 大和渋谷スクエア",
    "corporate.station": "渋谷駅近く",
    "corporate.link": "企業サイトを見る",
    "footer.privacy": "プライバシーポリシー",
    "footer.gdpr": "GDPRポリシー",
    "footer.copyright": "© 1996 HENNGE株式会社",
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

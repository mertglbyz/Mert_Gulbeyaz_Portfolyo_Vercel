export type FeaturedProject = {
  index: string;
  name: string;
  tags: string[];
  description: string;
  href?: string;
  cta?: string;
  visual: "water" | "transit" | "ml";
  coverImage?: string;
  screenshots?: string[];
  stores?: {
    appStore?: string;
    playStore?: string;
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    index: "01",
    name: "Water Reminder",
    tags: ["React Native", "Supabase", "Expo", "EAS"],
    description:
      "Supabase altyapısı, çevrimdışı senkronizasyon ve 23 dil desteğiyle global ölçekte geliştirdiğim su takip uygulaması. İnteraktif maskot sistemi ve akıllı hatırlatıcılarla sağlıklı yaşam asistanı.",
    screenshots: [
      "/projects/water/screenshot_iphone_en_1_track_daily_water.png",
      "/projects/water/screenshot_iphone_en_2_choose_your.png",
      "/projects/water/screenshot_iphone_en_3_detailed_progress.png",
      "/projects/water/screenshot_iphone_en_4_smart_health.png",
      "/projects/water/screenshot_iphone_en_5_personalize_your.png",
      "/projects/water/screenshot_iphone_en_6_dynamic_motivation.png",
      "/projects/water/screenshot_iphone_en_7_23_languages.png",
    ],
    stores: {
      appStore:
        "https://apps.apple.com/tr/app/su-i-%C3%A7me-hat%C4%B1rlat%C4%B1c%C4%B1-takip/id6760728526?l=tr",
      playStore:
        "https://play.google.com/store/apps/details?id=com.kadrigulbeyaz.waterreminder&hl=tr",
    },
    visual: "water",
  },
  {
    index: "02",
    name: "İzmir Ulaşım Planlayıcı",
    tags: ["OpenTripPlanner", "Docker", "Oracle Cloud", "React Native"],
    description:
      "İzmir İnovasyon ve Teknoloji A.Ş. (İZTEK) bünyesinde OpenTripPlanner rota motorunu Docker ile konteynerleştirip Oracle Cloud üzerinde üretim ortamına aldığım toplu taşıma projesi.",
    visual: "transit",
  },
  {
    index: "03",
    name: "Veri Analizi & Makine Öğrenmesi",
    tags: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    description:
      "Sınıflandırma, regresyon, kümeleme ve veri ön işleme pipeline'ları üzerine notebook çalışmaları.",
    visual: "ml",
  },
];

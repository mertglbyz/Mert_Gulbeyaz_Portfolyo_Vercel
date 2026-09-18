export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  detail: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    period: "2025 — Günümüz",
    role: "Bağımsız Mobil Uygulama Geliştirici",
    org: "Freelance",
    detail:
      "React Native ve Supabase kullanarak sıfırdan cross-platform mobil uygulamalar geliştirdi ve yayımladı. Çoklu dil (i18n) desteği ve offline-first veri senkronizasyonu entegre etti. EAS Build ile CI/CD süreçlerini yapılandırarak App Store ve Google Play dağıtımlarını uçtan uca yönetti.",
    highlights: [
      "React Native",
      "Supabase",
      "Çoklu dil (i18n)",
      "offline-first",
      "EAS Build",
      "CI/CD",
      "App Store",
      "Google Play",
    ],
  },
  {
    period: "2026",
    role: "Stajyer Yazılım Geliştirici",
    org: "İzmir İnovasyon ve Teknoloji A.Ş. (İZTEK)",
    detail:
      "5 farklı ulaşım ağını (otobüs, metro, tramvay, İZBAN, vapur) ve 11.000'den fazla durağı tek bir gerçek zamanlı rota motorunda birleştiren İzmir Ulaşım Planlayıcı (İZTEK) uygulamasını geliştirdi. Reverse indexing ile O(1) karmaşıklığında durak/rota arama ve binlerce harita işaretleyicisini (marker) kasmadan render etmek için viewport tabanlı sanallaştırma (virtualization) gibi zorlu mühendislik problemlerini çözdü. Sistemi Oracle Cloud üzerinde Docker ve Coolify CI/CD pipeline'ı ile sıfır kesinti (zero-downtime) hedefiyle canlıya aldı.",
    highlights: [
      "viewport tabanlı sanallaştırma (virtualization)",
      "Docker ve Coolify CI/CD",
      "sıfır kesinti (zero-downtime)",
      "O(1) karmaşıklığında",
      "Reverse indexing",
      "Oracle Cloud",
    ],
  },
  {
    period: "Temmuz 2024",
    role: "Stajyer Yazılım Geliştirici",
    org: "Yaşar Üniversitesi",
    detail:
      "Üniversite tercih danışmanlığını dijitalleştiren ASP.NET tabanlı otomasyon projesinde Excel iş akışlarını entegre etti.",
    highlights: ["ASP.NET"],
  },
];

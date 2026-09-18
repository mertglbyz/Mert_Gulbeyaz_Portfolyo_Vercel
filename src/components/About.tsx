"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { NetworkGraph } from "@/components/NetworkGraph";
import { skillIcons, type SkillName } from "@/components/SkillIcons";
import { useMediaQuery } from "@/lib/use-media-query";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const mobileSkills: SkillName[] = [
  "React Native",
  "TypeScript",
  "Expo",
  "EAS Build",
  "Supabase",
];

const cloudSkills: SkillName[] = [
  "Node.js",
  "Docker",
  "Oracle Cloud",
  "GCP",
  "AWS",
];

const dataSkills: SkillName[] = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Seaborn",
  "Jupyter Notebook",
];

function BentoCard({
  className,
  children,
  featured = false,
}: {
  className?: string;
  children: ReactNode;
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={item}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.45, ease }}
      className={cn(
        "relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl sm:rounded-[2rem] sm:p-10",
        "transition-colors duration-500 hover:border-accent/40 hover:bg-white/[0.045]",
        featured && "h-full",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute rounded-full blur-3xl",
          featured
            ? "hidden -top-24 -right-16 h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.34)_0%,rgba(124,92,255,0.16)_42%,transparent_70%)] sm:block"
            : "hidden -top-16 -right-12 h-44 w-44 bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.14)_0%,transparent_70%)] sm:block",
        )}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div
        className={cn(
          "relative",
          featured && "flex min-h-0 flex-1 flex-col justify-start gap-6",
        )}
      >
        {children}
      </div>
    </motion.article>
  );
}

function SkillChip({ name, index }: { name: SkillName; index: number }) {
  return (
    <motion.span
      initial={false}
      whileInView={{
        opacity: 1,
        y: 0,
        boxShadow: [
          "0 0 0px rgba(91,140,255,0)",
          "0 0 18px rgba(91,140,255,0.32)",
          "0 0 0px rgba(91,140,255,0)",
        ],
      }}
      whileHover={{
        borderColor: "rgba(138,176,255,0.55)",
        backgroundColor: "rgba(91,140,255,0.12)",
        boxShadow: "0 0 22px rgba(91,140,255,0.38)",
      }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{
        duration: 1.6,
        delay: 0.05 * index,
        ease,
      }}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-[13px] tracking-wide text-foreground/90 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_22px_rgba(91,140,255,0.38)]"
    >
      <span className="text-accent-soft">{skillIcons[name]}</span>
      {name}
    </motion.span>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-accent-soft">{children}</span>;
}

function CardKicker({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-[0.2em] text-accent/80 uppercase">
      {children}
    </span>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display mt-4 text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
      {children}
    </h3>
  );
}

export function About() {
  const showGraph = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      id="hakkimda"
      className="relative scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px] lg:block" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-10 sm:mb-14"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] tracking-[0.32em] text-accent uppercase">
            Hakkımda & Yetenekler
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            Odak ve yetkinlik
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12 lg:grid-rows-[minmax(280px,auto)_minmax(280px,auto)_minmax(220px,auto)]"
          variants={container}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
        >
          <BentoCard
            featured
            className="flex h-full flex-col justify-start md:col-span-6 lg:col-span-7 lg:row-span-2"
          >
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <CardKicker>01 — Profil</CardKicker>
                <h3 className="font-display mt-3 text-2xl leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Yazılım Mühendisi
                </h3>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs tracking-wide text-zinc-300 backdrop-blur-md">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 text-accent-soft"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M8 8.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M8 14s5-3.4 5-7.2A5 5 0 0 0 3 6.8C3 10.6 8 14 8 14Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
                İzmir, Türkiye
              </span>
            </div>
            <div className="space-y-5">
              <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                <Mark>React Native</Mark> ve <Mark>TypeScript</Mark> ile uçtan
                uca, cross-platform mobil uygulamalar geliştiriyorum. Mimari
                tasarımdan EAS Build ile <Mark>CI/CD</Mark> süreçlerine ve
                mağaza dağıtımlarına kadar yazılım yaşam döngüsünün tüm
                aşamalarında aktif rol alıyorum.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Mobil geliştirmenin yanı sıra veri bilimi ve{" "}
                <Mark>makine öğrenmesi</Mark> (Python, Pandas, Scikit-learn)
                alanında çözümler üretiyor; GCP, AWS ve Oracle{" "}
                <Mark>bulut sertifikalarımla</Mark> projelere ölçeklenebilir ve
                güvenli bir altyapı vizyonuyla yaklaşıyorum.
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="h-3 w-3 shrink-0 animate-pulse rounded-full bg-green-500"
                  aria-hidden
                />
                <span className="text-sm tracking-wide text-zinc-400">
                  Yeni projelere açık
                </span>
              </div>
              <a
                href="/Mert_Gulbeyaz_CV_2026_.pdf"
                download="Mert_Gulbeyaz_CV_2026.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-wide text-zinc-200 backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M8 2.5v7.2M5.2 7.2 8 10l2.8-2.8M3 12.5h10"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                CV İndir
              </a>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 lg:col-span-5">
            <CardKicker>02 — Mobil</CardKicker>
            <CardTitle>Mobil Geliştirme</CardTitle>
            <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
              Native hissiyatlı, yayına hazır mobil ürünler.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {mobileSkills.map((skill, index) => (
                <SkillChip key={skill} name={skill} index={index} />
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 lg:col-span-5">
            <div className="pointer-events-none absolute inset-y-4 right-[-8%] hidden w-[52%] opacity-60 lg:block lg:w-[44%]">
              {showGraph ? <NetworkGraph /> : null}
            </div>
            <div className="relative max-w-[22rem] lg:max-w-[24rem]">
              <CardKicker>03 — Bulut</CardKicker>
              <CardTitle>Altyapı & Bulut</CardTitle>
              <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
                <Mark>AWS</Mark>, <Mark>GCP</Mark>, <Mark>Oracle</Mark> bulut
                sertifikaları ve <Mark>Node.js/REST API</Mark> tasarımları ile
                ölçeklenebilir çözümler.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {cloudSkills.map((skill, index) => (
                  <SkillChip key={skill} name={skill} index={index} />
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-6 lg:col-span-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <CardKicker>04 — Veri</CardKicker>
                <CardTitle>Veri Bilimi & ML</CardTitle>
                <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
                  Makine öğrenmesi konseptleri (
                  <Mark>Sınıflandırma</Mark>, <Mark>Regresyon</Mark>,{" "}
                  <Mark>Kümeleme</Mark>) ve <Mark>LLM</Mark> temelleri üzerine
                  çalışmalar yürütmektedir. <Mark>Veri ön işleme (Data Preprocessing)</Mark>{" "}
                  ve <Mark>Keşifçi Veri Analizi (EDA)</Mark> süreçlerinde aktif
                  olarak <Mark>Python</Mark>, <Mark>Pandas</Mark>,{" "}
                  <Mark>NumPy</Mark>, <Mark>Scikit-learn</Mark>,{" "}
                  <Mark>Matplotlib</Mark>, <Mark>Seaborn</Mark> ve{" "}
                  <Mark>Jupyter Notebook</Mark> kullanmaktadır.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 lg:max-w-md lg:justify-end">
                {dataSkills.map((skill, index) => (
                  <SkillChip key={skill} name={skill} index={index} />
                ))}
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}

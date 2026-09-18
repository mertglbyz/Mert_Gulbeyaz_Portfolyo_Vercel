"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { MeshGradient } from "@/components/MeshGradient";
import { useMounted } from "@/lib/use-mounted";

const ease = [0.22, 1, 0.36, 1] as const;

const stack = [
  "REACT NATIVE",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "EXPO",
  "EAS BUILD",
  "SUPABASE",
  "NODE.JS",
  "PYTHON",
  "PANDAS",
  "SCIKIT-LEARN",
  "SQL",
  "DOCKER",
  "ORACLE CLOUD",
  "GOOGLE CLOUD",
  "AWS",
];

function TechMarquee() {
  const mounted = useMounted();
  const copies = mounted ? [0, 1] : [0];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] overflow-hidden pb-16 opacity-20 grayscale sm:pb-24 sm:opacity-25"
      style={{
        maskImage:
          "linear-gradient(to top, transparent 6%, black 38%, black 78%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, transparent 6%, black 38%, black 78%, transparent 100%)",
      }}
    >
      <div
        className={
          mounted
            ? "hero-marquee-track flex w-max items-center"
            : "flex w-max items-center"
        }
      >
        {copies.map((copy) => (
          <div
            key={copy}
            className="flex items-center whitespace-nowrap font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {stack.map((item) => (
              <span key={`${copy}-${item}`} className="inline-flex items-center">
                <span>{item}</span>
                <span className="mx-6 md:mx-10">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollHint() {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();
  const live = mounted && !reduceMotion;

  return (
    <motion.div
      className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:bottom-10 sm:block"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, ease }}
    >
      <div
        className="flex h-11 w-7 items-start justify-center rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-md"
        aria-hidden
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-white/80"
          animate={live ? { y: [0, 14, 0], opacity: [1, 0.25, 1] } : undefined}
          transition={
            live
              ? { duration: 1.7, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        />
      </div>
      <span className="sr-only">Aşağı kaydır</span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex h-svh min-h-[100svh] flex-col overflow-hidden"
    >
      <MeshGradient />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-20 pb-20 text-center sm:px-8 sm:pb-28">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
          <motion.h1
            aria-label="Mert Gülbeyaz"
            className="font-sans text-5xl leading-[0.9] font-extrabold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            Mert
            <span className="block">Gülbeyaz</span>
          </motion.h1>

          <motion.p
            className="max-w-[18.5rem] text-[0.7rem] leading-relaxed tracking-[0.14em] text-zinc-400 uppercase sm:max-w-xl sm:text-sm sm:tracking-[0.2em] md:max-w-none md:text-[clamp(0.72rem,1.15vw,1rem)] md:whitespace-nowrap md:tracking-[0.18em] lg:tracking-[0.2em]"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease }}
          >
            Mobil Uygulama Geliştirici (React Native) | Yazılım Mühendisi
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease }}
          >
            <MagneticButton href="#projeler">Projelerimi İncele</MagneticButton>
          </motion.div>
        </div>
      </div>

      <TechMarquee />
      <ScrollHint />
    </section>
  );
}

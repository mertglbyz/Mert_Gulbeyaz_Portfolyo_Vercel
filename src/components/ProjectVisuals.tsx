"use client";

import { motion, useReducedMotion } from "framer-motion";

function PhoneFrame({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] border border-white/20 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-white/25" />
        <div className="absolute inset-x-3 top-8 bottom-3 overflow-hidden rounded-[1.15rem] bg-[#0b1c28]">
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-400/80 to-accent/40"
            animate={reduceMotion ? { height: "54%" } : { height: ["36%", "64%", "48%"] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay }}
          />
          <div className="absolute top-4 left-3 h-8 w-8 rounded-full bg-sky-200/30" />
          <div className="absolute top-5 left-12 h-2 w-16 rounded-full bg-white/20" />
          <div className="absolute top-9 left-12 h-1.5 w-10 rounded-full bg-white/10" />
        </div>
      </div>
    </motion.div>
  );
}

export function WaterVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-full min-h-0 bg-[#071018]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(91,140,255,0.28),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(56,189,248,0.16),transparent_50%)]" />

      {[0, 1, 2].map((ring) => (
        <motion.span
          key={ring}
          className="absolute top-[46%] left-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/20"
          animate={
            reduceMotion
              ? undefined
              : { scale: [0.62, 1.45], opacity: [0.4, 0] }
          }
          transition={{
            duration: 4.8,
            repeat: Infinity,
            delay: ring * 1.05,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-end justify-center gap-3 px-8 pb-8 pt-10 sm:gap-5">
        <PhoneFrame className="relative hidden h-[68%] w-[22%] -rotate-[8deg] sm:block" delay={0.2} />
        <PhoneFrame className="relative z-10 h-[82%] w-[38%] max-w-[180px] sm:w-[28%]" delay={0} />
        <PhoneFrame className="relative hidden h-[68%] w-[22%] rotate-[8deg] sm:block" delay={0.45} />
      </div>
    </div>
  );
}

export function TransitVisual() {
  const reduceMotion = useReducedMotion();
  const stops = [
    { x: 18, y: 62 },
    { x: 32, y: 48 },
    { x: 46, y: 54 },
    { x: 58, y: 34 },
    { x: 72, y: 40 },
    { x: 84, y: 24 },
  ];

  return (
    <div className="relative h-full min-h-0 bg-[#07140f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(45,212,191,0.22),transparent_52%),radial-gradient(ellipse_at_80%_90%,rgba(91,140,255,0.16),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <svg viewBox="0 0 100 70" className="absolute inset-0 h-full w-full p-6" aria-hidden>
        <motion.path
          d="M14 64 C 28 58, 34 50, 46 54 S 62 28, 86 22"
          fill="none"
          stroke="rgba(45,212,191,0.7)"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0.2 }}
          animate={reduceMotion ? undefined : { pathLength: [0.25, 1, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M10 30 C 26 26, 40 44, 58 36 S 78 18, 92 28"
          fill="none"
          stroke="rgba(91,140,255,0.55)"
          strokeWidth="1.1"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0.15 }}
          animate={reduceMotion ? undefined : { pathLength: [0.2, 1, 0.3] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
        />
        {stops.map((stop, index) => (
          <motion.circle
            key={`${stop.x}-${stop.y}`}
            cx={stop.x}
            cy={stop.y}
            r="1.7"
            fill={index % 2 === 0 ? "#5eead4" : "#8ab0ff"}
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.45, 1, 0.5], r: [1.4, 2.1, 1.4] }
            }
            transition={{
              duration: 2.6 + index * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function MlVisual() {
  const reduceMotion = useReducedMotion();
  const points = [
    { x: 18, y: 72 },
    { x: 28, y: 48 },
    { x: 40, y: 62 },
    { x: 52, y: 30 },
    { x: 64, y: 44 },
    { x: 76, y: 22 },
    { x: 84, y: 58 },
    { x: 32, y: 28 },
    { x: 58, y: 76 },
  ];

  return (
    <div className="relative h-full min-h-0 bg-[#0a0714]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(124,92,255,0.28),transparent_52%),radial-gradient(ellipse_at_20%_80%,rgba(91,140,255,0.14),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="absolute inset-6 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-[10px] tracking-[0.18em] text-white/45 uppercase">
            notebook.ipynb
          </span>
        </div>
        <svg viewBox="0 0 100 70" className="h-[calc(100%-42px)] w-full p-4" aria-hidden>
          {points.map((point, index) => (
            <motion.circle
              key={`${point.x}-${point.y}`}
              cx={point.x}
              cy={point.y}
              r="1.8"
              fill={index % 2 === 0 ? "#8ab0ff" : "#7c5cff"}
              animate={
                reduceMotion
                  ? undefined
                  : { cy: [point.y, point.y - 4, point.y], opacity: [0.45, 1, 0.55] }
              }
              transition={{
                duration: 2.8 + index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <motion.path
            d="M16 68 C 30 50, 48 58, 62 32 S 86 24, 90 18"
            stroke="rgba(138,176,255,0.45)"
            strokeWidth="0.7"
            fill="none"
            initial={reduceMotion ? false : { pathLength: 0.2 }}
            animate={reduceMotion ? undefined : { pathLength: [0.2, 1, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
}

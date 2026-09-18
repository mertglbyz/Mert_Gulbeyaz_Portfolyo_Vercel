"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useMounted } from "@/lib/use-mounted";

const orbs = [
  {
    className:
      "absolute top-[-18%] left-[8%] h-[58vmin] w-[58vmin] rounded-full bg-accent/22 blur-[110px]",
    animate: { x: [0, 70, -30, 0], y: [0, 50, 90, 0], scale: [1, 1.18, 0.92, 1] },
    duration: 24,
  },
  {
    className:
      "absolute top-[6%] right-[-8%] h-[52vmin] w-[52vmin] rounded-full bg-accent-glow/18 blur-[120px]",
    animate: { x: [0, -90, 20, 0], y: [0, 70, -20, 0], scale: [1, 0.9, 1.12, 1] },
    duration: 28,
  },
  {
    className:
      "absolute bottom-[-16%] left-[28%] h-[48vmin] w-[48vmin] rounded-full bg-accent/12 blur-[100px]",
    animate: { x: [0, 50, -60, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] },
    duration: 26,
  },
];

export function MeshGradient() {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();
  const live = mounted && !reduceMotion;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 55% at 18% 18%, rgba(91, 140, 255, 0.18), transparent 58%),
            radial-gradient(ellipse 70% 50% at 82% 12%, rgba(124, 92, 255, 0.16), transparent 52%),
            radial-gradient(ellipse 55% 45% at 72% 78%, rgba(91, 140, 255, 0.08), transparent 55%),
            radial-gradient(ellipse 50% 40% at 12% 82%, rgba(124, 92, 255, 0.1), transparent 50%)
          `,
        }}
      />

      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={orb.className}
          animate={live ? orb.animate : undefined}
          transition={
            live
              ? {
                  duration: orb.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
      ))}

      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 42%, transparent 86%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,5,7,0.88)_100%)]" />
    </div>
  );
}

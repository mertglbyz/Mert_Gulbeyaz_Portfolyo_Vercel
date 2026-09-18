"use client";

import { useReducedMotion } from "framer-motion";

export function MeshGradient() {
  const reduceMotion = useReducedMotion();

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

      <div
        className={
          reduceMotion
            ? "absolute top-[-12%] left-[6%] h-[42vmin] w-[42vmin] rounded-full bg-accent/28 blur-3xl lg:h-[52vmin] lg:w-[52vmin]"
            : "mesh-orb absolute top-[-12%] left-[6%] h-[42vmin] w-[42vmin] rounded-full bg-accent/28 blur-3xl lg:h-[52vmin] lg:w-[52vmin]"
        }
      />
      <div
        className={
          reduceMotion
            ? "absolute top-[18%] right-[-12%] h-[36vmin] w-[36vmin] rounded-full bg-accent-glow/22 blur-3xl lg:h-[48vmin] lg:w-[48vmin]"
            : "mesh-orb mesh-orb-delayed absolute top-[18%] right-[-12%] h-[36vmin] w-[36vmin] rounded-full bg-accent-glow/22 blur-3xl lg:h-[48vmin] lg:w-[48vmin]"
        }
      />

      <div
        className="absolute inset-0 hidden opacity-70 md:block"
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

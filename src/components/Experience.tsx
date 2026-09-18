"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { experiences, type ExperienceItem } from "@/data/experiences";
import { cn } from "@/lib/cn";
import { useMounted } from "@/lib/use-mounted";

const ease = [0.22, 1, 0.36, 1] as const;

function HighlightedText({
  text,
  highlights,
}: {
  text: string;
  highlights: string[];
}) {
  if (highlights.length === 0) return text;

  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(${sorted.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  const parts = text.split(pattern);
  const marked = new Set(sorted);

  return parts.map((part, index) =>
    marked.has(part) ? (
      <span key={`${part}-${index}`} className="font-semibold text-accent-soft">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

function TimelineEntry({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const mounted = useMounted();
  const inView = useInView(ref, {
    once: true,
    amount: 0.25,
    margin: "0px 0px -12% 0px",
  });
  const visible = mounted && inView;

  return (
    <li
      ref={ref}
      className="relative grid grid-cols-[1rem_1fr] gap-x-5 sm:grid-cols-[9.5rem_1.25rem_minmax(0,1fr)] sm:gap-x-6"
    >
      <time
        className={cn(
          "hidden pt-8 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase transition-colors duration-500 sm:block",
          visible && "text-accent-soft",
        )}
      >
        {item.period}
      </time>

      <div className="relative flex justify-center">
        <span
          aria-hidden
          className={cn(
            "relative z-10 mt-8 h-3 w-3 rounded-full border border-accent bg-background transition-[box-shadow] duration-500",
            visible && "shadow-[0_0_18px_rgba(91,140,255,0.7)]",
          )}
        />
      </div>

      <article className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-[border-color,background-color,box-shadow,opacity,transform] duration-500 hover:border-accent/40 hover:bg-accent/[0.08] hover:shadow-[0_0_55px_-12px_rgba(91,140,255,0.55)] sm:mb-10 sm:p-7">
        <time className="font-mono text-[11px] tracking-[0.16em] text-accent/80 uppercase sm:hidden">
          {item.period}
        </time>
        <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase sm:mt-0">
          0{index + 1} — {item.org}
        </p>
        <h3 className="font-display mt-3 text-xl leading-snug text-foreground sm:text-2xl">
          {item.role}
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-8">
          <HighlightedText text={item.detail} highlights={item.highlights} />
        </p>
      </article>
    </li>
  );
}

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section
      id="deneyim"
      className="relative scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] tracking-[0.32em] text-accent uppercase">
            İş Deneyimleri
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            Zaman çizelgesi
          </h2>
        </motion.div>

        <div ref={trackRef} className="relative">
          <div
            aria-hidden
            className="absolute top-8 bottom-8 left-2 w-px -translate-x-1/2 bg-white/10 sm:left-[calc(9.5rem+1.5rem+0.625rem)]"
          >
            <motion.div
              className="h-full origin-top bg-gradient-to-b from-accent via-accent to-accent-glow"
              style={{ scaleY: !mounted || reduceMotion ? 1 : lineScale }}
            />
          </div>

          <ol className="relative">
            {experiences.map((item, index) => (
              <TimelineEntry
                key={`${item.period}-${item.org}`}
                item={item}
                index={index}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

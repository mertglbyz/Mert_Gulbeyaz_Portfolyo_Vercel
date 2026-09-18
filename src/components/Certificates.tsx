"use client";

import { useMounted } from "@/lib/use-mounted";

const certificates = [
  "Google Cloud Infrastructure",
  "AWS Cloud Computing",
  "Oracle Database SQL",
  "Google Gen AI & LLMs",
  "LinkedIn Data Science",
];

function MarqueeRow() {
  const mounted = useMounted();
  const copies = mounted ? [0, 1] : [0];

  return (
    <div
      className={
        mounted
          ? "marquee-track flex w-max items-center"
          : "flex w-max items-center"
      }
    >
      {copies.map((copy) => (
        <div
          key={copy}
          className="flex items-center whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {certificates.map((item) => (
            <span key={`${copy}-${item}`} className="inline-flex items-center">
              <span>{item}</span>
              <span className="mx-6 text-accent sm:mx-10" aria-hidden>
                •
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Certificates() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="mb-8 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] tracking-[0.32em] text-accent uppercase">
            Yetkinlik
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            Sertifikalar
          </h2>
        </div>
      </div>

      <div className="marquee-paused relative overflow-hidden border-y border-white/10 py-6 sm:py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
        <MarqueeRow />
      </div>
    </section>
  );
}

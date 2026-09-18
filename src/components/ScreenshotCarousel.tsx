"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/cn";
import { useMounted } from "@/lib/use-mounted";

function ArrowButton({
  direction,
  onClick,
  label,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white text-black shadow-lg",
        className,
      )}
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
        <path
          d={direction === "prev" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function ScreenshotCarousel({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  const mounted = useMounted();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    duration: 22,
  });
  const [index, setIndex] = useState(0);
  const total = images.length;
  const visibleImages = mounted ? images : images.slice(0, 1);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-[#071018]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(91,140,255,0.22),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(56,189,248,0.12),transparent_50%)]" />

      <div
        ref={mounted ? emblaRef : undefined}
        className="relative min-h-0 flex-1 overflow-hidden"
      >
        <div className="flex h-full">
          {visibleImages.map((src, imageIndex) => (
            <div
              key={src}
              className="relative min-w-0 flex-[0_0_100%] px-4 py-3 sm:px-16 sm:py-8"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <Image
                  src={src}
                  alt={`${altPrefix} ${imageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  quality={70}
                  priority={imageIndex === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-center gap-4 px-4 py-3 sm:pointer-events-none sm:absolute sm:inset-x-0 sm:top-1/2 sm:justify-between sm:px-3 sm:py-0 sm:-translate-y-1/2">
        <ArrowButton
          direction="prev"
          label="Önceki ekran görüntüsü"
          onClick={prev}
          className="sm:pointer-events-auto"
        />
        <span className="min-w-14 text-center font-mono text-[12px] tracking-[0.18em] text-white/90 uppercase sm:hidden">
          {index + 1}/{total}
        </span>
        <ArrowButton
          direction="next"
          label="Sonraki ekran görüntüsü"
          onClick={next}
          className="sm:pointer-events-auto"
        />
      </div>

      <span className="pointer-events-none absolute right-4 bottom-4 z-20 hidden rounded-full border border-white/10 bg-black/70 px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-white/80 uppercase sm:inline-flex">
        {index + 1}/{total}
      </span>
    </div>
  );
}

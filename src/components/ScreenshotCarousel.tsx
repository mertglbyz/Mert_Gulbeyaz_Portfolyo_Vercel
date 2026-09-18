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
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-[border-color,background-color,transform] duration-300 hover:scale-105 hover:border-accent/50 hover:bg-white/15 sm:h-11 sm:w-11",
        direction === "prev" ? "left-2 sm:left-3" : "right-2 sm:right-3",
      )}
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
        <path
          d={direction === "prev" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.5"
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

  return (
    <div className="relative h-full min-h-0 bg-[#071018]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(91,140,255,0.22),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(56,189,248,0.12),transparent_50%)]" />

      <div
        ref={mounted ? emblaRef : undefined}
        className="relative h-full overflow-hidden"
      >
        <div className="flex h-full">
          {visibleImages.map((src, imageIndex) => (
            <div
              key={src}
              className="relative min-w-0 flex-[0_0_100%] px-8 py-4 sm:px-16 sm:py-8"
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

      {mounted ? (
        <>
          <ArrowButton
            direction="prev"
            label="Önceki ekran görüntüsü"
            onClick={() => emblaApi?.scrollPrev()}
          />
          <ArrowButton
            direction="next"
            label="Sonraki ekran görüntüsü"
            onClick={() => emblaApi?.scrollNext()}
          />
        </>
      ) : null}

      <span className="pointer-events-none absolute right-4 bottom-4 z-20 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-white/80 uppercase backdrop-blur-md">
        {index + 1}/{total}
      </span>
    </div>
  );
}

import { scrollOffsetFor } from "@/lib/nav";

type LenisLike = {
  scroll?: number;
  resize?: () => void;
  scrollTo: (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      duration?: number;
      force?: boolean;
      immediate?: boolean;
      onComplete?: () => void;
    },
  ) => void;
} | null | undefined;

function canUseLenis(lenis?: LenisLike) {
  if (!lenis || typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
}

function targetY(el: HTMLElement, href: string, currentScroll: number) {
  return Math.max(
    0,
    el.getBoundingClientRect().top + currentScroll + scrollOffsetFor(href),
  );
}

export function scrollToHash(href: string, lenis?: LenisLike) {
  if (typeof window === "undefined") return;
  if (!href.startsWith("#") || href.length < 2) return;

  const id = decodeURIComponent(href.slice(1));
  const el = document.getElementById(id);
  if (!el) return;

  const offset = scrollOffsetFor(href);
  const useLenis = canUseLenis(lenis);
  const current = useLenis && typeof lenis?.scroll === "number"
    ? lenis.scroll
    : window.scrollY;
  const y = targetY(el, href, current);

  window.history.replaceState(null, "", href);
  window.dispatchEvent(new Event("hashchange"));

  if (!useLenis || !lenis) {
    window.scrollTo({ top: y, behavior: "smooth" });
    window.setTimeout(() => {
      const leftover = el.getBoundingClientRect().top + offset;
      if (Math.abs(leftover) <= 8) return;
      window.scrollTo({
        top: Math.max(0, leftover + window.scrollY),
        behavior: "auto",
      });
    }, 400);
    return;
  }

  lenis.resize?.();

  const settle = () => {
    lenis.resize?.();
    const remaining = el.getBoundingClientRect().top + offset;
    if (Math.abs(remaining) <= 4) return;
    const corrected = Math.max(0, remaining + window.scrollY);
    lenis.scrollTo(corrected, { immediate: true, force: true });
    requestAnimationFrame(() => {
      const leftover = el.getBoundingClientRect().top + offset;
      if (Math.abs(leftover) <= 4) return;
      window.scrollTo({
        top: Math.max(0, leftover + window.scrollY),
        behavior: "auto",
      });
    });
  };

  lenis.scrollTo(y, {
    duration: 1.2,
    force: true,
    onComplete: settle,
  });
}

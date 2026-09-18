"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";
import {
  isReloadNavigation,
  readSavedScrollY,
  RELOAD_HASH_KEY,
  writeSavedScrollY,
} from "@/lib/scroll-restore";
import { scrollToHash } from "@/lib/scroll-to";
import { useMediaQuery } from "@/lib/use-media-query";

function RestoreScroll() {
  const lenis = useLenis();
  const canPersist = useRef(false);
  const lastPersist = useRef(0);
  const restoredLenis = useRef(false);
  const handledHash = useRef(false);

  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  useLenis((instance) => {
    if (!canPersist.current) return;
    const now = performance.now();
    if (now - lastPersist.current < 80) return;
    lastPersist.current = now;
    writeSavedScrollY(instance.scroll);
  });

  useEffect(() => {
    const persist = () => {
      if (!canPersist.current) return;
      writeSavedScrollY(lenis?.scroll ?? window.scrollY);
    };
    window.addEventListener("pagehide", persist);
    window.addEventListener("beforeunload", persist);
    return () => {
      window.removeEventListener("pagehide", persist);
      window.removeEventListener("beforeunload", persist);
    };
  }, [lenis]);

  useEffect(() => {
    const saved = readSavedScrollY();
    const reload = isReloadNavigation();

    const restoreHashOnly = () => {
      try {
        const hash = sessionStorage.getItem(RELOAD_HASH_KEY);
        if (hash) {
          history.replaceState(null, "", hash);
          sessionStorage.removeItem(RELOAD_HASH_KEY);
        }
      } catch {
        // ignore
      }
    };

    const allowPersist = () => {
      canPersist.current = true;
    };

    if (reload && saved != null) {
      window.scrollTo({ top: saved, behavior: "auto" });
      if (lenis && !restoredLenis.current) {
        restoredLenis.current = true;
        lenis.resize?.();
        lenis.scrollTo(saved, { immediate: true, force: true });
        restoreHashOnly();
        allowPersist();
      }
      const fallback = window.setTimeout(() => {
        restoreHashOnly();
        allowPersist();
      }, 400);
      return () => window.clearTimeout(fallback);
    }

    if (!reload && window.location.hash && !handledHash.current) {
      const timer = window.setTimeout(() => {
        if (handledHash.current) return;
        handledHash.current = true;
        scrollToHash(window.location.hash, lenis);
        allowPersist();
      }, 80);
      return () => window.clearTimeout(timer);
    }

    if (reload && window.location.hash && !handledHash.current && saved == null) {
      const timer = window.setTimeout(() => {
        if (handledHash.current) return;
        handledHash.current = true;
        scrollToHash(window.location.hash, lenis);
        allowPersist();
      }, 80);
      return () => window.clearTimeout(timer);
    }

    allowPersist();
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const enableLenis = useMediaQuery("(pointer: fine) and (min-width: 1024px)");

  if (!enableLenis) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.075,
        duration: 1.4,
        smoothWheel: true,
        syncTouch: false,
        anchors: false,
      }}
    >
      <RestoreScroll />
      {children}
    </ReactLenis>
  );
}

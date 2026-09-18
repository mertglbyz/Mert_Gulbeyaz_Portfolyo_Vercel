"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { AmbientLight } from "@/components/AmbientLight";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { useMounted } from "@/lib/use-mounted";

export function Providers({ children }: { children: ReactNode }) {
  const mounted = useMounted();

  return (
    <MotionConfig isStatic={!mounted}>
      <SmoothScroll>
        <AmbientLight />
        <Navbar />
        <div className="relative z-10">{children}</div>
      </SmoothScroll>
    </MotionConfig>
  );
}

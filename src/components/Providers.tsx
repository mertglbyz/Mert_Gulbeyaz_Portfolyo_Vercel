"use client";

import type { ReactNode } from "react";
import { AmbientLight } from "@/components/AmbientLight";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <AmbientLight />
      <Navbar />
      <div className="relative z-10">{children}</div>
    </SmoothScroll>
  );
}

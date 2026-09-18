"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/cn";
import { scrollToHash } from "@/lib/scroll-to";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
};

export function MagneticButton({
  href,
  children,
  className,
  wrapperClassName,
}: MagneticButtonProps) {
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();
  const external = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <div className={cn("inline-flex", wrapperClassName)}>
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 420, damping: 26 }}
        onClick={(event) => {
          if (external || !href.startsWith("#")) return;
          event.preventDefault();
          scrollToHash(href, lenis);
        }}
        className={cn(
          "group inline-flex origin-center items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-[11px] tracking-[0.28em] text-white uppercase backdrop-blur-md transition-colors duration-300 hover:bg-white/10 sm:text-[12px]",
          className,
        )}
      >
        {children}
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:bg-white/10">
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 8h8M8 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.a>
    </div>
  );
}

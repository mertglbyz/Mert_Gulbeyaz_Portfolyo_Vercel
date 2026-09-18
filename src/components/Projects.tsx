"use client";

import { useRef, type ComponentProps, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MlVisual, TransitVisual, WaterVisual } from "@/components/ProjectVisuals";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { StoreBadges } from "@/components/StoreBadges";
import { featuredProjects, type FeaturedProject } from "@/data/projects";
import { useMounted } from "@/lib/use-mounted";

const ease = [0.22, 1, 0.36, 1] as const;

function ClientMotion({
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof motion.div>, "children"> & {
  children: ReactNode;
}) {
  const mounted = useMounted();

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}

const visualGlow: Record<FeaturedProject["visual"], string> = {
  water: "radial-gradient(ellipse at 18% 0%, rgba(56,189,248,0.16), transparent 50%)",
  transit: "radial-gradient(ellipse at 18% 0%, rgba(45,212,191,0.16), transparent 50%)",
  ml: "radial-gradient(ellipse at 80% 0%, rgba(124,92,255,0.18), transparent 52%)",
};

function GitHubButton({ href, label }: { href: string; label: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pt-2">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 420, damping: 26 }}
        className="group inline-flex origin-center items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[11px] tracking-[0.26em] text-foreground uppercase backdrop-blur-md transition-colors duration-300 hover:border-accent/70 hover:bg-accent/10"
      >
        {label}
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 transition-transform duration-300 group-hover:rotate-45">
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden>
            <path
              d="M4 12 12 4M6 4h6v6"
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

function ProjectMedia({ project }: { project: FeaturedProject }) {
  return (
    <div className="relative h-full min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-[#08080c] shadow-lg">
      {project.screenshots && project.screenshots.length > 0 ? (
        <ScreenshotCarousel images={project.screenshots} altPrefix={project.name} />
      ) : project.coverImage ? (
        <Image
          src={project.coverImage}
          alt={`${project.name} ekran görüntüsü`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
      ) : project.visual === "water" ? (
        <WaterVisual />
      ) : project.visual === "transit" ? (
        <TransitVisual />
      ) : (
        <MlVisual />
      )}
    </div>
  );
}

function ProjectSlide({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 0.88],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    [1, reduceMotion ? 1 : 0.5],
  );
  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 70],
  );

  return (
    <article
      ref={ref}
      style={{ zIndex: index + 1 }}
      className="sticky top-0 h-svh overflow-hidden bg-background"
    >
      <ClientMotion
        style={{ scale, opacity }}
        className="relative flex h-full origin-top flex-col"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: visualGlow[project.visual] }}
        />

        <div className="relative mx-auto grid h-full w-full max-w-6xl grid-rows-[32vh_auto] gap-5 px-5 pt-20 pb-5 sm:grid-rows-[38vh_auto] sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:grid-rows-none lg:items-center lg:gap-12 lg:pt-20 lg:pb-10">
          <ClientMotion
            style={{ y: visualY }}
            className="relative min-h-0 lg:h-[68vh]"
          >
            <p className="font-display pointer-events-none absolute -top-5 left-2 z-10 text-6xl leading-none text-white/12 sm:text-8xl lg:text-9xl">
              {project.index}
            </p>
            <div className="relative h-full">
              <ProjectMedia project={project} />
            </div>
          </ClientMotion>

          <ClientMotion
            className="relative z-10 flex min-h-0 flex-col justify-center"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-[11px] tracking-[0.32em] text-accent uppercase">
              Öne Çıkan Projeler
            </p>
            <h3 className="font-display mt-2 max-w-xl text-[1.7rem] leading-tight tracking-tight text-foreground sm:mt-4 sm:text-5xl">
              {project.name}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] tracking-[0.16em] text-muted-foreground uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base sm:leading-relaxed">
              {project.description}
            </p>
            {project.stores ? (
              <StoreBadges
                appStore={project.stores.appStore}
                playStore={project.stores.playStore}
              />
            ) : project.href && project.cta ? (
              <GitHubButton href={project.href} label={project.cta} />
            ) : null}
          </ClientMotion>
        </div>
      </ClientMotion>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projeler" className="relative">
      {featuredProjects.map((project, index) => (
        <ProjectSlide
          key={project.index}
          project={project}
          index={index}
        />
      ))}
    </section>
  );
}

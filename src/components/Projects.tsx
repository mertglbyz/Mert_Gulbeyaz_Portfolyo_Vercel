"use client";

import Image from "next/image";
import { MlVisual, TransitVisual, WaterVisual } from "@/components/ProjectVisuals";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { StoreBadges } from "@/components/StoreBadges";
import { featuredProjects, type FeaturedProject } from "@/data/projects";

const visualGlow: Record<FeaturedProject["visual"], string> = {
  water: "radial-gradient(ellipse at 18% 0%, rgba(56,189,248,0.16), transparent 50%)",
  transit: "radial-gradient(ellipse at 18% 0%, rgba(45,212,191,0.16), transparent 50%)",
  ml: "radial-gradient(ellipse at 80% 0%, rgba(124,92,255,0.18), transparent 52%)",
};

function GitHubButton({ href, label }: { href: string; label: string }) {
  return (
    <div className="pt-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex origin-center items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] tracking-[0.22em] text-foreground uppercase backdrop-blur-md transition-[transform,border-color,background-color] duration-300 hover:scale-105 hover:border-accent/70 hover:bg-accent/10 sm:px-7 sm:py-3.5 sm:tracking-[0.26em]"
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
      </a>
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
}: {
  project: FeaturedProject;
}) {
  return (
    <article className="relative overflow-hidden border-t border-white/10 bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: visualGlow[project.visual] }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-6 px-5 py-16 sm:gap-8 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12 lg:py-28">
        <div className="relative h-[72vw] min-h-[280px] max-h-[480px] lg:h-[620px] lg:max-h-none">
          <p className="font-display pointer-events-none absolute -top-4 left-1 z-10 text-5xl leading-none text-white/12 sm:-top-5 sm:left-2 sm:text-8xl lg:text-9xl">
            {project.index}
          </p>
          <div className="relative h-full">
            <ProjectMedia project={project} />
          </div>
        </div>

        <div className="relative z-10 flex min-h-0 flex-col justify-center">
          <p className="text-[11px] tracking-[0.32em] text-accent uppercase">
            Öne Çıkan Projeler
          </p>
          <h3 className="font-display mt-2 max-w-xl text-[1.55rem] leading-tight tracking-tight text-foreground sm:mt-4 sm:text-5xl">
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
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
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
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projeler" className="relative">
      {featuredProjects.map((project) => (
        <ProjectSlide key={project.index} project={project} />
      ))}
    </section>
  );
}

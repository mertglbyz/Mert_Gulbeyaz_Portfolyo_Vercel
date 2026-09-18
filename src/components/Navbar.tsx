"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/nav";
import { scrollToHash } from "@/lib/scroll-to";
import { useMounted } from "@/lib/use-mounted";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const lenis = useLenis();
  const mounted = useMounted();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    document.body.style.overflow = "";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash(href, lenis);
      });
    });
  };

  const menu = (
    <div
      id="mobile-nav"
      className="fixed inset-0 z-[100] flex flex-col bg-zinc-950 md:hidden"
    >
      <div className="h-16 shrink-0" />
      <nav className="flex flex-1 flex-col overflow-y-auto px-5 pb-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              goTo(link.href);
            }}
            className={cn(
              "flex min-h-16 items-center border-b border-white/10 font-display text-[2rem] leading-none tracking-tight",
              active === link.href ? "text-white" : "text-zinc-200",
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[110]">
        <div
          className={cn(
            "border-b transition-[background-color,border-color,box-shadow] duration-300",
            scrolled || open
              ? "border-white/10 bg-black"
              : "border-white/5 bg-black/90 md:border-transparent md:bg-transparent",
          )}
        >
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-6">
            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                goTo("#top");
              }}
              className="font-display text-[15px] tracking-[0.28em] text-foreground uppercase"
            >
              MG
              <span className="text-accent">.</span>
            </a>

            <ul className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      goTo(link.href);
                    }}
                    className={cn(
                      "relative text-[13px] tracking-[0.18em] uppercase transition-colors duration-300",
                      active === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-2 left-0 h-px w-full origin-left bg-accent transition-transform duration-300",
                        active === link.href ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
              className="relative z-[120] flex h-11 w-11 items-center justify-center md:hidden"
            >
              <span className="sr-only">Menü</span>
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    "absolute top-0 left-0 h-px w-full bg-foreground transition-transform duration-200",
                    open && "top-1/2 -translate-y-1/2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-foreground transition-opacity duration-200",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform duration-200",
                    open && "top-1/2 bottom-auto -translate-y-1/2 -rotate-45",
                  )}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      {mounted && open ? createPortal(menu, document.body) : null}
    </>
  );
}

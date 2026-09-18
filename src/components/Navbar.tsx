"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/nav";
import { scrollToHash } from "@/lib/scroll-to";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const lenis = useLenis();

  useLenis((instance) => {
    setScrolled(instance.scroll > 24);
  });

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
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open, lenis]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 left-0 z-50"
      >
        <div
          className={cn(
            "border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500",
            scrolled
              ? "border-white/10 bg-black/55 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-white/5 bg-black/40 backdrop-blur-md md:border-transparent md:bg-transparent md:backdrop-blur-0",
          )}
        >
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-6">
            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                scrollToHash("#top", lenis);
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
                      scrollToHash(link.href, lenis);
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
              onClick={() => setOpen((value) => !value)}
              className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
            >
              <span className="sr-only">Menü</span>
              <span className="flex h-4 w-5 flex-col justify-between">
                <motion.span
                  className="block h-px w-full bg-foreground"
                  animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-px w-full bg-foreground"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-px w-full bg-foreground"
                  animate={
                    open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </span>
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />
            <motion.ul
              className="relative flex h-full flex-col justify-center gap-8 px-8"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { y: 18, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      document.body.style.overflow = "";
                      lenis?.start();
                      closeMenu();
                      requestAnimationFrame(() => {
                        scrollToHash(link.href, lenis);
                      });
                    }}
                    className="font-display text-4xl tracking-tight text-foreground"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

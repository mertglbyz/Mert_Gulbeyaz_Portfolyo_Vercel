"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const buttonClass =
  "inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm tracking-wide text-foreground backdrop-blur-md transition-transform duration-300 hover:scale-105";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5 8 7 5.5L19 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3.5 9.2h3v11.3h-3V9.2Zm5.4 0h2.87v1.54h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.72h-3v-5.96c0-1.42-.02-3.24-1.98-3.24-1.98 0-2.28 1.54-2.28 3.14v6.06h-3V9.2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="iletisim"
      className="relative flex scroll-mt-24 flex-col items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

      <motion.div
        className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease }}
      >
        <h2 className="font-display max-w-2xl text-3xl leading-snug tracking-tight text-foreground sm:text-4xl">
          Yeni bir proje mi düşünüyorsunuz?
        </h2>

        <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
          <a href="mailto:gulbeyazm6@gmail.com" className={buttonClass}>
            <MailIcon />
            gulbeyazm6@gmail.com
          </a>
          <a
            href="https://github.com/mertglbyz"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mertglbyz"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

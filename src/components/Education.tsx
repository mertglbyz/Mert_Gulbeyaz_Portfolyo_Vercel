"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const schools = [
  {
    name: "Kütahya Dumlupınar Üniversitesi",
    program: "Yazılım Mühendisliği",
    gpa: "3.24 / 4.00",
  },
  {
    name: "Atatürk Üniversitesi",
    program: "E-Ticaret ve Pazarlama",
    gpa: "3.44 / 4.00",
  },
];

export function Education() {
  return (
    <section className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[11px] tracking-[0.32em] text-accent uppercase">
            Akademi
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            Eğitim
          </h2>
        </motion.div>

        <ul>
          {schools.map((school, index) => (
            <motion.li
              key={school.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
              className="group border-b border-white/10 py-7 transition-colors duration-500 hover:border-accent/40"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <p className="text-lg text-foreground transition-colors duration-500 group-hover:text-white sm:text-2xl">
                  {school.name}
                </p>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 text-sm sm:text-base">
                  <p className="tracking-wide text-muted-foreground">
                    {school.program}
                  </p>
                  <p className="font-mono tracking-[0.12em] text-accent-soft">
                    {school.gpa}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

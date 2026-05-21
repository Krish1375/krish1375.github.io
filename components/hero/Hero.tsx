"use client";

import { meta, heroDescription } from "@/lib/data";
import { motion, type Variants } from "framer-motion";
import { NeuralCanvas } from "./NeuralCanvas";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Hero() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <NeuralCanvas />

      <motion.div
        className="relative z-10 w-full px-6 md:px-10 pb-[52px] pt-32"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <span
            className="hidden sm:block w-9 h-[0.5px] bg-[var(--gold)]"
            aria-hidden
          />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
          <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.32em] uppercase text-[var(--gold)]">
            {meta.title}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-[family-name:var(--font-display)] font-light text-[clamp(42px,6vw,72px)] leading-[1.02] text-[var(--fg-primary)] max-w-3xl mb-4"
        >
          {meta.tagline}
          <br />
          <em className="italic text-[var(--gold)]">{meta.taglineEmphasis}</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.12em] text-[var(--fg-secondary)] mb-3"
        >
          {meta.subline}
        </motion.p>

        <motion.p
          variants={item}
          className="font-[family-name:var(--font-mono)] text-[9px] leading-[1.75] text-[var(--fg-muted)] max-w-xl mb-8"
        >
          {heroDescription}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={scrollToWork}
            className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.18em] uppercase px-5 py-3 bg-[var(--gold)] text-[#08090c] hover:bg-[var(--gold-bright)] transition-colors duration-200"
          >
            View Projects ↓
          </button>
          {meta.cvUrl && (
            <a
              href={meta.cvUrl}
              className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.18em] uppercase px-5 py-3 border text-[var(--fg-muted)] hover:text-[var(--gold)] transition-colors duration-200"
              style={{ border: "var(--border-hover)" }}
            >
              Download CV
            </a>
          )}
          {meta.available && (
            <span
              className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[9px] tracking-[0.18em] uppercase px-4 py-2"
              style={{
                color: "var(--green-live)",
                border: "0.5px solid rgba(80, 200, 130, 0.35)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--green-live)" }}
              />
              Open to roles
            </span>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

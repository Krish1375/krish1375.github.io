"use client";

import { editorialLines } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { motion, type Variants } from "framer-motion";

function highlightPhrase(text: string, phrase: string) {
  const idx = text.indexOf(phrase);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <em className="italic text-[var(--gold)]">{phrase}</em>
      {text.slice(idx + phrase.length)}
    </>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Editorial() {
  return (
    <section
      className="px-6 md:px-10"
      style={{ borderTop: "var(--border)" }}
    >
      <FadeUp className="pt-20 pb-4">
        <p className="section-label">Philosophy</p>
      </FadeUp>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px" }}
      >
        {editorialLines.map((line) => (
          <motion.li
            key={line.num}
            variants={row}
            className="group flex flex-wrap items-baseline gap-4 py-7"
            style={{ borderBottom: "var(--border)" }}
          >
            <span className="font-[family-name:var(--font-mono)] text-[9px] w-9 shrink-0 text-[rgba(200,170,100,0.3)]">
              [{line.num}]
            </span>
            <p className="font-[family-name:var(--font-display)] font-light text-[clamp(22px,3.5vw,38px)] leading-[1.15] text-[var(--fg-primary)] group-hover:text-[var(--gold)] transition-colors duration-200 flex-1 min-w-[200px]">
              {highlightPhrase(line.statement, line.emphasis)}
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] uppercase text-[var(--fg-muted)] ml-auto shrink-0">
              {line.tag}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

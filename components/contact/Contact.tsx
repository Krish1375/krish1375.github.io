"use client";

import { meta } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";

const links = [
  { label: "GitHub", href: meta.github },
  { label: "LinkedIn", href: meta.linkedin },
  ...(meta.scholar ? [{ label: "Scholar", href: meta.scholar }] : []),
  { label: "Email", href: `mailto:${meta.email}` },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-24 md:py-32 text-center"
      style={{ borderTop: "var(--border)" }}
    >
      <FadeUp>
        <p className="section-label">Let&apos;s work together</p>
        <h2 className="font-[family-name:var(--font-display)] font-light text-[clamp(36px,5vw,64px)] leading-[1.08] text-[var(--fg-primary)] max-w-2xl mx-auto mb-6">
          Have a problem that
          <br />
          <em className="italic text-[var(--gold)]">needs a model?</em>
        </h2>
        <p className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--fg-muted)] max-w-lg mx-auto mb-10">
          Open to full-time Data Science, AI Engineering, and ML Engineering roles.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.22em] uppercase text-[var(--fg-muted)] hover:text-[var(--gold)] hover:underline transition-colors duration-200"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

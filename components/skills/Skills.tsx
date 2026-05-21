"use client";

import { skills } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { SkillsRadar } from "./SkillsRadar";
import { useInView } from "framer-motion";
import { useRef } from "react";

function SkillBars({ inView }: { inView: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
      {skills.bars.map((bar) => (
        <div key={bar.name} className="flex items-center gap-4">
          <span className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--fg-secondary)] w-28 shrink-0">
            {bar.name}
          </span>
          <div
            className="flex-1 h-[2px]"
            style={{ background: "var(--gold-dim)" }}
          >
            <div
              className="h-full transition-[width] duration-[800ms] ease-out"
              style={{
                width: inView ? `${bar.level * 100}%` : "0%",
                background: "var(--gold)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section id="stack" ref={ref} className="page-container py-20 md:py-28">
      <FadeUp>
        <p className="section-label">Technical Stack</p>
        <h2 className="section-headline">
          Tools across the <em>full ML lifecycle</em>.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <SkillsRadar data={skills.radar} animate={inView} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(skills.categories).map(([cat, items]) => (
              <div key={cat}>
                <p className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.25em] uppercase text-[var(--gold)] mb-3">
                  {cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-[family-name:var(--font-mono)] text-[8px] px-2 py-1 text-[var(--fg-secondary)]"
                      style={{ border: "var(--border-hover)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <SkillBars inView={inView} />
      </FadeUp>
    </section>
  );
}

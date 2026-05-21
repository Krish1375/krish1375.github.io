"use client";

import { counters } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";

export function LiveCounters() {
  const cols = [
    {
      label: "Production models deployed",
      value: String(counters.productionModels),
      sub: counters.productionModelsNote,
    },
    {
      label: "Papers & preprints",
      value: String(counters.publications),
      sub: counters.publicationsNote,
    },
    {
      label: "Research citations",
      value: "23+",
      sub: "Peer-reviewed Springer publication",
    },
  ];

  return (
    <FadeUp>
      <section
        className="page-pad grid grid-cols-1 sm:grid-cols-3 gap-6 py-10"
        style={{
          borderTop: "var(--border)",
          borderBottom: "var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        {cols.map((col) => (
          <div
            key={col.label}
            className="px-2 sm:px-4 py-4"
            style={{ borderLeft: "var(--border)" }}
          >
            <p className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.25em] uppercase text-[var(--fg-muted)] mb-4">
              {col.label}
            </p>
            <p className="font-[family-name:var(--font-display)] font-semibold text-[32px] text-[var(--gold)] leading-none mb-3">
              {col.value}
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[8px] text-[var(--fg-muted)] leading-relaxed">
              {col.sub}
            </p>
          </div>
        ))}
      </section>
    </FadeUp>
  );
}

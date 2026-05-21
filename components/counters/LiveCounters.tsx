"use client";

import { counters } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { useEffect, useState } from "react";

export function LiveCounters() {
  const [liveCount, setLiveCount] = useState(0);
  const [stars, setStars] = useState(counters.githubStarsBase);
  const startRef = { current: Date.now() };

  useEffect(() => {
    startRef.current = Date.now();
    const id = setInterval(() => {
      const elapsed = (Date.now() - startRef.current) / 1000;
      setLiveCount(Math.floor(elapsed * counters.inferenceRatePerSecond));
      setStars(counters.githubStarsBase + Math.floor(elapsed * 0.0008));
    }, 80);
    return () => clearInterval(id);
  }, []);

  const cols = [
    {
      label: "Since you opened this page",
      value: liveCount.toLocaleString(),
      sub: counters.liveSubLabel,
      subGreen: true,
    },
    {
      label: "Production models deployed",
      value: String(counters.productionModels),
      sub: counters.productionModelsNote,
      subGreen: false,
    },
    {
      label: "Papers & preprints",
      value: String(counters.publications),
      sub: counters.publicationsNote,
      subGreen: false,
    },
    {
      label: "GitHub activity index",
      value: stars.toLocaleString(),
      sub: counters.starsSubLabel,
      subGreen: true,
    },
  ];

  return (
    <FadeUp>
      <section
        className="grid grid-cols-2 lg:grid-cols-4 gap-px"
        style={{
          background: "var(--gold-dim)",
          borderTop: "var(--border)",
          borderBottom: "var(--border)",
        }}
      >
        {cols.map((col) => (
          <div
            key={col.label}
            className="px-6 py-8 lg:px-10"
            style={{ background: "var(--bg-secondary)" }}
          >
            <p className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.25em] uppercase text-[var(--fg-muted)] mb-3">
              {col.label}
            </p>
            <p className="font-[family-name:var(--font-display)] font-semibold text-[32px] text-[var(--gold)] leading-none mb-2">
              {col.value}
            </p>
            <p
              className="font-[family-name:var(--font-mono)] text-[8px]"
              style={{
                color: col.subGreen ? "var(--green-live)" : "var(--fg-muted)",
              }}
            >
              {col.sub}
            </p>
          </div>
        ))}
      </section>
    </FadeUp>
  );
}

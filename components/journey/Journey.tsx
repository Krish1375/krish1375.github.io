"use client";

import { journey } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { useEffect, useState } from "react";

export function Journey() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentStep((s) => (s + 1) % journey.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const markerLeft = `${(currentStep / (journey.length - 1)) * 100}%`;

  return (
    <section id="research" className="px-6 md:px-10 py-20 md:py-28">
      <FadeUp>
        <p className="section-label">My Journey</p>
        <h2 className="section-headline">
          From Mumbai to <em>Madison</em> to production ML.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="relative mb-10 hidden md:block">
          <div
            className="h-[2px] w-full"
            style={{ background: "var(--gold-dim)" }}
          />
          <span
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-[var(--gold)] text-lg transition-[left] duration-[400ms] ease-in-out"
            style={{ left: markerLeft }}
            aria-hidden
          >
            ⬡
          </span>
        </div>

        <div
          className="hidden md:grid gap-px"
          style={{
            gridTemplateColumns: `repeat(${journey.length}, 1fr)`,
            background: "var(--gold-dim)",
          }}
        >
          {journey.map((step, i) => (
            <button
              key={step.num}
              type="button"
              onClick={() => setCurrentStep(i)}
              className="text-left p-6 transition-colors duration-200"
              style={{
                background:
                  i === currentStep ? "var(--bg-tertiary)" : "var(--bg-secondary)",
              }}
            >
              <p
                className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] mb-2"
                style={{
                  color: i === currentStep ? "var(--gold)" : "var(--fg-muted)",
                }}
              >
                {step.num}
              </p>
              <p
                className="font-[family-name:var(--font-display)] text-[17px] mb-2"
                style={{
                  color: i === currentStep ? "var(--gold)" : "var(--fg-primary)",
                }}
              >
                {step.title}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[9px] leading-[1.75] text-[var(--fg-muted)]">
                {step.desc}
              </p>
            </button>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-px" style={{ background: "var(--gold-dim)" }}>
          {journey.map((step, i) => (
            <button
              key={step.num}
              type="button"
              onClick={() => setCurrentStep(i)}
              className="text-left p-5 w-full"
              style={{
                background:
                  i === currentStep ? "var(--bg-tertiary)" : "var(--bg-secondary)",
              }}
            >
              <p className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--gold)] mb-1">
                {step.num} · {step.title}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--fg-muted)]">
                {step.desc}
              </p>
            </button>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

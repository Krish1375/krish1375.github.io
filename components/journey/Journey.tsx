"use client";

import { journey } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { useEffect, useState } from "react";

export function Journey() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentStep((s) => (s + 1) % journey.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="research" className="page-container py-20 md:py-28">
      <FadeUp>
        <p className="section-label">My Journey</p>
        <h2 className="section-headline">
          From Mumbai to <em>Madison</em> to production ML.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="relative max-w-3xl">
          {/* Vertical spine */}
          <div
            className="absolute left-[11px] top-3 bottom-3 w-[2px]"
            style={{ background: "var(--gold-dim)" }}
            aria-hidden
          />

          <ul className="flex flex-col gap-0">
            {journey.map((step, i) => {
              const isActive = i === currentStep;
              const isPast = i < currentStep;

              return (
                <li key={step.num} className="relative pl-12 pb-14 last:pb-0">
                  {/* Node */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(i)}
                    className="absolute left-0 top-1 z-10 flex h-6 w-6 items-center justify-center transition-all duration-300"
                    aria-label={`${step.title}`}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className="flex h-6 w-6 items-center justify-center text-[10px] transition-all duration-300"
                      style={{
                        color: isActive ? "var(--gold)" : "var(--fg-muted)",
                        transform: isActive ? "scale(1.15)" : "scale(1)",
                      }}
                    >
                      {isActive ? "⬡" : "○"}
                    </span>
                  </button>

                  {/* Connector pulse on active segment */}
                  {i < journey.length - 1 && (
                    <div
                      className="absolute left-[11px] top-8 w-[2px] transition-all duration-500"
                      style={{
                        height: "calc(100% - 8px)",
                        background: isPast || isActive
                          ? "rgba(200, 170, 100, 0.35)"
                          : "transparent",
                      }}
                      aria-hidden
                    />
                  )}

                  {/* Card */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(i)}
                    className="w-full text-left p-6 md:p-8 transition-all duration-300"
                    style={{
                      background: isActive
                        ? "var(--bg-tertiary)"
                        : "var(--bg-secondary)",
                      border: isActive
                        ? "var(--border-hover)"
                        : "var(--border)",
                      marginLeft: 0,
                    }}
                  >
                    <p
                      className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] mb-3"
                      style={{
                        color: isActive ? "var(--gold)" : "var(--fg-muted)",
                      }}
                    >
                      {step.num}
                    </p>
                    <p
                      className="font-[family-name:var(--font-display)] text-[20px] md:text-[22px] mb-4 leading-snug"
                      style={{
                        color: isActive ? "var(--gold)" : "var(--fg-primary)",
                      }}
                    >
                      {step.title}
                    </p>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] leading-[1.85] text-[var(--fg-muted)] max-w-xl">
                      {step.desc}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </FadeUp>
    </section>
  );
}

"use client";

import { terminal } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function lineColor(type: string) {
  switch (type) {
    case "prompt":
      return "var(--gold)";
    case "success":
      return "rgba(80,200,130,0.70)";
    case "error":
      return "var(--red-dim)";
    default:
      return "rgba(232,223,200,0.75)";
  }
}

export function Terminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setVisibleCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= terminal.lines.length) clearInterval(id);
    }, 150);
    return () => clearInterval(id);
  }, [inView]);

  const visible = terminal.lines.slice(0, visibleCount);
  const showCursor = inView && visibleCount >= terminal.lines.length;

  return (
    <section ref={ref} className="px-6 md:px-10 py-20 md:py-28">
      <FadeUp>
        <div
          className="max-w-3xl mx-auto"
          style={{
            background: "#06080d",
            border: "var(--border)",
          }}
        >
          <div
            className="flex items-center gap-1.5 px-4 py-3"
            style={{ borderBottom: "var(--border)" }}
          >
            <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#ff5f56" }} />
            <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#27c93f" }} />
          </div>
          <div className="p-5 font-[family-name:var(--font-mono)] text-[10px] leading-[1.85] min-h-[220px]">
            {visible.map((line, idx) => (
              <div key={idx} className="whitespace-pre-wrap break-all">
                {line.type === "prompt" && (
                  <>
                    <span style={{ color: "var(--gold)" }}>~/portfolio $ </span>
                    <span style={{ color: lineColor("output") }}>{line.text}</span>
                  </>
                )}
                {line.type !== "prompt" && (
                  <span style={{ color: lineColor(line.type) }}>{line.text}</span>
                )}
              </div>
            ))}
            {showCursor && (
              <span className="cursor-blink text-[var(--gold)]"> ▌</span>
            )}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

"use client";

import type { Project } from "@/lib/types";
import { motion } from "framer-motion";
import { useState } from "react";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const inner = (
    <motion.article
      variants={item}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="relative flex flex-col p-8 md:p-10 transition-all duration-300"
      style={{
        background: "var(--bg-secondary)",
        border: "var(--border)",
        boxShadow: expanded
          ? "0 24px 48px rgba(0,0,0,0.45)"
          : "0 0 0 transparent",
        zIndex: expanded ? 10 : 1,
      }}
    >
      <p className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.22em] uppercase text-[var(--gold)] mb-4">
        {project.tag}
      </p>
      <h3 className="font-[family-name:var(--font-display)] text-[22px] font-normal text-[var(--fg-primary)] mb-4 leading-snug">
        {project.title}
      </h3>
      <p className="font-[family-name:var(--font-mono)] text-[10px] leading-[1.85] text-[var(--fg-muted)] mb-6">
        {project.desc}
      </p>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: expanded ? 280 : 0,
          opacity: expanded ? 1 : 0,
        }}
      >
        <div className="pt-6" style={{ borderTop: "var(--border)" }}>
          <div className="flex flex-wrap gap-8 mb-6">
            {project.metrics.map((m) => (
              <div key={m.key}>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[22px] text-[var(--gold)]">
                  {m.val}
                </p>
                <p className="font-[family-name:var(--font-mono)] text-[8px] text-[var(--fg-muted)] mt-1">
                  {m.key}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-[family-name:var(--font-mono)] text-[8px] px-3 py-1.5 text-[var(--gold)]"
                style={{ border: "var(--border-hover)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span
        className="absolute bottom-8 right-8 text-[var(--gold)] transition-opacity duration-200"
        style={{ opacity: expanded ? 1 : 0.35 }}
      >
        ↗
      </span>
    </motion.article>
  );

  if (project.link && project.link !== "#") {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

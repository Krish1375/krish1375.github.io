"use client";

import type { Project } from "@/lib/types";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <motion.article
      variants={item}
      className="group relative p-6 md:p-8 h-full flex flex-col transition-colors duration-200 hover:bg-[var(--bg-tertiary)]"
      style={{ background: "var(--bg-secondary)" }}
    >
      <p className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.22em] uppercase text-[var(--gold)] mb-3">
        {project.tag}
      </p>
      <h3 className="font-[family-name:var(--font-display)] text-[19px] font-normal text-[var(--fg-primary)] mb-3">
        {project.title}
      </h3>
      <p className="font-[family-name:var(--font-mono)] text-[9px] leading-[1.75] text-[var(--fg-muted)] mb-4">
        {project.desc}
      </p>

      <div
        className="overflow-hidden transition-[max-height] duration-[350ms] ease-in-out max-h-0 group-hover:max-h-[200px]"
      >
        <div className="pt-4" style={{ borderTop: "var(--border)" }}>
          <div className="flex flex-wrap gap-6 mb-4">
            {project.metrics.map((m) => (
              <div key={m.key}>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[22px] text-[var(--gold)]">
                  {m.val}
                </p>
                <p className="font-[family-name:var(--font-mono)] text-[8px] text-[var(--fg-muted)]">
                  {m.key}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-[family-name:var(--font-mono)] text-[8px] px-2 py-1 text-[var(--gold)]"
                style={{ border: "var(--border-hover)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 text-[var(--gold)] transition-opacity duration-200">
        ↗
      </span>
    </motion.article>
  );

  if (project.link && project.link !== "#") {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

"use client";

import { projects } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function Projects() {
  const topRow = projects.slice(0, 3);
  const bottomRow = projects.slice(3);

  return (
    <section id="work" className="px-6 md:px-10 py-20 md:py-28">
      <FadeUp>
        <p className="section-label">Selected Work</p>
        <h2 className="section-headline">
          Systems that <em>ship</em> to production.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--gold-dim)" }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
        >
          {topRow.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>

        {bottomRow.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-px mt-px"
            style={{ background: "var(--gold-dim)" }}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
          >
            {bottomRow.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </motion.div>
        )}
      </FadeUp>
    </section>
  );
}

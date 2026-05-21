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
  return (
    <section id="work" className="page-container py-20 md:py-28">
      <FadeUp>
        <p className="section-label">Selected Work</p>
        <h2 className="section-headline">
          Systems that <em>ship</em> to production.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <motion.div
          className="flex flex-col gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </FadeUp>
    </section>
  );
}

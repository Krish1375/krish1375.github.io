"use client";

import type { RadarSkill } from "@/lib/types";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface SkillsRadarProps {
  data: RadarSkill[];
  animate: boolean;
}

export function SkillsRadar({ data, animate }: SkillsRadarProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const size = 280;
    const radius = size / 2 - 32;
    const center = size / 2;
    const levels = 4;
    const n = data.length;
    const angleSlice = (Math.PI * 2) / n;

    const svg = d3.select(el);
    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${size} ${size}`);

    const g = svg
      .append("g")
      .attr("transform", `translate(${center},${center})`);

    const pointAt = (i: number, r: number) => {
      const a = i * angleSlice - Math.PI / 2;
      return [r * Math.cos(a), r * Math.sin(a)] as [number, number];
    };

    const polyPoints = (scale: number) =>
      data
        .map((_, i) => pointAt(i, radius * data[i].value * scale))
        .map((p) => p.join(","))
        .join(" ");

    for (let level = 1; level <= levels; level++) {
      const r = (radius / levels) * level;
      const pts = data.map((_, i) => pointAt(i, r).join(",")).join(" ");
      g.append("polygon")
        .attr("points", pts)
        .attr("fill", "none")
        .attr("stroke", "rgba(200,170,100,0.08)")
        .attr("stroke-width", 0.5);
    }

    data.forEach((d, i) => {
      const end = pointAt(i, radius);
      g.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", end[0])
        .attr("y2", end[1])
        .attr("stroke", "rgba(200,170,100,0.08)")
        .attr("stroke-width", 0.5);

      const label = pointAt(i, radius + 18);
      g.append("text")
        .attr("x", label[0])
        .attr("y", label[1])
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "rgba(232,223,200,0.55)")
        .attr("font-size", "9px")
        .attr("font-family", "var(--font-mono)")
        .text(d.axis);
    });

    const poly = g
      .append("polygon")
      .attr("points", polyPoints(0))
      .attr("fill", "rgba(200,170,100,0.2)")
      .attr("stroke", "#c8aa64")
      .attr("stroke-width", 1);

    if (animate) {
      poly
        .transition()
        .duration(500)
        .ease(d3.easeCubicOut)
        .attr("points", polyPoints(1));
    } else {
      poly.attr("points", polyPoints(1));
    }
  }, [data, animate]);

  return (
    <svg
      ref={svgRef}
      className="w-full max-w-[320px] mx-auto hidden lg:block"
      aria-label="Skills radar chart"
    />
  );
}

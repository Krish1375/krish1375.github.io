import React, { useRef, useEffect, useState } from 'react';
import { portfolioData } from '../data';

const SCROLL_PER_CARD = 400;
const CARD_OFFSET = 16;
const SCALE_STEP = 0.04;

function easeInOut(t) { t = Math.min(1, Math.max(0, t)); return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
function lerp(a, b, t) { return a + (b - a) * Math.min(1, Math.max(0, t)); }

const Card = ({ data, style }) => (
  <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: "#f5f5f7", borderRadius: "20px", padding: "2.5rem", border: "1px solid rgba(0,0,0,0.06)", willChange: "transform, opacity", transformOrigin: "top center", ...style }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
      <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", margin: 0 }}>{data.title}</h3>
      {data.link && (
        <a href={data.link} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem", color: "#0071e3", fontWeight: 600, textDecoration: "none", flexShrink: 0 }}>
          View project ↗
        </a>
      )}
    </div>
    {data.metric && (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(52,199,89,0.1)", border: "1px solid rgba(52,199,89,0.25)", borderRadius: "100px", padding: "0.25rem 0.75rem", marginBottom: "0.75rem" }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34c759", flexShrink: 0 }} />
        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1a7a35" }}>{data.metric}</span>
      </div>
    )}
    <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "#3a3a3c", margin: "0 0 1.5rem" }}>{data.description}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
      {data.tech.map((skill, i) => (
        <span key={i} style={{ background: "rgba(0,113,227,0.1)", color: "#004a99", padding: "0.4rem 0.8rem", borderRadius: "10px", fontSize: "0.85rem", fontWeight: 600 }}>{skill}</span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projects = portfolioData.projects;
  const trackRef = useRef(null);
  const [cardStates, setCardStates] = useState(projects.map((_, i) => ({ ty: i === 0 ? "0%" : "100%", scale: 1, opacity: i === 0 ? 1 : 0 })));

  useEffect(() => {
    const total = projects.length;
    const onScroll = () => {
      if (!trackRef.current) return;
      const rawProgress = Math.max(0, -trackRef.current.getBoundingClientRect().top) / SCROLL_PER_CARD;
      const front = Math.min(Math.floor(rawProgress), total - 1);
      setCardStates(projects.map((_, i) => {
        const dist = front - i;
        if (dist < 0) {
          const t = easeInOut(rawProgress - (i - 1));
          return { ty: `${lerp(105, 0, t)}%`, scale: 1, opacity: t > 0.05 ? 1 : 0 };
        } else {
          return { ty: `${dist * CARD_OFFSET}px`, scale: Math.pow(1 - SCALE_STEP, dist), opacity: Math.max(0.35, 1 - dist * 0.18) };
        }
      }));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [projects.length]);

  return (
    <section id="projects" ref={trackRef} style={{ height: `calc(100vh + ${SCROLL_PER_CARD * projects.length}px)`, position: "relative", background: "#ffffff" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", padding: "10vh 10% 6vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ maxWidth: "960px", width: "100%", margin: "0 auto", flex: 1, display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "1rem" }}>Selected Work.</h2>
          <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
            {projects.map((proj, i) => (
              <Card key={i} data={proj} style={{ zIndex: i, transform: `translateY(${cardStates[i].ty}) scale(${cardStates[i].scale})`, opacity: cardStates[i].opacity, transition: "none" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
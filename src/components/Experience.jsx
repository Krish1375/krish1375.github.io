import React, { useRef, useEffect, useState } from 'react';
import { portfolioData } from '../data';

const SCROLL_PER_CARD = 400;
const CARD_OFFSET = 16;
const SCALE_STEP = 0.04;

function easeInOut(t) { t = Math.min(1, Math.max(0, t)); return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
function lerp(a, b, t) { return a + (b - a) * Math.min(1, Math.max(0, t)); }

const Card = ({ data, style }) => (
  <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: "#f5f5f7", borderRadius: "20px", padding: "2rem 2.2rem", border: "1px solid rgba(0,0,0,0.06)", willChange: "transform, opacity", transformOrigin: "top center", ...style }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.6rem" }}>
      <div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", margin: 0 }}>{data.company}</h3>
        <p style={{ fontSize: "1rem", color: "#0071e3", fontWeight: 500, margin: "0.2rem 0 0" }}>{data.role}</p>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <span style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, color: "#1d1d1f" }}>{data.date}</span>
        <span style={{ display: "block", fontSize: "0.8rem", color: "#86868b", marginTop: "0.15rem" }}>{data.location}</span>
      </div>
    </div>
    {data.highlight && (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(52,199,89,0.1)", border: "1px solid rgba(52,199,89,0.25)", borderRadius: "100px", padding: "0.25rem 0.75rem", marginBottom: "0.75rem" }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34c759", flexShrink: 0 }} />
        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1a7a35" }}>{data.highlight}</span>
      </div>
    )}
    <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#3a3a3c", margin: "0 0 1rem" }}>{data.description}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {data.tech.map((skill, i) => (
        <span key={i} style={{ background: "rgba(0,113,227,0.1)", color: "#004a99", padding: "0.3rem 0.75rem", borderRadius: "10px", fontSize: "0.78rem", fontWeight: 600 }}>{skill}</span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const experiences = portfolioData.experience;
  const trackRef = useRef(null);
  const [cardStates, setCardStates] = useState(experiences.map((_, i) => ({ ty: i === 0 ? "0%" : "100%", scale: 1, opacity: i === 0 ? 1 : 0 })));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const total = experiences.length;
    const onScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const rawProgress = Math.max(0, -rect.top) / SCROLL_PER_CARD;
      const front = Math.min(Math.floor(rawProgress), total - 1);
      setActiveIndex(front);
      setCardStates(experiences.map((_, i) => {
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
  }, [experiences.length]);

  return (
    <section id="experience" ref={trackRef} style={{ height: `calc(100vh + ${SCROLL_PER_CARD * experiences.length}px)`, position: "relative", background: "#ffffff" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", padding: "10vh 10% 6vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ maxWidth: "960px", width: "100%", margin: "0 auto", flex: 1, display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "0.5rem" }}>Experience.</h2>
          <p style={{ fontSize: "0.85rem", color: "#86868b", marginBottom: "1rem" }}>{activeIndex + 1} / {experiences.length}</p>
          <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
            {experiences.map((exp, i) => (
              <Card key={i} data={exp} style={{ zIndex: i, transform: `translateY(${cardStates[i].ty}) scale(${cardStates[i].scale})`, opacity: cardStates[i].opacity, transition: "none" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
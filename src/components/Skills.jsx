import React, { useRef, useEffect, useState } from 'react';
import { portfolioData } from '../data';
import SkillSphere from './SkillSphere';

const SCROLL_PER_CARD = 400; 
const CARD_OFFSET = 16;      
const SCALE_STEP = 0.04;     

function easeInOut(t) { t = Math.min(1, Math.max(0, t)); return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
function lerp(a, b, t) { return a + (b - a) * Math.min(1, Math.max(0, t)); }

const Card = ({ data, style }) => (
  <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: "#f5f5f7", borderRadius: "20px", padding: "2.5rem", border: "1px solid rgba(0,0,0,0.06)", willChange: "transform, opacity", transformOrigin: "top center", ...style }}>
    <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", margin: "0 0 1.5rem 0" }}>{data.category}</h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
      {data.items.map((skill, i) => (
        <span key={i} style={{ background: "rgba(0,113,227,0.1)", color: "#004a99", padding: "0.5rem 1rem", borderRadius: "12px", fontSize: "0.95rem", fontWeight: 600 }}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = portfolioData.skills;
  const trackRef = useRef(null);
  const [cardStates, setCardStates] = useState(skills.map((_, i) => ({ ty: i === 0 ? "0%" : "100%", scale: 1, opacity: i === 0 ? 1 : 0 })));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const total = skills.length;
    const onScroll = () => {
      if (!trackRef.current) return;
      const rawProgress = Math.max(0, -trackRef.current.getBoundingClientRect().top) / SCROLL_PER_CARD;
      const front = Math.min(Math.floor(rawProgress), total - 1);
      setActiveIndex(front);
      setCardStates(skills.map((_, i) => {
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
  }, [skills.length]);

  return (
    <section id="skills" ref={trackRef} style={{ height: `calc(100vh + ${SCROLL_PER_CARD * skills.length}px)`, position: "relative", background: "#ffffff" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", padding: "10vh 10% 6vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ maxWidth: "960px", width: "100%", margin: "0 auto", flex: 1, display: "flex", flexDirection: "column" }}>
          
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem", alignItems: "flex-start", flex: 1, minHeight: 0 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "1rem" }}>Technical Arsenal.</h2>
              <div style={{ display: "flex", gap: "6px", marginBottom: "1.5rem" }}>
                {skills.map((_, i) => (
                  <div key={i} style={{ width: activeIndex === i ? "18px" : "6px", height: "6px", borderRadius: "3px", background: activeIndex === i ? "#0071e3" : "#d2d2d7", transition: "width 0.3s ease, background 0.3s ease" }} />
                ))}
              </div>
              <SkillSphere />
            </div>


          <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
            {skills.map((group, i) => (
              <Card key={i} data={group} style={{ zIndex: i, transform: `translateY(${cardStates[i].ty}) scale(${cardStates[i].scale})`, opacity: cardStates[i].opacity, transition: "none" }} />
            ))}
          </div>
          
          <p style={{ fontSize: "0.85rem", color: "#86868b", marginTop: "1rem" }}>{activeIndex + 1} / {skills.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React, { useRef, useEffect, useState } from 'react';

const SCROLL_PER_CARD = 400; 
const CARD_OFFSET = 16;      
const SCALE_STEP = 0.04;     

const education = [
  {
    school: "University of Wisconsin-Madison",
    degree: "Master of Science in Data Science",
    date: "Aug 2024 - May 2026",
    details: "GPA: 3.85 / 4.00"
  },
  {
    school: "Sardar Patel Institute of Technology",
    degree: "Bachelor of Computer Engineering",
    date: "Aug 2020 - May 2024",
    details: "GPA: 8.92 / 10.00"
  }
];

// Smooth ease-in-out
function easeInOut(t) {
  t = Math.min(1, Math.max(0, t));
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerp(a, b, t) {
  return a + (b - a) * Math.min(1, Math.max(0, t));
}

const Card = ({ data, style }) => (
  <div
    style={{
      position: "absolute",
      top: 0, left: 0, right: 0,
      background: "#f5f5f7",
      borderRadius: "20px",
      padding: "2.5rem",
      border: "1px solid rgba(0,0,0,0.06)",
      willChange: "transform, opacity",
      transformOrigin: "top center",
      ...style,
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.8rem" }}>
      <div>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", margin: 0 }}>
          {data.school}
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#0071e3", fontWeight: 500, margin: "0.4rem 0 0" }}>
          {data.degree}
        </p>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <span style={{ display: "block", fontSize: "1rem", fontWeight: 500, color: "#1d1d1f" }}>{data.date}</span>
      </div>
    </div>

    <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "#3a3a3c", margin: "1rem 0 0" }}>
      {data.details}
    </p>
  </div>
);

const Education = () => {
  const trackRef = useRef(null);
  const [cardStates, setCardStates] = useState(
    education.map((_, i) => ({ ty: i === 0 ? "0%" : "100%", scale: 1, opacity: i === 0 ? 1 : 0 }))
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const total = education.length;

    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const rawProgress = scrolled / SCROLL_PER_CARD;
      const front = Math.min(Math.floor(rawProgress), total - 1);

      setActiveIndex(front);

      setCardStates(education.map((_, i) => {
        const distFromFront = front - i;

        if (distFromFront < 0) {
          // Card is incoming from below
          const t = easeInOut(rawProgress - (i - 1));
          return {
            ty: `${lerp(105, 0, t)}%`,
            scale: 1,
            opacity: t > 0.05 ? 1 : 0,
          };
        } else {
          // Card is at front or stacked behind
          const depth = distFromFront;
          return {
            ty: `${depth * CARD_OFFSET}px`,
            scale: Math.pow(1 - SCALE_STEP, depth),
            opacity: Math.max(0.35, 1 - depth * 0.18),
          };
        }
      }));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const total = education.length;
  // Track height = sticky section height + scroll travel
  const trackHeight = `calc(100vh + ${SCROLL_PER_CARD * total}px)`;

  return (
    <section
      id="education"
      ref={trackRef}
      style={{ height: trackHeight, position: "relative", background: "#ffffff" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          padding: "10vh 10% 6vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ maxWidth: "960px", width: "100%", margin: "0 auto", flex: 1, display: "flex", flexDirection: "column" }}>

          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "1rem", flexShrink: 0 }}>
            Education.
          </h2>

          {/* Progress dots */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "1.5rem", flexShrink: 0 }}>
            {education.map((_, i) => (
              <div
                key={i}
                style={{
                  width: activeIndex === i ? "18px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: activeIndex === i ? "#0071e3" : "#d2d2d7",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Card stack */}
          <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
            {education.map((item, i) => (
              <Card
                key={i}
                data={item}
                style={{
                  zIndex: i,
                  transform: `translateY(${cardStates[i].ty}) scale(${cardStates[i].scale})`,
                  opacity: cardStates[i].opacity,
                  transition: "none", 
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <p style={{ fontSize: "0.85rem", color: "#86868b", marginTop: "1rem", flexShrink: 0 }}>
            {activeIndex + 1} / {total}
          </p>

        </div>
      </div>
    </section>
  );
};

export default Education;
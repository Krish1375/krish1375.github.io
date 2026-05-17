import React, { useRef, useEffect, useState } from 'react';

const SCROLL_PER_CARD = 400; // px of scroll per card reveal
const CARD_OFFSET = 16;      // px vertical offset per stacked card
const SCALE_STEP = 0.04;     // scale reduction per stacked depth

const experiences = [
  {
    company: "Amazon Robotics",
    role: "Data Scientist Fall Intern",
    date: "Aug – Dec 2025",
    location: "Boston, MA",
    description: "Architected a LangChain agentic AI framework orchestrating deep agents and dynamic tool execution. Designed a multi-agent system with RAG to automate root-cause analysis, saving 15+ hours/week, and established LLMOps achieving a 40% reduction in model inaccuracies.",
    tech: ["LangChain", "Agentic AI", "RAG", "LLMOps"],
  },
  {
    company: "Amazon Robotics",
    role: "Data Scientist Summer Intern",
    date: "Jun – Aug 2025",
    location: "Boston, MA",
    description: "Orchestrated an event-driven data pipeline using Python and AWS (S3, Lambda, Athena) to process 1M+ daily data points. Delivered QuickSight observability dashboards to eliminate 3-hour manual reporting cycles and cut manual investigation by 50%.",
    tech: ["Python", "AWS (S3/Lambda/Athena)", "QuickSight", "Data Pipelines"],
  },
  {
    company: "Mahavir Travels",
    role: "Data Scientist",
    date: "Jan – Aug 2024",
    location: "Remote",
    description: "Engineered a recommendation engine using PySpark and MLlib, boosting click-through rates by 60%. Constructed a real-time ML inference pipeline via Kafka and Airflow to mitigate 95% of fraud.",
    tech: ["PySpark", "MLlib", "Kafka", "Airflow"],
  },
  {
    company: "Great Lakes Institute",
    role: "Deep Learning Intern",
    date: "Jun – Aug 2023",
    location: "Chennai, India",
    description: "Built a 30 FPS computer vision inference engine (OpenCV), cutting model latency by 40% and memory by 55%. Launched a predictive modeling pipeline for 300+ datasets, scaling batch inference to optimize product pairings.",
    tech: ["OpenCV", "Computer Vision", "Predictive Modeling"],
  },
  {
    company: "IIT Patna",
    role: "Deep Learning Intern",
    date: "Jan – Jun 2023",
    location: "Patna, India",
    description: "Optimized deep learning classification models (VGG19, MobileNet) via TensorFlow, achieving 99.68% inference accuracy. Implemented an MLOps feedback loop via a PostgreSQL data lake, continuously retraining models on radiologist feedback.",
    tech: ["TensorFlow", "VGG19", "MLOps", "PostgreSQL"],
  },
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
      padding: "2rem 2.2rem",
      border: "1px solid rgba(0,0,0,0.06)",
      willChange: "transform, opacity",
      transformOrigin: "top center",
      ...style,
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.8rem" }}>
      <div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", margin: 0 }}>
          {data.company}
        </h3>
        <p style={{ fontSize: "1rem", color: "#0071e3", fontWeight: 500, margin: "0.2rem 0 0" }}>
          {data.role}
        </p>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <span style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, color: "#1d1d1f" }}>{data.date}</span>
        <span style={{ display: "block", fontSize: "0.8rem", color: "#86868b", marginTop: "0.15rem" }}>{data.location}</span>
      </div>
    </div>

    <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#3a3a3c", margin: "0.5rem 0 1rem" }}>
      {data.description}
    </p>

    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {data.tech.map((skill, i) => (
        <span
          key={i}
          style={{
            background: "rgba(0,113,227,0.1)",
            color: "#004a99",
            padding: "0.3rem 0.75rem",
            borderRadius: "10px",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const trackRef = useRef(null);
  const [cardStates, setCardStates] = useState(
    experiences.map((_, i) => ({ ty: i === 0 ? "0%" : "100%", scale: 1, opacity: i === 0 ? 1 : 0 }))
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const total = experiences.length;

    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const rawProgress = scrolled / SCROLL_PER_CARD;
      const front = Math.min(Math.floor(rawProgress), total - 1);

      setActiveIndex(front);

      setCardStates(experiences.map((_, i) => {
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

  const total = experiences.length;
  // Track height = sticky section height + scroll travel
  const trackHeight = `calc(100vh + ${SCROLL_PER_CARD * total}px)`;

  return (
    <section
      id="experience"
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
            Experience.
          </h2>

          {/* Progress dots */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "1.5rem", flexShrink: 0 }}>
            {experiences.map((_, i) => (
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
            {experiences.map((exp, i) => (
              <Card
                key={i}
                data={exp}
                style={{
                  zIndex: i,
                  transform: `translateY(${cardStates[i].ty}) scale(${cardStates[i].scale})`,
                  opacity: cardStates[i].opacity,
                  transition: "none", // Scroll-driven — no CSS transition needed
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

export default Experience;
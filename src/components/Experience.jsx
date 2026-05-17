import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.05) setActiveIndex(-1);
    else if (latest < 0.22) setActiveIndex(0);
    else if (latest < 0.41) setActiveIndex(1);
    else if (latest < 0.60) setActiveIndex(2);
    else if (latest < 0.79) setActiveIndex(3);
    else setActiveIndex(4);
  });

  const experiences = [
    {
      company: "Amazon Robotics",
      role: "Data Scientist Fall Intern",
      date: "Aug 2025 - Dec 2025",
      location: "Boston, MA",
      description: "Architected a LangChain agentic AI framework orchestrating deep agents and dynamic tool execution. Designed a multi-agent system with RAG to automate root-cause analysis, saving 15+ hours/week, and established LLMOps achieving a 40% reduction in model inaccuracies.",
      tech: ["LangChain", "Agentic AI", "RAG", "LLMOps"]
    },
    {
      company: "Amazon Robotics",
      role: "Data Scientist Summer Intern",
      date: "Jun 2025 - Aug 2025",
      location: "Boston, MA",
      description: "Orchestrated an event-driven data pipeline using Python and AWS (S3, Lambda, Athena) to process 1M+ daily data points. Delivered QuickSight observability dashboards to eliminate 3-hour manual reporting cycles and cut manual investigation by 50%.",
      tech: ["Python", "AWS (S3/Lambda/Athena)", "QuickSight", "Data Pipelines"]
    },
    {
      company: "Mahavir Travels",
      role: "Data Scientist",
      date: "Jan 2024 - Aug 2024",
      location: "Remote",
      description: "Engineered a recommendation engine using PySpark and MLlib, boosting click-through rates by 60%. Constructed a real-time ML inference pipeline via Kafka and Airflow to mitigate 95% of fraud.",
      tech: ["PySpark", "MLlib", "Kafka", "Airflow"]
    },
    {
      company: "Great Lakes Institute",
      role: "Deep Learning Intern",
      date: "Jun 2023 - Aug 2023",
      location: "Chennai, India",
      description: "Built a 30 FPS computer vision inference engine (OpenCV), cutting model latency by 40% and memory by 55%. Launched a predictive modeling pipeline for 300+ datasets, scaling batch inference to optimize product pairings.",
      tech: ["OpenCV", "Computer Vision", "Predictive Modeling"]
    },
    {
      company: "IIT Patna",
      role: "Deep Learning Intern",
      date: "Jan 2023 - Jun 2023",
      location: "Patna, India",
      description: "Optimized deep learning classification models (VGG19, MobileNet) via TensorFlow, achieving 99.68% inference accuracy. Implemented an MLOps feedback loop via a PostgreSQL data lake, continuously retraining models on radiologist feedback.",
      tech: ["TensorFlow", "VGG19", "MLOps", "PostgreSQL"]
    }
  ];

  return (
    <section id="experience" ref={containerRef} style={{ height: "400vh", position: "relative", background: "#ffffff" }}>
      <div style={{
        position: "sticky",
        top: 0,
        minHeight: "100vh", // Allows it to flex properly
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Pushes content to the top instead of centering
        padding: "12vh 10% 5vh", // Generous top padding to clear the header, bottom padding so Patna doesn't hit the floor
      }}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "4rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: "2rem", textAlign: "left", maxWidth: "1000px", margin: "0 auto 2rem auto", width: "100%" }}
        >
          Experience.
        </motion.h2>

        <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
          {experiences.map((exp, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div 
                key={index} 
                animate={{
                  backgroundColor: isActive ? "#f5f5f7" : "rgba(255, 255, 255, 0)",
                  borderRadius: isActive ? "24px" : "0px",
                  padding: isActive ? "1.5rem 2rem" : "1rem 1rem", // Slightly tightened padding to ensure everything fits on screen
                  boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.04)" : "0 0px 0px rgba(0,0,0,0)",
                  scale: isActive ? 1.02 : 1 
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ 
                  position: "relative",
                  borderBottom: (isActive || index === experiences.length - 1) ? "1px solid transparent" : "1px solid #e5e5ea", 
                  margin: isActive ? "0.5rem 0" : "0",
                  transformOrigin: "center left"
                }}
              >
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                  <h3 style={{ 
                    fontSize: "1.4rem", 
                    color: isActive ? "#0071e3" : "#a1a1a6", 
                    transition: "color 0.4s ease",
                    margin: 0
                  }}>
                    <span style={{ fontWeight: 600 }}>{exp.company}</span> 
                    <span style={{ 
                      fontWeight: 400, 
                      color: isActive ? "#1d1d1f" : "#a1a1a6", 
                      transition: "color 0.4s ease" 
                    }}> — {exp.role}</span>
                  </h3>
                  <span style={{ 
                    fontSize: "1.05rem", 
                    color: isActive ? "#1d1d1f" : "#a1a1a6", 
                    transition: "color 0.4s ease",
                    fontWeight: 500
                  }}>
                    {exp.date}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "1rem" },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 }
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        style={{ fontSize: "1.05rem", color: "#333336", lineHeight: "1.6", maxWidth: "850px" }} // Darker text color here!
                      >
                        {exp.description}
                      </motion.p>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                      >
                        {exp.tech.map((skill, i) => (
                          <span key={i} style={{
                            color: "#0071e3", // Blue text
                            fontSize: "0.95rem",
                            fontWeight: "600",
                          }}>
                            {skill}{i < exp.tech.length - 1 ? " •" : ""}
                          </span>
                        ))}
                      </motion.div>

                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        style={{ marginTop: "1rem", fontSize: "0.95rem", fontWeight: "600", color: "#1d1d1f" }}
                      >
                        Location: <span style={{ fontWeight: 400, color: "#333336" }}>{exp.location}</span>
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
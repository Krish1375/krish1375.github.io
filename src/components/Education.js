import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Education = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.1) setActiveIndex(-1);
    else if (latest < 0.55) setActiveIndex(0);
    else setActiveIndex(1);
  });

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

  return (
    <section id="education" ref={containerRef} style={{ height: "200vh", position: "relative", background: "#ffffff" }}>
      <div style={{ position: "sticky", top: 0, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "12vh 10% 5vh" }}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "4rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: "2rem", textAlign: "left", maxWidth: "1000px", margin: "0 auto 2rem auto", width: "100%" }}
        >
          Education.
        </motion.h2>

        <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
          {education.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div 
                key={index} 
                animate={{
                  backgroundColor: isActive ? "#f5f5f7" : "rgba(255, 255, 255, 0)",
                  borderRadius: isActive ? "24px" : "0px",
                  padding: isActive ? "1.5rem 2rem" : "1rem 1rem",
                  boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.04)" : "0 0px 0px rgba(0,0,0,0)",
                  scale: isActive ? 1.02 : 1 
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ 
                  position: "relative", borderBottom: (isActive || index === education.length - 1) ? "1px solid transparent" : "1px solid #e5e5ea", 
                  margin: isActive ? "0.5rem 0" : "0", transformOrigin: "center left"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                  <h3 style={{ fontSize: "1.4rem", color: isActive ? "#0071e3" : "#a1a1a6", transition: "color 0.4s ease", margin: 0, fontWeight: 600 }}>
                    {item.school}
                  </h3>
                  <span style={{ fontSize: "1.05rem", color: isActive ? "#1d1d1f" : "#a1a1a6", transition: "color 0.4s ease", fontWeight: 500 }}>
                    {item.date}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial="collapsed" animate="open" exit="collapsed"
                      variants={{ open: { opacity: 1, height: "auto", marginTop: "1rem" }, collapsed: { opacity: 0, height: 0, marginTop: 0 } }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.3 }} style={{ fontSize: "1.1rem", color: "#333336", fontWeight: "600" }}>
                        {item.degree}
                      </motion.p>
                      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }} style={{ fontSize: "1.05rem", color: "#86868b", marginTop: "0.5rem" }}>
                        {item.details}
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

export default Education;
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 }
  }
};

const Journey = () => {
  const story = portfolioData.story;

  return (
    <section id="journey" style={{ padding: "8vh 10% 12vh", background: "#ffffff" }}>
      <div style={{ maxWidth: "800px", width: "100%", margin: "0 auto" }}>
        
        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "4rem", textAlign: "center" }}
        >
          My Journey.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem", position: "relative" }}>
          {/* Vertical subtle line */}
          <div style={{ position: "absolute", left: "24px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, rgba(0,113,227,0.5), rgba(0,113,227,0.05))", zIndex: 0 }} />

          {story.map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-150px" }}
              variants={fadeUpVariant}
              style={{ position: "relative", zIndex: 1, paddingLeft: "5rem" }}
            >
              {/* Dot indicator */}
              <div style={{ position: "absolute", left: "16px", top: "6px", width: "18px", height: "18px", borderRadius: "50%", background: "#ffffff", border: "4px solid #0071e3", boxShadow: "0 0 0 4px rgba(0,113,227,0.1)" }} />
              
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0071e3", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                {item.year}
              </p>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                {item.label}
              </h3>
              <p style={{ fontSize: "1.15rem", color: "#555557", lineHeight: "1.6" }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journey;

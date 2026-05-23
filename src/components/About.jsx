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

const About = () => {
  const { heading, paragraphs, stats } = portfolioData.about;

  return (
    <section id="about" style={{ padding: "12vh 10% 8vh", background: "#ffffff", display: "flex", flexDirection: "column" }}>
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>

        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "3rem" }}
        >
          About.
        </motion.h2>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          style={{ backgroundColor: "#f5f5f7", borderRadius: "28px", padding: "4rem", boxShadow: "0 20px 40px rgba(0,0,0,0.03)", marginBottom: "3rem" }}
        >
          <motion.h3 variants={fadeUpVariant} style={{ fontSize: "2rem", color: "#0071e3", margin: "0 0 2rem 0", fontWeight: 600, letterSpacing: "-0.02em" }}>
            {heading}
          </motion.h3>
          {paragraphs.map((para, idx) => (
            <motion.p key={idx} variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "#333336", lineHeight: "1.7", marginBottom: "1.5rem", fontWeight: 400 }}>
              {para}
            </motion.p>
          ))}
        </motion.div>

        {stats && (
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} style={{ backgroundColor: "#f5f5f7", borderRadius: "24px", padding: "2rem", border: "1px solid rgba(0,0,0,0.04)" }}>
                <p style={{ fontSize: "2.5rem", fontWeight: 700, color: "#0071e3", letterSpacing: "-0.04em", margin: "0 0 0.5rem 0" }}>{stat.value}</p>
                <p style={{ fontSize: "0.95rem", color: "#86868b", lineHeight: "1.5", margin: 0, fontWeight: 500 }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default About;
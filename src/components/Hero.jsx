import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Hero = () => {
  const { name, title, subtitle, description, imagePath, badge } = portfolioData.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
  };

  const textVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeInOut" } }
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 10%", background: "#ffffff" }}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}>
        
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          <motion.h1 variants={textVariants} style={{ fontSize: "5rem", fontWeight: 800, letterSpacing: "-0.05em", color: "#1d1d1f", marginBottom: "1rem" }}>
            {name}
          </motion.h1>
          <motion.h2 variants={textVariants} style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: "1.5rem" }}>
            {title} <br/>
            <span style={{ background: "linear-gradient(90deg, #0071e3, #42a1f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>
              {subtitle}
            </span>
          </motion.h2>
          <motion.p variants={textVariants} style={{ fontSize: "1.2rem", color: "#86868b", lineHeight: "1.6", maxWidth: "600px", marginBottom: "1.5rem" }}>
            {description}
          </motion.p>
          {badge && (
            <motion.div variants={textVariants} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(0,113,227,0.08)", border: "1px solid rgba(0,113,227,0.2)", borderRadius: "100px", padding: "0.45rem 1rem" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#34c759", flexShrink: 0, boxShadow: "0 0 0 2px rgba(52,199,89,0.25)" }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#0071e3" }}>{badge}</span>
            </motion.div>
          )}
        </div>

        <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } } }} style={{ flex: "0 0 350px", display: "flex", justifyContent: "center" }}>
          <img src={imagePath} alt={name} style={{ width: "100%", maxWidth: "350px", aspectRatio: "1/1", objectFit: "cover", borderRadius: "50%", boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }} />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
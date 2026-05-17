import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const About = () => {
  const { heading, paragraphs, stats } = portfolioData.about;

  return (
    <section id="about" style={{ padding: "12vh 10% 5vh", background: "#ffffff", display: "flex", flexDirection: "column", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "2rem" }}>
          About.
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ backgroundColor: "#f5f5f7", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.8rem", color: "#0071e3", margin: "0 0 1.5rem 0", fontWeight: 600 }}>
            {heading}
          </h3>
          {paragraphs.map((para, idx) => (
            <p key={idx} style={{ fontSize: "1.15rem", color: "#333336", lineHeight: "1.7", marginBottom: "1rem" }}>
              {para}
            </p>
          ))}
        </motion.div>

        {stats && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.35 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ backgroundColor: "#f5f5f7", borderRadius: "18px", padding: "1.5rem 1.8rem", border: "1px solid rgba(0,0,0,0.05)" }}>
                <p style={{ fontSize: "2rem", fontWeight: 700, color: "#0071e3", letterSpacing: "-0.03em", margin: "0 0 0.4rem 0" }}>{stat.value}</p>
                <p style={{ fontSize: "0.85rem", color: "#86868b", lineHeight: "1.4", margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default About;
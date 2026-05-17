import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Publications = () => {
  return (
    <section id="publications" style={{ padding: "12vh 10% 5vh", background: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "flex-start", minHeight: "50vh" }}>
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "2rem", textAlign: "left" }}
        >
          Publications.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {portfolioData.publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ backgroundColor: "#f5f5f7", borderRadius: "24px", padding: "2.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1.4rem", color: "#0071e3", margin: 0, fontWeight: 600, lineHeight: "1.4", flex: 1 }}>
                  {pub.title}
                </h3>
                <div style={{ display: "flex", gap: "0.6rem", flexShrink: 0, flexWrap: "wrap" }}>
                  {pub.year && (
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#86868b", background: "rgba(0,0,0,0.05)", borderRadius: "8px", padding: "0.3rem 0.7rem" }}>{pub.year}</span>
                  )}
                  {pub.citations && (
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1a7a35", background: "rgba(52,199,89,0.1)", border: "1px solid rgba(52,199,89,0.25)", borderRadius: "8px", padding: "0.3rem 0.7rem" }}>{pub.citations} citations</span>
                  )}
                </div>
              </div>

              <p style={{ fontSize: "1.05rem", color: "#333336", margin: "0 0 1rem" }}>
                {pub.journal}
              </p>

              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#0071e3", textDecoration: "none", fontSize: "0.95rem", display: "inline-block", fontWeight: 600, transition: "opacity 0.2s ease" }}
                onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
                onMouseOut={(e) => e.currentTarget.style.opacity = 1}
              >
                DOI: {pub.doi} ↗
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publications;
import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  return (
    <section id="publications" style={{ padding: "12vh 10% 5vh", background: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "flex-start", minHeight: "50vh" }}>
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "4rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: "2rem", textAlign: "left" }}
        >
          Publications.
        </motion.h2>

        {/* Statically styled as an "active" Elevated Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            backgroundColor: "#f5f5f7",
            borderRadius: "24px",
            padding: "2rem 2.5rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.04)"
          }}
        >
          <h3 style={{ fontSize: "1.4rem", color: "#0071e3", margin: 0, fontWeight: 600, lineHeight: "1.4" }}>
            Computer-aided diagnosis for multi-class classification of brain tumors using CNN features via transfer-learning
          </h3>
          
          <p style={{ fontSize: "1.05rem", color: "#333336", marginTop: "1rem" }}>
            Published in Multimedia Tools and Applications, Springer Journal US.
          </p>
          
          <a 
            href="https://doi.org/10.1007/s11042-025-20751-z" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: "#0071e3", textDecoration: "none", fontSize: "0.95rem", display: "inline-block", marginTop: "1rem", fontWeight: "600" }}
          >
            DOI: 10.1007/s11042-025-20751-z ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Publications;
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: "12vh 10% 5vh", background: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "flex-start", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "4rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: "2rem", textAlign: "left" }}
        >
          About.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            backgroundColor: "#f5f5f7",
            borderRadius: "24px",
            padding: "3rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.04)"
          }}
        >
          <h3 style={{ fontSize: "1.8rem", color: "#0071e3", margin: "0 0 1rem 0", fontWeight: 600 }}>
            The intersection of analytics and intuition.
          </h3>
          <p style={{ fontSize: "1.2rem", color: "#333336", lineHeight: "1.6", fontWeight: "400" }}>
            Currently refining my expertise through a Master of Science in Data Science at the University of Wisconsin-Madison. I specialize in turning raw data into seamless, powerful applications using advanced machine learning, AI architectures, and cloud infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
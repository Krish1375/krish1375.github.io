import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section-container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 10%", background: "#ffffff" }}>
      
      <div style={{ display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}>
        
        {/* The Text Side */}
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ fontSize: "5rem", fontWeight: 800, letterSpacing: "-0.05em", color: "#1d1d1f", marginBottom: "1rem" }}
          >
            Krish Shah.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: "1.5rem" }}
          >
            Data Science. <br/>
            <span style={{ background: "linear-gradient(90deg, #0071e3, #42a1f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Engineered for Impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            style={{ fontSize: "1.2rem", color: "#86868b", lineHeight: "1.6", maxWidth: "600px" }}
          >
            Building the next generation of intelligent systems, from collaborative filtering engines to reinforcement learning environments.
          </motion.p>
        </div>

        {/* The Sleek Personal Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          style={{ flex: "0 0 350px", display: "flex", justifyContent: "center" }}
        >
          <img 
            src="/profile.jpeg" // Place your photo in the "public" folder and name it profile.jpg!
            alt="Krish Shah" 
            style={{
              width: "100%",
              maxWidth: "350px",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "50%", // Makes it a perfect circle
              boxShadow: "0 30px 60px rgba(0,0,0,0.08)" // Soft, premium shadow
            }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // 1. A slower, more deliberate stagger for a premium feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Slightly longer gap between elements appearing
        delayChildren: 0.2,   
      }
    }
  };

  // 2. Pure fade for the text. ZERO movement means ZERO rendering glitches.
  const textVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" }, // Adds a subtle blur before fading in
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeInOut" } 
    }
  };

  // 3. Keep a gentle physical animation for the image (browsers handle image scaling perfectly)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } // Custom buttery easing curve
    }
  };

  return (
    <section className="section-container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 10%", background: "#ffffff" }}>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}
      >
        
        {/* The Text Side */}
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          
          <motion.h1
            variants={textVariants}
            style={{ fontSize: "5rem", fontWeight: 800, letterSpacing: "-0.05em", color: "#1d1d1f", marginBottom: "1rem" }}
          >
            Krish Shah.
          </motion.h1>
          
          <motion.h2
            variants={textVariants}
            style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: "1.5rem" }}
          >
            Data Science. <br/>
            <span style={{ 
              background: "linear-gradient(90deg, #0071e3, #42a1f5)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              display: "inline-block" // Keeps the gradient stable
            }}>
              Engineered for Impact.
            </span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            style={{ fontSize: "1.2rem", color: "#86868b", lineHeight: "1.6", maxWidth: "600px" }}
          >
            Building the next generation of intelligent systems, from collaborative filtering engines to reinforcement learning environments.
          </motion.p>
        </div>

        {/* The Sleek Personal Photo */}
        <motion.div
          variants={imageVariants}
          style={{ flex: "0 0 350px", display: "flex", justifyContent: "center" }}
        >
          <img 
            src="/profile.jpeg" 
            alt="Profile" 
            style={{
              width: "100%",
              maxWidth: "350px",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "50%", 
              boxShadow: "0 30px 60px rgba(0,0,0,0.08)" 
            }}
          />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
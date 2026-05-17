import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    { label: "Email", value: "krishshah1375@gmail.com", link: "mailto:krishshah1375@gmail.com" },
    { label: "Phone", value: "(608) 598-7070", link: "tel:6085987070" },
    { label: "LinkedIn", value: "linkedin.com/in/krishshah10", link: "https://www.linkedin.com/in/krishshah10/" },
    { label: "GitHub", value: "github.com/Krish1375", link: "https://github.com/Krish1375" }
  ];

  return (
    <section id="contact" style={{ padding: "12vh 10% 15vh", background: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "flex-start", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          style={{ fontSize: "4rem", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.03em", marginBottom: "2rem", textAlign: "left" }}
        >
          Let's connect.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            backgroundColor: "#f5f5f7", 
            borderRadius: "24px", 
            padding: "4rem 3rem", 
            boxShadow: "0 20px 40px rgba(0,0,0,0.04)", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start" // Left-aligns the text for a cleaner list look
          }}
        >
          <h3 style={{ fontSize: "2rem", color: "#1d1d1f", margin: "0 0 1rem 0", fontWeight: 600 }}>
            Ready to build something impactful?
          </h3>
          <p style={{ fontSize: "1.2rem", color: "#333336", marginBottom: "3rem", maxWidth: "600px" }}>
            I am currently seeking Data Scientist, Applied AI, and Machine Learning opportunities.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
            {contactMethods.map((method, index) => (
              <div key={index} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <span style={{ 
                  fontSize: "0.95rem", 
                  fontWeight: 600, 
                  color: "#86868b", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em" 
                }}>
                  {method.label}
                </span>
                <a 
                  href={method.link}
                  target={method.label === "LinkedIn" || method.label === "GitHub" ? "_blank" : "_self"}
                  rel="noreferrer"
                  style={{ 
                    fontSize: "1.4rem", 
                    color: "#0071e3", 
                    textDecoration: "none", 
                    fontWeight: 500, 
                    transition: "color 0.2s ease" 
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#42a1f5"} // Soft glow on hover
                  onMouseOut={(e) => e.currentTarget.style.color = "#0071e3"}
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
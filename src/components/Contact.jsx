import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: "12vh 10% 15vh", background: "#ffffff", display: "flex", flexDirection: "column", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.04em", marginBottom: "2rem" }}>
          Get in touch.
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p style={{ fontSize: "1.2rem", color: "#333336", maxWidth: "600px", lineHeight: "1.6" }}>
            I just graduated and I'm actively looking for full-time roles in Data Science, AI Engineering, and ML. If you're hiring or just want to talk, I'll get back to you fast.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {portfolioData.contact.map((method, index) => (
              <div key={index} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {method.label}
                </span>
                <a
                  href={method.link}
                  target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : "_self"}
                  rel="noreferrer"
                  style={{ fontSize: "1.4rem", color: "#0071e3", textDecoration: "none", fontWeight: 500, transition: "color 0.2s ease" }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#42a1f5"}
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
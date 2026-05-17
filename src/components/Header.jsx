import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 54;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed', top: 0, width: '100%', height: '54px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.05)', zIndex: 1000,
      }}
    >
      <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {['about', 'experience', 'education', 'projects', 'publications', 'skills', 'contact'].map((item) => (
          <a key={item} href={`#${item}`} onClick={(e) => handleScroll(e, item)} 
             style={{ color: '#1d1d1f', fontSize: '0.85rem', fontWeight: 500, textTransform: 'capitalize' }}>
            {item}
          </a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
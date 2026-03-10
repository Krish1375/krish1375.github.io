import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '54px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    zIndex: 1000,
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#1d1d1f',
    fontSize: '0.85rem',
    fontWeight: 400,
    letterSpacing: '-0.01em',
    cursor: 'pointer'
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 54;
      const absoluteTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = absoluteTop - headerOffset;

      // Use 'instant' instead of 'smooth' to prevent framer-motion's
      // useScroll hook from fighting and overriding the scroll position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'instant'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={headerStyle}
    >
      <nav style={navStyle}>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} style={linkStyle}>About</a>
        <a href="#education" onClick={(e) => handleScroll(e, 'education')} style={linkStyle}>Education</a>
        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} style={linkStyle}>Experience</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} style={linkStyle}>Projects</a>
        <a href="#publications" onClick={(e) => handleScroll(e, 'publications')} style={linkStyle}>Publications</a>
        <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} style={linkStyle}>Skills</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} style={linkStyle}>Contact</a>
      </nav>
    </motion.header>
  );
};

export default Header;
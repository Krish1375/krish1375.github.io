import React from 'react';
import './Header.css';

const Header = () => {
  const navItems = ['About', 'Projects', 'Contact'];
  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">Krish Shah</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item} onClick={() => scrollToSection(item)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

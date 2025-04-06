import React from 'react';
import './Header.css';

const Header = () => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">Krish Shah</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

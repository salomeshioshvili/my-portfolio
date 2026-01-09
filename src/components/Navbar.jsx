import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-menu">
          <a 
            href="#home" 
            className={`nav-link ${activeItem === 'Home' ? 'active' : ''}`}
            onClick={() => handleNavClick('Home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeItem === 'About' ? 'active' : ''}`}
            onClick={() => handleNavClick('About')}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeItem === 'Projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('Projects')}
          >
            Projects
          </a>
          <a 
            href="#blog" 
            className={`nav-link ${activeItem === 'Blog' ? 'active' : ''}`}
            onClick={() => handleNavClick('Blog')}
          >
            Blog
          </a>
          <a 
            href="#more" 
            className={`nav-link ${activeItem === 'More' ? 'active' : ''}`}
            onClick={() => handleNavClick('More')}
          >
            More
          </a>
        </div>

        <div className="nav-icons">
          <button className="icon-btn" onClick={toggleMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
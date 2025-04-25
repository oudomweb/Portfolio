import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="contain">
        <div className="nav-brand">
          <a href="/">OuDoM</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Desktop Navigation */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact Me</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
          </li>
          <li>
            <a href="#profile" onClick={() => setIsOpen(false)}>Profile</a>
          </li>
          <li>
            <a href="#other" onClick={() => setIsOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#other" onClick={() => setIsOpen(false)}>Other</a>
          </li>
          <li className="login-mobile">
            <a href="#login" onClick={() => setIsOpen(false)}>Login</a>
          </li>
        </ul>
        
        {/* Desktop Login */}
        <ul className="pro-logo">
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
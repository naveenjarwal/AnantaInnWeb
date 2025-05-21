import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';
import MobileMenu from './MobileMenu';

const linkStyle = {
  color: '#19191a',
  marginRight: 60,
  textDecoration: 'none',
  paddingBottom: 4,
  fontWeight: 500,
  transition: 'border-bottom 0.2s'
};

const activeStyle = {
  borderBottom: '3px solid #b9935a', // Golden underline
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <header style={{
      background: '#fff',
      padding: 20,
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <Logo />
      <nav className="desktop-nav">
        <NavLink to="/" end style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Home</NavLink>
        <NavLink to="/about-us" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>About Us</NavLink>
        <NavLink to="/blog" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Blog</NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Contact</NavLink>
        <NavLink to="/room-details" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle, marginRight: 190 } : { ...linkStyle, marginRight: 190 }}>Room Details</NavLink>
      </nav>
      <button className="desktop-nav"
        onClick={() => navigate('/login')}
        style={{
          background: '#b9935a',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '10px 28px',
          fontWeight: 600,
          fontSize: 16,
          cursor: 'pointer',
          marginLeft: 20,
          letterSpacing: 1,
          boxShadow: '0 2px 8px #b9935a22',
          transition: 'background 0.2s, color 0.2s'
        }}
      >
        Login
      </button>
      <span className="hamburger"
       style={{
          color: '#000',
          border: 'none',
          padding: '10px 28px',
          fontWeight: 600,
          fontSize: 25,
          marginLeft: 20,         
        }}
      onClick={() => setMenuOpen(true)}>
&#9776;
</span>

    </header>
  
<MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
  </>
  );
};

export default Header;

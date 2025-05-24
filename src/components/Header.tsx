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

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  return (
    <div className='main-header' style={{ maxWidth:'100%'}}>
    {/* <header  style={{
     
      background: '#fff',
      padding: 20,
      color: '#fff',
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}> */}
      <Logo />
      <nav className="desktop-nav">
        <NavLink 
        to="/" end 
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          Home
        </NavLink>
        <NavLink 
        to="/about-us" 
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          About Us
        </NavLink>
        <NavLink 
        to="/blog" 
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          Blog
        </NavLink>
        <NavLink 
        to="/contact" 
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          Contact
        </NavLink>
        {userInfo.email === "nvnjarwal@gmail.com" ? 
                
        <NavLink 
        to="/all-booking" 
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
          All Booking
        </NavLink>
        :null}
        <NavLink 
        to="/room-details" 
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle, marginRight: 190 } : { ...linkStyle, marginRight: 190 }}>
          Room Details
        </NavLink>
      </nav>
    
      <span className="hamburger"
       style={{
          color: '#000',
          border: 'none',
          padding: '10px 28px',
          fontWeight: 600,
          fontSize: 25,
          marginLeft: 0,         
        }}
      onClick={() => setMenuOpen(true)}>
&#9776;
</span>
  
<MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
  </div>
  );
};

export default Header;

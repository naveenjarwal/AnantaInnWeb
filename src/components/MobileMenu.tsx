// src/components/MobileMenu.tsx

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './MobileMenu.css'; // Style as per your design
import './Header.css';
import Logo from './Logo';

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

const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay">
      <div>
        <div style={{ color: '#000', fontSize: 30 }}>{userInfo.name}</div>
        <button
          className="close-btn"
          style={{
            top: 5,
            fontSize: 30,

          }}
          onClick={onClose}>×</button>
      </div>
      {/* <div className="mobile-menu-content"> */}

      <div >
        <nav className='navigation-part' >
          <NavLink to="/" end className='navi-data'>Home</NavLink>
          <NavLink to="/about-us" className='navi-data'>About Us</NavLink>
          <NavLink to="/blog" className='navi-data'>Blog</NavLink>
          <NavLink to="/contact" className='navi-data'>Contact</NavLink>
          <NavLink to="/room-details" className='navi-data'>Room Details</NavLink>
          {userInfo.email?.trim().toLowerCase() === "nvnjarwal@gmail.com" ? 
          <NavLink to="/all-booking" className='navi-data'>All Bookings</NavLink>:null  
        }
        
        </nav>
      </div>
      {/* <div className="mobile-book-btn">
<button>Booking Now</button>
</div> */}
      <div className="mobile-footer">
        <p className='navi-data'>Phone: (+91) 9660969602</p>
        {/* <p className='navi-data'>Email: nvnjarwal@gmail.com</p> */}
      </div>
      {/* </div> */}
    </div>

  );

};

export default MobileMenu;

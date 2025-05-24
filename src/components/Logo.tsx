import React from 'react';
// import './Logo.css'

const Logo: React.FC = () => (
  <div  className='main-content'  style={{
    display: 'flex',
    alignItems: 'center',
    padding:20,
    gap: 0,
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: 25,
    letterSpacing: 1,
    color: '#1a365d' // Deep blue for main text
  }}>
    <span>
      <span style={{
       
        background: 'linear-gradient(90deg, #319795 0%, #63b3ed 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 900,
        letterSpacing: 2
      }}>Ananta</span>
      &nbsp;
      <span style={{
        color: '#319795',
        fontWeight: 700,
        letterSpacing: 1
      }}>Inn</span>
      &nbsp;
      <span style={{
        color: '#1a365d',
        fontWeight: 700,
        letterSpacing: 1
      }}>Hotel</span>
    </span>
  </div>
);

export default Logo;
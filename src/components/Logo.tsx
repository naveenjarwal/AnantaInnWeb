import React from 'react';

const Logo: React.FC = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: 30,
    letterSpacing: 1,
    color: '#1a365d' // Deep blue for main text
  }}>
    {/* Minimal blue lotus icon */}
    <span style={{ display: 'flex', alignItems: 'center', height: 44 }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="lotusBlue" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#63b3ed"/>
            <stop offset="1" stopColor="#319795"/>
          </linearGradient>
        </defs>
        {/* Center petal */}
        <path d="M20 8C23 15 27 21 20 32C13 21 17 15 20 8Z" fill="url(#lotusBlue)" />
        {/* Left petal */}
        <path d="M20 13C16 18 12 24 18 32C12 26 8 18 20 13Z" fill="#b2f5ea" opacity="0.7"/>
        {/* Right petal */}
        <path d="M20 13C24 18 28 24 22 32C28 26 32 18 20 13Z" fill="#bee3f8" opacity="0.7"/>
        {/* Small center accent */}
        <ellipse cx="20" cy="18" rx="2" ry="3.2" fill="#319795" opacity="0.8"/>
      </svg>
    </span>
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
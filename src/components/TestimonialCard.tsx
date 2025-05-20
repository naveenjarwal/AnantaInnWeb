import React from 'react';

type TestimonialCardProps = {
  author: string;
  text: string;
  image?: string; // guest image (optional)
};

const defaultImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=128&q=80"; // Replace with a Rajasthani/Jaipur avatar if you want

const TestimonialCard: React.FC<TestimonialCardProps> = ({ author, text, image }) => (
  <div
    style={{
      background: '#fff8f0',
      borderRadius: 16,
      border: '3px solid #d2a86a',
      padding: 24,
      margin: 16,
      boxShadow: '0 4px 16px rgba(210,168,106,0.08)',
      // maxWidth: 380,
      position: 'relative',
      fontFamily: "'Lora', serif"
    }}
  >
    {/* Decorative Elephant SVG (Jaipur/Rajasthan theme) */}
    <span style={{ position: 'absolute', top: -28, left: 24 }}>
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
        <ellipse cx="24" cy="28" rx="20" ry="4" fill="#f7e7ce" />
        <path d="M10 24 Q12 10 24 10 Q36 10 38 24" fill="#e2b36f" stroke="#b9935a" strokeWidth="2"/>
        <circle cx="24" cy="18" r="6" fill="#b9935a" />
        <rect x="20" y="22" width="8" height="6" rx="3" fill="#fff8f0" />
        <rect x="22" y="24" width="4" height="2" rx="1" fill="#b9935a" />
      </svg>
    </span>
    {/* Guest image */}
    <img
      src={image || defaultImage}
      alt={author}
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid #d2a86a',
        marginBottom: 12,
        marginTop: 12,
        boxShadow: '0 2px 8px #e2b36f33'
      }}
    />
    <p style={{ fontStyle: 'italic', color: '#7c4f13', margin: '12px 0 0 0', fontSize: 18 }}>
      "{text}"
    </p>
    <p style={{ textAlign: 'right', color: '#b9935a', marginTop: 18, fontWeight: 700, fontSize: 16 }}>
      — {author}
    </p>
  </div>
);

export default TestimonialCard;
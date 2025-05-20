import React from 'react';

type BlogCardProps = {
  title: string;
  date: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, date }) => (
  <div
    style={{
      background: '#fff8f0',
      border: '2.5px solid #d2a86a',
      borderRadius: 14,
      padding: 22,
      margin: 14,
      // minWidth: 260,
      // maxWidth: 340,
      boxShadow: '0 4px 16px rgba(210,168,106,0.08)',
      fontFamily: "'Lora', serif",
      position: 'relative'
    }}
  >
    {/* Decorative Camel SVG (Rajasthani theme) */}
    <span style={{ position: 'absolute', top: -22, left: 18 }}>
      <svg width="38" height="28" viewBox="0 0 38 28" fill="none">
        <ellipse cx="19" cy="25" rx="15" ry="3" fill="#f7e7ce" />
        <path d="M6 22 Q8 10 19 10 Q30 10 32 22" fill="#e2b36f" stroke="#b9935a" strokeWidth="2"/>
        <rect x="15" y="14" width="8" height="6" rx="3" fill="#fff8f0" />
        <rect x="17" y="18" width="4" height="2" rx="1" fill="#b9935a" />
        <circle cx="19" cy="16" r="3" fill="#b9935a" />
      </svg>
    </span>
    <div style={{ fontWeight: 700, color: '#7c4f13', fontSize: 20, marginBottom: 8, marginTop: 10 }}>
      {title}
    </div>
    <div style={{ color: '#b9935a', fontSize: 15 }}>{date}</div>
  </div>
);

export default BlogCard;
import React from 'react';
import { useLocation } from 'react-router-dom';

function RowCard1Screen() {
    const location = useLocation();
    const { title, description } = location.state || {};
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default RowCard1Screen;
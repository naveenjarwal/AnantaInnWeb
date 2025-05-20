import React from 'react';

type RoomCardProps = {
  title: string;
  price: string;
  image?: string;
};

const RoomCard: React.FC<RoomCardProps> = ({ title, price, image }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 10, width: 250 }}>
    <img
      src={image || '/assets/images/room-placeholder.jpg'}
      alt={title}
      style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8 }}
    />
    <h3 style={{ margin: '12px 0 4px 0' }}>{title}</h3>
    <p style={{ color: '#888' }}>${price} / night</p>
  </div>
);

export default RoomCard;
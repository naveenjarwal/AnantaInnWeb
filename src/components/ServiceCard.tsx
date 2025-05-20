import React from 'react';

type ServiceCardProps = {
  title: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title }) => (
  <div style={{ background: '#eee', borderRadius: 8, padding: 20, margin: 10, minWidth: 120, textAlign: 'center' }}>
    <span style={{ fontWeight: 'bold' }}>{title}</span>
  </div>
);

export default ServiceCard;
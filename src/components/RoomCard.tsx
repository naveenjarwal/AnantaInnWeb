// import React from 'react';

// type RoomCardProps = {
//   title: string;
//   price: string;
//   image?: string;
// };

// const RoomCard: React.FC<RoomCardProps> = ({ title, price, image }) => (
//   <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 10, width: 250 }}>
//     <img
//       src={image || '/assets/images/room-placeholder.jpg'}
//       alt={title}
//       style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8 }}
//     />
//     <h3 style={{ margin: '12px 0 4px 0' }}>{title}</h3>
//     <p style={{ color: '#888' }}>${price} / night</p>
//   </div>
// );

// export default RoomCard;


import React from 'react';
interface RoomDetailsProps {
 title: string;
 price: string;
 image: string;
 description: string;
 amenities: string[];
}
const RoomDetailsCard: React.FC<RoomDetailsProps> = ({ title, price, image, description, amenities }) => {
 return (
<div style={{
     border: '1px solid #ddd',
     borderRadius: 12,
     overflow: 'hidden',
     maxWidth: 350,
     margin: '16px auto',
     background: '#fff',
   }}>
<img src={image} alt={title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
<div style={{ padding: 16,color:'#000' }}>
<h3 style={{ marginBottom: 8, color:'#000' }}>{title}</h3>
<p style={{ color: '#666' }}>{description}</p>
<p style={{ fontWeight: 600, margin: '12px 0' }}>₹{price} / night</p>
<ul style={{ paddingLeft: 20, color: '#444' }}>
         {amenities.map((item, idx) => <li key={idx}>{item}</li>)}
</ul>
</div>
</div>
 );
};
export default RoomDetailsCard;
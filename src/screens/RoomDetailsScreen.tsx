import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomDetailsCard from '../components/RoomCard';


const rooms = [
  {
    title: 'Standard Room',
    baseOccupancy: 2,
    price: 1500,
    extraMattress: true,
    extraCost: 300,
    totalRooms: 13,
    image: '/assets/images/room-standard.jpg',
  },
  {
    title: 'Deluxe Room',
    baseOccupancy: 3,
    price: 1800,
    extraMattress: true,
    extraCost: 300,
    totalRooms: 3,
    image: '/assets/images/room-deluxe.jpg',
  },
  {
    title: 'Super Deluxe Room',
    baseOccupancy: 5,
    price: 2500,
    extraMattress: true,
    extraCost: 300,
    totalRooms: 2,
    image: '/assets/images/room-super-deluxe.jpg',
  },
];

const RoomDetailsScreen: React.FC = () => (
  <div style={{ width: '100vw', minHeight: '100vh', margin: '0 auto' }}>
    <Header />
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <section style={{ padding: '40px 20px', background: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 32, fontFamily: 'Lora, serif', color: '#000' }}>Our Rooms</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
          justifyContent: 'center',
        }}>
          {rooms.map((room, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                padding: 16,
                borderRadius: 10,
                width: 300,
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}
            >
              <img
                src={room.image}
                alt={room.title}
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
              <h3 style={{ fontSize: 20, marginBottom: 12, color: '#000' }}>{room.title}</h3>
              <p style={{ color: '#000' }}> <strong>Occupancy:</strong> {room.baseOccupancy} person(s)</p>
              <p style={{ color: '#000' }}><strong>Price:</strong> ₹{room.price} per night</p>
              {room.extraMattress && (
                <p style={{ color: '#000' }}><strong>Extra Mattress:</strong> ₹{room.extraCost} per person</p>
              )}
              <p style={{ color: '#000' }}><strong>Available Rooms:</strong> {room.totalRooms}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default RoomDetailsScreen;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoomDetailsScreen: React.FC = () => (
    <div style={{ width: '100vw', minHeight: '100vh', margin: '0 auto' }}>
    <Header />
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>Room Details</h1>
      <p>Room details content goes here.</p>
    </main>
    <Footer />
  </div>
);

export default RoomDetailsScreen;
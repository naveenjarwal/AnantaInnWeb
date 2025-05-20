import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsScreen: React.FC = () => (
  <div style={{ width: '100vw', minHeight: '100vh', margin: '0 auto' }}>
    <Header />
    <main style={{ width: '100vw', minHeight: '100vh', margin: '0 auto', padding: 20 }}>
      <h1>About Us</h1>
      <p>About us content goes here.</p>
    </main>
    <Footer />
  </div>
);

export default AboutUsScreen;
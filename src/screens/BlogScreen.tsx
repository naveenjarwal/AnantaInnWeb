import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogScreen: React.FC = () => (
   <div style={{ width: '100vw', minHeight: '100vh', margin: '0 auto' }}>
    <Header />
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>Blog</h1>
      <p>Blog content goes here.</p>
    </main>
    <Footer />
  </div>
);

export default BlogScreen;
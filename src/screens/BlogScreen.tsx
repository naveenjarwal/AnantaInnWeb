import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const blogPosts = [
  {
    title: 'Explore Hawa Mahal – The Palace of Winds',
    image: '/images/hawa-mahal.jpg',
    description: 'An iconic pink sandstone monument with 953 small windows designed for royal women to watch street festivities unseen.',
  },
  {
    title: 'Discover Nahargarh Fort',
    image: '/images/nahargarh-fort.jpg',
    description: 'Located on the Aravalli hills, this fort offers panoramic views of Jaipur, ideal for sunset photography and heritage lovers.',
  },
  {
    title: 'Jantar Mantar – An Astronomical Wonder',
    image: '/images/jantar-mantar.jpg',
    description: 'A UNESCO World Heritage site featuring large-scale astronomical instruments built in the 18th century.',
  },
  {
    title: 'Sodhani Sweets – A Taste of Jaipur',
    image: '/images/sodhani.jpg',
    description: 'Famous for its Ghewar and snacks, Sodhani Sweets is a must-visit for authentic Rajasthani flavors.',
  },
  {
    title: 'Tapri – The Urban Tea House',
    image: '/images/tapri.jpg',
    description: 'Popular among youngsters for its quirky vibe and variety of tea options served with a rooftop city view.',
  },
  {
    title: 'Statue Circle – An Evening Spot',
    image: '/images/statue-circle.jpg',
    description: 'Known for the statue of Maharaja Sawai Jai Singh II, this circle is lit beautifully in the evening and surrounded by food carts.',
  },
];



const BlogScreen: React.FC = () => (
  <div style={{ width: '100vw', minHeight: '100vh', margin: '0 auto' }}>
    <Header />
    <main style={{ width: '100vw', margin: '0 auto', padding: 0 }}>
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Nearby Attractions in Jaipur</h2>
        <div style={gridStyle}>
          {blogPosts.map((post, index) => (
            <div key={index} style={cardStyle}>
              <img src={post.image} alt={post.title} style={imageStyle} />
              <h3 style={titleStyle}>{post.title}</h3>
              <p style={titleStyle}>{post.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default BlogScreen;

const sectionStyle = {
  padding: '40px 20px',
  background: '#f9f9f9',
};
const titleStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  fontSize: '28px',
  color: '#333',
};
const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
};
const cardStyle = {
  width: '300px',
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  padding: '15px',
  textAlign: 'center',
};
const imageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '10px',
  color: 'black'
};
import React, { useState } from 'react';
import Slider from 'react-slick';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';
import BookingSection from '../components/BookingSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeScreen.css';
import Logo from '../components/Logo';

const heroImages = [
  '/assets/images/hero-1.jpg',
  '/assets/images/hero-2.jpg',
  '/assets/images/hero-3.jpg',
  '/assets/images/hero-3.jpg',
   '/assets/images/hero-3.jpg',
];


const slogans = [
 "Welcome to Ananta Inn — Where Comfortable Stays, Delicious Dining, and Breathtaking Rooftop Moments Come Together for an Unforgettable Experience.",
  "At Ananta Inn, we blend warm hospitality, cozy rooms, and rooftop views into a peaceful retreat in the heart of Jaipur.",
  "Discover the perfect blend of luxury, comfort, and culinary delight — all under one roof at Ananta Inn.",
  "More than just a stay — Ananta Inn offers you a place to relax, dine, and enjoy city views from our exclusive rooftop.",
  "Your gateway to comfort, taste, and tranquility — welcome to Ananta Inn, where every guest feels like family."
];

const HomeScreen: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    className: "custom-dot",
    beforeChange: (_oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', margin: '0 auto' }}>
      <Header />
     <main
 style={{
   margin: '0 auto',
   padding: '20px clamp(10px, 5vw, 40px)',
   boxSizing: 'border-box',
 }}
>
        {/* Hero Slider Section with fixed content */} 
        <section style={{ marginBottom: 40, position: 'relative', minHeight: 780 }}>
          <Slider {...sliderSettings}>
            {heroImages.map((img, idx) => (
              <div key={idx}>
                <div
                  style={{
                    background: `url('${img}') center/cover no-repeat`,
                    minHeight: 780,
                    borderRadius: 12,
                    width: '100%',
                  }}
                />
              </div>
            ))}
          </Slider>
          {/* Fixed hero text */}
          <div
          className='hero-content'
            style={{
              position: 'absolute',
              left: '25%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              width: '100%',
              maxWidth: 600,
              background: 'rgba(0,0,0,0.35)',
              borderRadius: 12,
              padding: '40px 20px 20px 20px',
              boxSizing: 'border-box',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h1 style={{
              textShadow: '2px 2px 8px #000',
              fontSize: 'clamp(2rem, 6vw, 48px)',
              marginBottom: 16,
              marginTop: 0
            }}>
              <Logo/>
            </h1>
            <p style={{
              textShadow: '1px 1px 6px #000',
              fontSize: 'clamp(1rem, 3vw, 20px)',
              marginBottom: 32,
              marginTop: 0
            }}>
              {slogans[currentSlide]}
            </p>
          </div>
          {/* Fixed BookingSection */}
          <div
          className='booking-container'
            style={{
              position: 'absolute',
              left: '80%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              width: '100%',
              maxWidth: 400,
              padding: 0,
              pointerEvents: 'auto'
            }}
          >
            <BookingSection />
          </div>
        </section>

        <h2 style={{ marginTop: 40 }}>Our Services</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <ServiceCard title="Travel Plan" />
          <ServiceCard title="Catering" />
          <ServiceCard title="Babysitting" />
        </div>
        <h2 style={{ marginTop: 40 }}>Rooms</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <RoomCard title="Double Room" price="199" image="/assets/images/room-1.jpg" />
          <RoomCard title="Premium King Room" price="159" image="/assets/images/room-2.jpg" />
          <RoomCard title="Deluxe Room" price="299" image="/assets/images/room-3.jpg" />
        </div>
        <h2 style={{ marginTop: 40 }}>Testimonials</h2>
       <TestimonialCard
  author="Priya Sharma"
  text="Our stay in Jaipur was magical! The decor and hospitality felt truly Rajasthani."
  image="https://randomuser.me/api/portraits/women/68.jpg" // or any Jaipur/ethnic avatar
/>
        <h2 style={{ marginTop: 40 }}>Blog</h2>
        <BlogCard title="Tremblant In Canada" date="15th April, 2019" />
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
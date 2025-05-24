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
import RoomDetailsCard from '../components/RoomCard';

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

const rooms = [
 {
   title: 'Standard Room',
   price: 1500,
   image: '/assets/images/room-1.jpg',
   description: 'Comfortable double room with attached bathroom and city view.',
   amenities: ['Free Wi-Fi', 'Air Conditioning', 'Room Service', 'TV', 'Attached Bathroom'],
 },
 {
   title: 'Deluxe Room',
    price: 1800,
   image: '/assets/images/room-2.jpg',
   description: 'Spacious king-sized room ideal for couples with elegant decor.',
   amenities: ['Balcony', 'Smart TV', 'Mini Fridge', 'Complimentary Breakfast', 'Wi-Fi'],
 },
 {
   title: 'Super Deluxe Room',
  price: 2500,
   image: '/assets/images/room-3.jpg',
   description: 'Premium luxury room with top-tier amenities and city skyline view.',
   amenities: ['Bathtub', 'City View', 'King Bed', 'Coffee Maker', '24/7 Concierge'],
 },
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
    <div className='main-screen' style={{ width: '100vw', minHeight: '100vh', margin: '0 auto',overflow:'hidden' }}>
      <Header />
    
        {/* Hero Slider Section with fixed content */} 
        {/* <section style={{  position: 'relative',  }}> */}
          <div  className = "hero-wrapper">
          <Slider {...sliderSettings}>
            {heroImages.map((img, idx) => (
              <div key={idx}>
                <div 
                className = "hero-slider"
                  style={{
                    background: `url('${img}') center/cover no-repeat`,
                    minHeight: 780,
                    // minWidth:100,
                    // borderRadius: 12,
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
              // maxHeight:500,
              background: 'rgba(0,0,0,0.70)',
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
              marginTop: 0,
              color:'#fff'
            }}>
              {slogans[currentSlide]}
            </p>
          </div>
          {/* Fixed BookingSection */}
          <div
          className = "booking-container"
           
          >
            <BookingSection />
          </div>
           </div>
        {/* </section> */}

        <h2 style={{ marginTop: 0 }}>Our Services</h2>
        {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <ServiceCard title="Travel Plan" />
          <ServiceCard title="Catering" />
          <ServiceCard title="Babysitting" />
        </div> */}
        <h2 style={{ marginTop: 0 }}>Rooms</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {/* <RoomCard title="Standard Room" price="1500" image="/assets/images/room-1.jpg" description={''} amenities={[]} />
          <RoomCard title="Deluxe Room" price="1800" image="/assets/images/room-2.jpg"  description={''} amenities={[]}/>
          <RoomCard title="Super Deluxe Room" price="2500" image="/assets/images/room-3.jpg"  description={''} amenities={[]}/> */}
           {rooms.map((room, idx) => (
            <RoomDetailsCard key={idx} {...room} />
     ))}
        </div>
        <h2 style={{ marginTop: 0 }}>Testimonials</h2>
       <TestimonialCard
  author="Priya Sharma"
  text="Our stay in Jaipur was magical! The decor and hospitality felt truly Rajasthani."
  image="https://randomuser.me/api/portraits/women/68.jpg" // or any Jaipur/ethnic avatar
/>
        <h2 style={{ marginTop: 0 }}>Blog</h2>
        <BlogCard title="Tremblant In Canada" date="15th April, 2019" />
    
      <Footer />
    </div>
  );
};

export default HomeScreen;
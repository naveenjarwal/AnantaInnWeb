import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import BlogScreen from './screens/BlogScreen';
import ContactScreen from './screens/ContactScreen';
import RoomDetailsScreen from './screens/RoomDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OTPVerify from './components/OTPVerify';
import HappyBooking from './components/HappyBooking';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUsScreen />} />
      <Route path="/blog" element={<BlogScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/room-details" element={<RoomDetailsScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
       <Route path="/verify-otp" element={<OTPVerify />} />
        <Route path="/happy-booking" element={<HappyBooking />} />
    </Routes>
  </Router>
);

export default App;
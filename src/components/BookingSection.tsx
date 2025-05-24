import React, { useState, useEffect } from 'react';
import './Modal.css'; // CSS file for styles
import './BookingSection.css'
import { useNavigate } from 'react-router-dom';
import { isAndroid , isIOS} from 'react-device-detect';  
import { useLoader } from '../context/LoaderContext';

const roomTypePrices: Record<string, number> = {
  standard: 1000,
  deluxe: 1500,
  suite: 2500,
};
const BookingSection: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');
  const [roomType, setRoomType] = useState('standard');
  const [totalPrice, setTotalPrice] = useState(0);
  const [extraMattresses, setExtraMattresses] = useState('0');
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
   const { setLoading } = useLoader();

   const navigate = useNavigate();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  // Calculate total nights between dates
  const calculateNights = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

   const handleBookingClick = () => {
   // You can place your booking logic or OTP flow here
   setShowModal(true);
 };
 const closeModal = () => {
   setShowModal(false);
 };
  // Recalculate total price whenever values change

  const [today, setToday] = useState('');
 useEffect(() => {
   const now = new Date();
   now.setHours(0, 0, 0, 0); // Remove time
   const yyyy = now.getFullYear();
   const mm = String(now.getMonth() + 1).padStart(2, '0');
   const dd = String(now.getDate()).padStart(2, '0');
   setToday(`${yyyy}-${mm}-${dd}`);
 }, []);
  useEffect(() => {
    if (checkIn && checkOut && roomType) {
      const nights = calculateNights(checkIn, checkOut);
      const pricePerNight = roomTypePrices[roomType];
      const roomCount = parseInt(rooms, 10);
      const mattressCount = parseInt(extraMattresses, 10);
      const mattressPricePerNight = 300;
      setTotalPrice(
        nights * (pricePerNight * roomCount + mattressCount * mattressPricePerNight)
      );
      //  setTotalPrice(nights * pricePerNight * roomCount);
    }
  }, [checkIn, checkOut, rooms, roomType, extraMattresses]);


  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
     // Check if userInfo has required fields
 if (!userInfo || !userInfo.name || !userInfo.email || !userInfo.mobile) {
   navigate('/register'); // or show a modal instead
    localStorage.setItem('bookingInfo', JSON.stringify({ 
       checkIn:checkIn, 
        checkOut:checkOut, 
        guests:guests, 
        rooms:rooms, 
        roomType:roomType, 
        extraMattresses:extraMattresses, 
        totalPrice:totalPrice 
     }));
 
 }else{
    setLoading(true);
    setError('');
    try{
 const res = await fetch('https://anantainn.onrender.com/api/bookings/createBooking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: userInfo.name,
        email:userInfo.email,
        mobile:userInfo.mobile,
        checkIn:checkIn, 
        checkOut:checkOut, 
        guests:guests, 
        rooms:rooms, 
        roomType:roomType, 
        extraMattresses:extraMattresses, 
        totalPrice:totalPrice  
      }),
    });

    if (res.ok) {
      setCheckIn('');
      setCheckOut('');
      setGuests('2');
      setRooms('1');
      setRoomType('standard');
       navigate('/happy-booking');
       setLoading(false);
    } else {
      setError('Booking failed. Please try again.');
       setLoading(false);
    }
    } catch (error) {
       setError('Booking failed. Please try again.');
       setLoading(false);
    }
    
  };
}

   // Prevent past dates being entered manually on iOS
 const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const selected = e.target.value;
   if (selected < today) {
     alert('Past dates not allowed.');
     setCheckIn('');
   } else {
     setCheckIn(selected);
     if (checkOut && selected > checkOut) {
       setCheckOut('');
     }
   }
 };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e => setCheckOut(e.target.value)
   const selected = e.target.value;
   if (selected < today) {
     alert('Past dates not allowed.');
     setCheckOut('');
   } else {
     setCheckOut(selected);
   }
 };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 12,
        padding:32,
        maxWidth: 420,
        margin: '0 auto',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <h2 style={{ fontFamily: 'Lora, serif', color: 'gray', fontWeight: 400, fontSize: 30, marginBottom: 24 }}>
        Book Your Room
      </h2>
      <form>
        {/* Check In */}
        <div className='' style={{ marginBottom: 18, position:'relative',width: isIOS ?'98%':'90%',}}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Check In:</label>
           <div style={{position:'relative'}}>
            {isMobile && !checkIn && (
              <label style={{
                position:'absolute',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                top:isIOS ?5:10,
                left:10,
                fontWeight:400,
                color:'#fff'
              }}>
                DD/MM/YYYY
              </label>
            )}
          <input
          className='date-picker'
            type="date"
            value={checkIn}
            onChange={handleCheckInChange}
            required
            min={today} // Disables past dates
            style={{
              width: '100%',
              backgroundColor:'rgb(59,59,59)' ,
              padding: 12,
               color:'#fff',
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 16,
            }}
          />
          </div>
        </div>
        {/* Check Out */}
        <div style={{ marginBottom: 18 ,position:'relative',width: isIOS ?'98%':'90%', }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Check Out:</label>
          <div style={{position:'relative'}}>
            {isMobile && !checkOut && (
              <label style={{
                position:'absolute',
                top:isIOS ?5:10,
                left:10,
                fontWeight:400,
                 color:'#fff',
              }}>
                DD/MM/YYYY
              </label>
            )}
          <input
            type="date"
            className='date-picker'
            value={checkOut}
            onChange={handleCheckOutChange}
            required
            min={checkIn || today} // Disables dates before check-in
            style={{
              width: '100%',
              color:'#fff',
               backgroundColor:'rgb(59,59,59)' ,
              padding: 12,
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 16,
            }}
          />
          </div>
        </div>
        {/* Guests */}
        <div  style={{ marginBottom: 18 , position:'relative',width:'100%'}}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Guests:</label>
          <select className='other-field'  value={guests} onChange={e => setGuests(e.target.value)} style={inputStyle}>
            <option value="1">1 ADULT</option>
            <option value="2">2 ADULTS</option>
            <option value="3">3 ADULTS</option>
            <option value="4">4 ADULTS</option>
             <option value="5">5 ADULT</option>
            <option value="6">6 ADULTS</option>
            <option value="7">7 ADULTS</option>
            <option value="8">8 ADULTS</option>
             <option value="9">9 ADULT</option>
            <option value="10">10 ADULTS</option>
          </select>
        </div>
        {/* Rooms */}
        <div style={{ marginBottom: 18, position:'relative',width:'100%' }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Rooms:</label>
          <select className='other-field' value={rooms} onChange={e => setRooms(e.target.value)} style={inputStyle}>
            <option value="1">1 ROOM</option>
            <option value="2">2 ROOMS</option>
            <option value="3">3 ROOMS</option>
            <option value="4">4 ROOMS</option>
             <option value="5">5 ROOMS</option>
          </select>
        </div>
        {/* Room Type */}
        <div style={{ marginBottom: 18, position:'relative',width:'100%' }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Room Type:</label>
          <select className='other-field' value={roomType} onChange={e => setRoomType(e.target.value)} style={inputStyle}>
            <option value="standard">Standard - ₹1000/night</option>
            <option value="deluxe">Deluxe - ₹1500/night</option>
            <option value="suite">Suite - ₹2500/night</option>
          </select>
        </div>

        {/* Extra Mattress */}
        <div style={{ marginBottom: 18 , position:'relative',width:'100%'}}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Extra Mattress:</label>
          <select className='other-field' value={extraMattresses} onChange={e => setExtraMattresses(e.target.value)} style={inputStyle}>
            <option value="0">0</option>
            <option value="1">1 per room</option>
            <option value="2">2 (if allowed)</option>
          </select>
        </div>

        {/* Total Price */}
        {checkIn && checkOut && (
          <div style={{ marginBottom: 18, fontWeight: 500, fontSize: 16, color: '#333' }}>
            Total Price: ₹{totalPrice}
          </div>
        )}
        {/* Submit Button */}
        <button onClick={handleSubmit} type="submit"  style={buttonStyle}>
          Book Your Stay
        </button>

        {/* Feedback */}
        {/* {error && <div style={{ color: '#e53e3e', marginTop: 16, textAlign: 'center' }}>{error}</div>} */}
       
      </form>
    </div>
  );
};
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: 12,
  borderRadius: 6,
  border: '1px solid #ddd',
  fontSize: 16,
  color:'#fff',
   backgroundColor:'rgb(59,59,59)' ,
};
const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: 14,
  borderRadius: 6,
  border: '1px solid #e0a96d',
  background: '#fff',
  color: '#e0a96d',
  fontWeight: 600,
  fontSize: 18,
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s',
};
export default BookingSection;
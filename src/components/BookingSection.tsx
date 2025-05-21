// import React, { useState } from 'react';

// const BookingSection: React.FC = () => {
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [guests, setGuests] = useState('2');
//   const [rooms, setRooms] = useState('1');
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);


// const [roomType, setRoomType] = useState('Standard');
// const [numRooms, setNumRooms] = useState(1);
// const [extraMattress, setExtraMattress] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSubmitted(false);

//     // 1. Check availability
//     const checkRes = await fetch('http://localhost:5000/api/check-availability', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ checkIn, checkOut, guests, rooms }),
//     });
//     const checkData = await checkRes.json();

//     if (!checkRes.ok || !checkData.available) {
//       setError('Selected room(s) not available for these dates.');
//       setLoading(false);
//       return;
//     }

//     // 2. Submit booking
//     const res = await fetch('http://localhost:5000/api/bookings', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ checkIn, checkOut, guests, rooms }),
//     });

//     if (res.ok) {
//       setSubmitted(true);
//       setCheckIn('');
//       setCheckOut('');
//       setGuests('2');
//       setRooms('1');
//     } else {
//       setError('Booking failed. Please try again.');
//     }
//     setLoading(false);
//   };

//   return (
//     <div
//       style={{
//         background: '#fff',
//         borderRadius: 12,
//         padding: 32,
//         maxWidth: 400,
//         margin: '0 auto',
//         boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
//         position: 'relative',
//         zIndex: 2,
//       }}
//     >
//       <h2 style={{ fontFamily: 'Lora, serif', color: 'gray', fontWeight: 400, fontSize: 38, marginBottom: 24 }}>
//         Booking Your Hotel
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//           <label style={{ display: 'block', color: 'gray', marginBottom: 6 }}>Check In:</label>
//           <input
//             type="date"
//             value={checkIn}
//             onChange={e => setCheckIn(e.target.value)}
//             required
//             style={{
//               width: '92%',
//               padding: 12,
//               borderRadius: 6,
//               border: '1px solid #ddd',
//               fontSize: 16,
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//           <label style={{ display: 'block', color: 'gray', marginBottom: 6 }}>Check Out:</label>
//           <input
//             type="date"
//             value={checkOut}
//             onChange={e => setCheckOut(e.target.value)}
//             required
//             style={{
//               width: '92%',
//               padding: 12,
//               borderRadius: 6,
//               border: '1px solid #ddd',
//               fontSize: 16,
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//           <label style={{ display: 'block', color: 'gray', marginBottom: 6 }}>Guests:</label>
//           <select
//             value={guests}
//             onChange={e => setGuests(e.target.value)}
//             style={{
//               width: '100%',
//               padding: 12,
//               borderRadius: 6,
//               border: '1px solid #ddd',
//               fontSize: 16,
//             }}
//           >
//             <option value="1">1 ADULT</option>
//             <option value="2">2 ADULTS</option>
//             <option value="3">3 ADULTS</option>
//             <option value="4">4 ADULTS</option>
//           </select>
//         </div>
//         <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//           <label style={{ display: 'block', color: 'gray', marginBottom: 6 }}>Room:</label>
//           <select
//             value={rooms}
//             onChange={e => setRooms(e.target.value)}
//             style={{
//               width: '100%',
//               padding: 12,
//               borderRadius: 6,
//               border: '1px solid #ddd',
//               fontSize: 16,
//             }}
//           >
//             <option value="1">1 ROOM</option>
//             <option value="2">2 ROOMS</option>
//             <option value="3">3 ROOMS</option>
//             <option value="4">4 ROOMS</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: 14,
//             borderRadius: 6,
//             border: '1px solid #e0a96d',
//             background: '#fff',
//             color: '#e0a96d',
//             fontWeight: 600,
//             fontSize: 18,
//             cursor: 'pointer',
//             transition: 'background 0.2s, color 0.2s',
//           }}
//           disabled={loading}
//         >
//           {loading ? 'Checking...' : 'CHECK AVAILABILITY'}
//         </button>
//         {error && (
//           <div style={{ color: '#e53e3e', marginTop: 16, textAlign: 'center' }}>
//             {error}
//           </div>
//         )}
//         {submitted && (
//           <div style={{ color: '#28a745', marginTop: 16, textAlign: 'center' }}>
//             Booking submitted!
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default BookingSection;



import React, { useState, useEffect } from 'react';
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
  const [submitted, setSubmitted] = useState(false);
  const [extraMattresses, setExtraMattresses] = useState('0');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // Calculate total nights between dates
  const calculateNights = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

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
    setLoading(true);
    setError('');
    setSubmitted(false);
    const checkRes = await fetch('http://localhost:5000/api/check-availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checkIn, checkOut, guests, rooms, roomType, extraMattresses, totalPrice }),
    });
    const checkData = await checkRes.json();
    if (!checkRes.ok || !checkData.available) {
      setError('Selected room(s) not available for these dates.');
      setLoading(false);
      return;
    }
    const res = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checkIn, checkOut, guests, rooms, roomType, extraMattresses, totalPrice }),
    });
    if (res.ok) {
      setSubmitted(true);
      setCheckIn('');
      setCheckOut('');
      setGuests('2');
      setRooms('1');
      setRoomType('standard');
    } else {
      setError('Booking failed. Please try again.');
    }
    setLoading(false);
  };

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

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 12,
        padding: 32,
        maxWidth: 420,
        margin: '0 auto',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <h2 style={{ fontFamily: 'Lora, serif', color: 'gray', fontWeight: 400, fontSize: 34, marginBottom: 24 }}>
        Booking Your Hotel
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Check In */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Check In:</label>
          <input
            type="date"
            value={checkIn}
            onChange={handleCheckInChange}
            required
            min={today} // Disables past dates
            style={{
              width: '92%',
              padding: 12,
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 16,
            }}
          />
        </div>
        {/* Check Out */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Check Out:</label>
          <input
            type="date"
            value={checkOut}
            onChange={e => setCheckOut(e.target.value)}
            required
            min={checkIn || today} // Disables dates before check-in
            style={{
              width: '92%',
              padding: 12,
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 16,
            }}
          />
        </div>
        {/* Guests */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Guests:</label>
          <select value={guests} onChange={e => setGuests(e.target.value)} style={inputStyle}>
            <option value="1">1 ADULT</option>
            <option value="2">2 ADULTS</option>
            <option value="3">3 ADULTS</option>
            <option value="4">4 ADULTS</option>
          </select>
        </div>
        {/* Rooms */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Rooms:</label>
          <select value={rooms} onChange={e => setRooms(e.target.value)} style={inputStyle}>
            <option value="1">1 ROOM</option>
            <option value="2">2 ROOMS</option>
            <option value="3">3 ROOMS</option>
            <option value="4">4 ROOMS</option>
          </select>
        </div>
        {/* Room Type */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Room Type:</label>
          <select value={roomType} onChange={e => setRoomType(e.target.value)} style={inputStyle}>
            <option value="standard">Standard - ₹1000/night</option>
            <option value="deluxe">Deluxe - ₹1500/night</option>
            <option value="suite">Suite - ₹2500/night</option>
          </select>
        </div>

        {/* Extra Mattress */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ color: 'gray', marginBottom: 6, display: 'block' }}>Extra Mattress:</label>
          <select value={extraMattresses} onChange={e => setExtraMattresses(e.target.value)} style={inputStyle}>
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
        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? 'Checking...' : 'CHECK AVAILABILITY'}
        </button>
        {/* Feedback */}
        {error && <div style={{ color: '#e53e3e', marginTop: 16, textAlign: 'center' }}>{error}</div>}
        {submitted && <div style={{ color: '#28a745', marginTop: 16, textAlign: 'center' }}>Booking submitted!</div>}
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
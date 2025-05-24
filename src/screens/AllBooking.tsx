import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoader } from '../context/LoaderContext';


const AllBooking: React.FC = () => {
 const { setLoading } = useLoader();
    const [bookings, setBookings] = useState([]);
//  const [loading, setLoading] = useState(true);
 const [error, setError] = useState('');
 useEffect(() => {
   const fetchBookings = async () => {
     setLoading(true);
     try {
       const res = await fetch('https://anantainn.onrender.com/api/bookings/allBookings');
       const data = await res.json();
       console.log("bookingData",data.bookings)
       
       setBookings(data.bookings);
     } catch (err) {
       setError('Failed to load bookings.');
     } finally {
       setLoading(false);
     }
   };
   fetchBookings();
 }, []);
//  if (loading) return <p>Loading bookings...</p>;
//  if (error) return <p>{error}</p>;



  return(  
  <div style={{ width: '100vw', minHeight: '100vh', margin: '0 auto' }}>
    <Header />
    <main style={{ width: '100vw', minHeight: '100vh', margin: '0 auto', padding: 20 }}>
      <div>
<h2 style={{color:'#000'}}>All Bookings</h2>
<table border="1" cellPadding="10">
<thead>
<tr>
<th style={{color:'#000'}}>Name</th>
<th style={{color:'#000'}}>Mobile</th>
<th style={{color:'#000'}}>Email</th>
<th style={{color:'#000'}}>Check-In</th>
<th style={{color:'#000'}}>Check-Out</th>
<th style={{color:'#000'}}>Room Type</th>
<th style={{color:'#000'}}>Guests</th>
<th style={{color:'#000'}}>Total Amount</th>
</tr>
</thead>
<tbody>
         {bookings.map((b, index) => (
<tr key={index}>
<td style={{color:'#000'}}>{b.name}</td>
<td style={{color:'#000'}}>{b.mobile}</td>
<td style={{color:'#000'}}>{b.email}</td>
<td style={{color:'#000'}}>{b.checkIn}</td>
<td style={{color:'#000'}}>{b.checkOut}</td>
<td style={{color:'#000'}}>{b.roomType}</td>
<td style={{color:'#000'}}>{b.guests}</td>
<td style={{color:'#000'}}>{b.totalPrice}</td>
</tr>
         ))}
</tbody>
</table>
</div>
    </main>
    <Footer />
  </div>
  )
};

export default AllBooking;

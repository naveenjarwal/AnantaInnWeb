import React, { useState } from 'react';

const BookingSection: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(false);

    // 1. Check availability
    const checkRes = await fetch('http://localhost:5000/api/check-availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checkIn, checkOut, guests, rooms }),
    });
    const checkData = await checkRes.json();

    if (!checkRes.ok || !checkData.available) {
      setError('Selected room(s) not available for these dates.');
      setLoading(false);
      return;
    }

    // 2. Submit booking
    const res = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checkIn, checkOut, guests, rooms }),
    });

    if (res.ok) {
      setSubmitted(true);
      setCheckIn('');
      setCheckOut('');
      setGuests('2');
      setRooms('1');
    } else {
      setError('Booking failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 12,
        padding: 32,
        maxWidth: 400,
        margin: '0 auto',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <h2 style={{ fontFamily: 'Lora, serif', color: 'gray', fontWeight: 400, fontSize: 38, marginBottom: 24 }}>
        Booking Your Hotel
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label style={{ display: 'block', color: 'gray', marginBottom: 6 }}>Check In:</label>
          <input
            type="date"
            value={checkIn}
            onChange={e => setCheckIn(e.target.value)}
            required
            style={{
              width: '92%',
              padding: 12,
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 16,
            }}
          />
        </div>
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label style={{ display: 'block', color: 'gray', marginBottom: 6 }}>Check Out:</label>
          <input
            type="date"
            value={checkOut}
            onChange={e => setCheckOut(e.target.value)}
            required
            style={{
              width: '92%',
              padding: 12,
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 16,
            }}
          />
        </div>
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label style={{ display: 'block', color: 'gray', marginBottom: 6 }}>Guests:</label>
          <select
            value={guests}
            onChange={e => setGuests(e.target.value)}
            style={{
              width: '100%',
              padding: 12,
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 16,
            }}
          >
            <option value="1">1 ADULT</option>
            <option value="2">2 ADULTS</option>
            <option value="3">3 ADULTS</option>
            <option value="4">4 ADULTS</option>
          </select>
        </div>
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label style={{ display: 'block', color: 'gray', marginBottom: 6 }}>Room:</label>
          <select
            value={rooms}
            onChange={e => setRooms(e.target.value)}
            style={{
              width: '100%',
              padding: 12,
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 16,
            }}
          >
            <option value="1">1 ROOM</option>
            <option value="2">2 ROOMS</option>
            <option value="3">3 ROOMS</option>
            <option value="4">4 ROOMS</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
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
          }}
          disabled={loading}
        >
          {loading ? 'Checking...' : 'CHECK AVAILABILITY'}
        </button>
        {error && (
          <div style={{ color: '#e53e3e', marginTop: 16, textAlign: 'center' }}>
            {error}
          </div>
        )}
        {submitted && (
          <div style={{ color: '#28a745', marginTop: 16, textAlign: 'center' }}>
            Booking submitted!
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingSection;


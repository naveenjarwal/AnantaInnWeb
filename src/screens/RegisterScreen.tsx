import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { useLoader } from '../context/LoaderContext';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
   const { setLoading } = useLoader();
  const navigate = useNavigate();


  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const res = await fetch('https://anantainn.onrender.com/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, mobile }),
    });
    const data = await res.json();
    if (res.ok) {
      setLoading(false)
      localStorage.setItem('userInfo', JSON.stringify({ name, email, mobile }));
      navigate('/verify-otp');
    } else {
      setError(data.message || 'Failed to send OTP');
       setLoading(false)
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', margin: '0 auto', backgroundColor: '#e3e2e1' }}>
      <Logo />
      <div className='modal-content'  style={{ width: '20vw', minHeight: '20vh', margin: '60px auto', background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 12px #eee' }}>
        <h2 style={{ marginBottom: 24, color: '#000' }}>Register</h2>
        <form onSubmit={handleSendOtp}>
          <input
            type="name"
            placeholder="Name"
            value={name}
            required
            onChange={e => setName(e.target.value)}
            style={{ width: '90%', marginBottom: 16, padding: 12, borderRadius: 6, border: '1px solid #ddd' }}
          />
          <input
          type='number'
            placeholder="Mobile"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            required
            style={{ width: '90%', marginBottom: 16, padding: 12, borderRadius: 6, border: '1px solid #ddd' }}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '90%', marginBottom: 16, padding: 12, borderRadius: 6, border: '1px solid #ddd' }}
            required />

          <button type="submit" style={{ width: '100%', padding: 12, borderRadius: 6, background: '#b9935a', color: '#fff', fontWeight: 600, border: 'none' }}>
            Register
          </button>
          {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
        </form>
        <div style={{ marginTop: 18, textAlign: 'center' }}>
          {/* Already have an account?{' '} */}
          {/* <span style={{ color: '#b9935a', cursor: 'pointer' }} onClick={() => navigate('/login')}>
            Login
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
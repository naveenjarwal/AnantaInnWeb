import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Replace with your backend API call
    const res = await fetch('https://anantainn.onrender.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, mobile, password }),
    // });
     body: JSON.stringify({
      name: name,
      email: email,
      mobile: mobile,
      password: password
    })
    });
    const data = await res.json();
        alert(JSON.stringify(data)); // Show API response (e.g., token or error)
     console.log("res-register",data)
    if (res.ok) {
      navigate('/login');
    } else {
      setError('Registration failed');
    }
  };

  return (
    <div style={{display:'flex',flexDirection:'column',width:'100vw', minHeight: '100vh', alignItems:'center',justifyContent:'center',margin: '0 auto',backgroundColor:'#e3e2e1' }}>
      <Logo/>
      <div style={{ width:'20vw', minHeight: '20vh', margin: '60px auto', background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 12px #eee' }}>
        <h2 style={{ marginBottom: 24 , color:'#000'}}>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={e => setName(e.target.value)}
            style={{ width: '90%', marginBottom: 16, padding: 12, borderRadius: 6, border: '1px solid #ddd' }}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            style={{ width: '90%', marginBottom: 16, padding: 12, borderRadius: 6, border: '1px solid #ddd' }}
          />
          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '90%', marginBottom: 16, padding: 12, borderRadius: 6, border: '1px solid #ddd' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            style={{ width: '90%', marginBottom: 16, padding: 12, borderRadius: 6, border: '1px solid #ddd' }}
          />
          <button type="submit" style={{ width: '100%', padding: 12, borderRadius: 6, background: '#b9935a', color: '#fff', fontWeight: 600, border: 'none' }}>
            Register
          </button>
          {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
        </form>
        <div style={{ marginTop: 18, textAlign: 'center' }}>
          Already have an account?{' '}
          <span style={{ color: '#b9935a', cursor: 'pointer' }} onClick={() => navigate('/login')}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;

// Inside your <Routes>

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Replace with your backend API call
    const res = await fetch('https://anantainn.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
     body: JSON.stringify({
      email: email,
      password: password
    })
    });
    const data = await res.json();
        alert(JSON.stringify(data)); // Show API response (e.g., token or error)

    console.log("res-login",data)
    if (res.ok) {
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

//   async function loginUser() {
//   const response = await fetch('http://localhost:5000/api/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       email: 'test@example.com',
//       password: 'yourpassword'
//     })
//   });
//   const data = await response.json();
//   alert(JSON.stringify(data)); // Show API response (e.g., token or error)
// }

  return (
    <div style={{display:'flex',flexDirection:'column',width:'100vw', minHeight: '100vh', alignItems:'center',justifyContent:'center',margin: '0 auto',backgroundColor:'#e3e2e1' }}>
         <Logo/>
    <div style={{ width:'20vw', minHeight: '20vh', margin: '60px auto', background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 12px #eee' }}>
     
      <h2 style={{ marginBottom: 24, color:'#000' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
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
          Login
        </button>
        {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
      </form>
      <div style={{ marginTop: 18, textAlign: 'center' }}>
        Don't have an account?{' '}
        <span style={{ color: '#b9935a', cursor: 'pointer' }} onClick={() => navigate('/register')}>
          Register
        </span>
      </div>
    </div>
    </div>
  );
};

export default LoginScreen;
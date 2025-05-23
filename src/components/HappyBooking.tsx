import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const HappyBooking: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  return (
    <div  style={{display:'flex',flexDirection:'column',width:'100vw', minHeight: '100vh', alignItems:'center',justifyContent:'center',margin: '0 auto',backgroundColor:'#e3e2e1' }}>
         <Logo/>
    <div 
    className='modal-content' 
    style={{ 
    width:'20%',
     minHeight: '20vh', 
    margin: '60px auto', 
    background: '#fff', 
    padding: 32, 
    borderRadius: 12, 
    boxShadow: '0 2px 12px #eee' }}
    >
     
      {/* <h2 style={{ marginBottom: 24, color:'#000' }}>Login</h2> */}
      <div style={{ color: '#28a745', marginTop: 16, textAlign: 'center',fontSize:50 }}>Booking Confirmed!</div>
       <div style={{ color: 'GrayText', marginTop: 16, textAlign: 'center',fontSize:20 }}>Thank you for booking</div>
     
      <div style={{ marginTop: 18, textAlign: 'center' }}>
        <button style={buttonStyle} onClick={() => navigate('/')}>
          Back To Home
        </button>
        
      </div>
    </div>
    </div>
  );
};

export default HappyBooking;

const buttonStyle: React.CSSProperties = {
  width: '60%',
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
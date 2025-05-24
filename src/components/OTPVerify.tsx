import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext';
import Logo from '../components/Logo';
export default function OTPVerify() {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
     const { setLoading } = useLoader();

    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    const handleVerify = async (e: React.FormEvent) => {
        setLoading(true)
        e.preventDefault();
        const res = await fetch('https://anantainn.onrender.com/api/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userInfo.email, otp }),
        });
        const data = await res.json();
        if (res.ok) {
             setLoading(false)
            localStorage.setItem('loggedIn', 'true');
            navigate('/');
        } else {
            setError(data.message || 'Invalid OTP');
        }
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', margin: '0 auto', backgroundColor: '#e3e2e1' }}>
            <Logo />
            <div className='modal-content'  style={{ width: '20vw', minHeight: '20vh', margin: '60px auto', background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 12px #eee' }}>
                {/* <h2 style={{ marginBottom: 24, color: '#000' }}>Register</h2> */}
                <form onSubmit={handleVerify} style={{ maxWidth: 400, margin: 'auto' }}>
                    <h2 style={{ marginBottom: 24, color: '#000' }}>Enter OTP</h2>
                    <input 
                     style={{ width: '90%', marginBottom: 16, padding: 12, borderRadius: 6, border: '1px solid #ddd' }}
                    placeholder="Enter OTP" 
                    value={otp} 
                    onChange={e => setOtp(e.target.value)} required />
                    <button type="submit">Verify</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
}
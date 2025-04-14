// VerifyLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/Verifylogin.css';

function VerifyLogin() {
  const [otp, setOtp] = useState('');
  const phone = localStorage.getItem('loginPhone');
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/verify-login-otp/', {
        phone_number: phone,
        otp,
      });
      localStorage.setItem('token', res.data.access);
      localStorage.setItem('username', res.data.username);
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid OTP',err);
    }
  };

  return (
    <section className='otp-section'>
    <div className="container ">
      <h3>Enter OTP</h3>
      <input
        type="text"
        placeholder="Enter OTP"
        className="form-otp form-control my-2"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button className="btn-otp btn-warning " onClick={handleVerify}>
        Verify OTP
      </button>
    </div>
    </section>
  );
}

export default VerifyLogin;

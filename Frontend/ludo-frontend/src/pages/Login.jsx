import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      await axios.post('http://localhost:8000/api/send-login-otp/', {
        phone_number: phone,
      });
      localStorage.setItem('loginPhone', phone);
      navigate('/verify-login-otp');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Login via Phone</h3>
      <input
        type="text"
        placeholder="Enter phone number"
        className="form-control my-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary" onClick={handleSendOtp}>
        Send OTP
      </button>
    </div>
  );
}

export default Login;

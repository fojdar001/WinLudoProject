import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OTPLogin = () => {
  const [step, setStep] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
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
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow col-md-6 col-lg-4">
        <h3 className="text-center mb-4 text-primary">Login to LudoCash</h3>

        {step === "phone" ? (
          <>
            <label>Enter Phone Number</label>
            <input
              type="text"
              className="form-control mb-3"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+91XXXXXXXXXX"
            />
            <button className="btn btn-primary w-100" onClick={sendOTP}>Send OTP</button>
          </>
        ) : (
          <>
            <label>Enter OTP</label>
            <input
              type="text"
              className="form-control mb-3"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
            <button className="btn btn-success w-100" onClick={verifyOTP}>Verify & Login</button>
          </>
        )}

        {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
      </div>
    </div>
  );
}

export default Login;

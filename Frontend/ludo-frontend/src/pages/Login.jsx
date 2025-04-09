import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";


const OTPLogin = () => {
  const [step, setStep] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const sendOTP = async () => {
    const response = await fetch("http://localhost:8000/api/send-login-otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone_number: phoneNumber })
    });

    const data = await response.json();
    if (response.ok) {
      setStep("otp");
      setError('');
    } else {
      setError(data.error || "Failed to send OTP");
    }
  };

  const verifyOTP = async () => {
    const response = await fetch("http://localhost:8000/api/verify-login-otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone_number: phoneNumber, otp })
    });

    const data = await response.json();
    if (response.ok) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      setError(data.error || "Invalid OTP");
    }
  };

  return (
    <div className="container-login d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow col-md-6 col-lg-4">
        <h3 className="text-center mb-4 text-primary">Login to LudoCash</h3>
        <FontAwesomeIcon icon={faIdBadge} className="login-icon" />

        {step === "phone" ? (
          <>
            {/* <label>Enter Phone Number</label> */}
            <input
              type="text"
              className="form-control mb-3"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder=" Enter Phone Number"
            />
            <button className="btn btn-primary w-100" onClick={sendOTP}>Send OTP</button>
            <h6>Dont't Have an account?<Link to="/register">  Register Now.</Link></h6>
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
};

export default OTPLogin;

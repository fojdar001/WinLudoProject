import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/OTPVerify.css'

const OTPVerify = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedPhone = localStorage.getItem('phone_number');
    if (storedPhone) {
      setPhone(storedPhone);
    } else {
      // No phone found, redirect user to registration page
      navigate('/register');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setMessage(" OTP is required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/verify-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, phone_number: phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(" OTP Verified! Redirecting...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(data.error || " Invalid OTP");
      }
    } catch (error) {
      console.error(error);
      setMessage(" Server error! Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/send-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(" OTP resent successfully!");
      } else {
        setMessage(data.error || " Failed to resend OTP");
      }
    } catch (error) {
      console.error(error);
      setMessage(" Server error while resending OTP.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <section className='resgister-verify'>
    <div className="container-verify ">
      <h3 className=" text  text-center">Verify OTP</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          className="form-control-otp mb-3"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button className="btn-otp btn-warning w-100" type="submit" disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      <div className="text-center mt-3">
        <p>
          Didn't receive the code?{" "}
          <button
            className="btn-resend btn-sm btn-outline-primary"
            onClick={handleResend}
            disabled={resendLoading || !phone}
          >
            {resendLoading ? "Sending..." : "Resend OTP"}
          </button>
        </p>
      </div>

      {message && (
        <div className="alert alert-info text-center mt-3">{message}</div>
      )}

      {message.includes("Verified") && (
        <button
          type="button"
          className="btn btn-primary w-100 mt-2"
          onClick={() => navigate("/login")}
        >
          👉 Go to Login
        </button>
      )}
    </div>
    </section>
  );
};

export default OTPVerify;

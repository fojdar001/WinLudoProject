// 📁 Register.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmVisibility = () => setShowConfirm(!showConfirm);

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          phone_number: `+91${formData.phone}`,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(' OTP sent successfully!');
        localStorage.setItem('phone_number', `+91${formData.phone}`);
        navigate('/verify');
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      setMessage('Server error');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Create Your Account</h3>
              <form onSubmit={handleSubmit} noValidate>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.username}</div>
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit phone"
                  />
                  <div className="invalid-feedback">{errors.phone}</div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button type="button" className="btn btn-outline-secondary" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div className="invalid-feedback d-block">{errors.password}</div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <button type="button" className="btn btn-outline-secondary" onClick={toggleConfirmVisibility}>
                      {showConfirm ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div className="invalid-feedback d-block">{errors.confirmPassword}</div>
                </div>

                {/* Message */}
                {message && (
                  <div className="alert alert-info text-center">{message}</div>
                )}

                <button type="submit" className="btn btn-primary w-100 mt-2">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

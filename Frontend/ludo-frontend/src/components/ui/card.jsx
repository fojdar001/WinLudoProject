// src/components/ui/card.jsx
import React from 'react';
import './card.css'; // Optional, agar tum styling external rakhna chaaho

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`card shadow rounded p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
};

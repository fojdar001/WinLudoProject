import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Feautures.css'

const features = [
  { title: 'Instant Withdrawal', desc: 'Get your money in seconds via UPI/QR.' },
  { title: 'Secure Platform', desc: '100% safe and encrypted transactions.' },
  { title: '24/7 Support', desc: 'Live chat available anytime you need help.' },
];

const Features = () => {
  return (
    <section className="features-section py-5 bg-light">
      <h3 className="text-center text-warning mt-5 mb-5">Why Choose US ?</h3>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card custom-card text-center h-100 animate-card">
              <div className="card-body">
                <h5 className="card-title text-gold fw-bold">Instant Withdrawal</h5>
                <p className="card-text text-white">Get your money in seconds via UPI/QR.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card text-center h-100 animate-card delay-1">
              <div className="card-body">
                <h5 className="card-title text-gold fw-bold">Secure Platform</h5>
                <p className="card-text text-white">100% safe and encrypted transactions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card text-center h-100 animate-card delay-2">
              <div className="card-body">
                <h5 className="card-title text-gold fw-bold">24/7 Support</h5>
                <p className="card-text text-white">Live chat available you need help.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Features;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLock, faHeadset, faStar } from '@fortawesome/free-solid-svg-icons';
import './css/Feautures.css'

const features = [
  { title: 'Instant Withdrawal', desc: 'Withdraw your earnings instantly via UPI/QR.', icon: faBolt },
  { title: '100% Secure', desc: 'Safe & encrypted transactions at every step.', icon: faLock },
  { title: '24/7 Support', desc: 'We’re here anytime you need help.', icon: faHeadset },
  { title: 'Trusted Platform', desc: 'Thousands of players trust and play daily.', icon: faStar },
];

const Features = () => {
  return (
    <section className="features-section text-white">
      <div className="container py-5">
        <h3 className="text-center text-warning fw-bold mb-5">Why Choose Us?</h3>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
              <div className="feature-card p-4 text-center h-100 d-flex flex-column justify-content-between animate-card">
                <div>
                  <div className="feature-icon mb-3 fs-2 text-warning">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h5 className="fw-bold text-warning mb-2">{feature.title}</h5>
                  <p className="mb-0 text-light small">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHeadset, faStar, faUserCheck, faBalanceScale, faMoneyBillWave, faLock } from '@fortawesome/free-solid-svg-icons';
import './css/Feautures.css'

const features = [
  { title: 'Instant Withdrawal', desc: 'Withdraw your earnings instantly via UPI/QR.', icon: faBolt },
  { title: '100% Secure', desc: 'Safe & encrypted transactions at every step.', icon: faLock },
  { title: '24/7 Support', desc: 'We’re here anytime you need help.', icon: faHeadset },
  { title: 'Trusted Platform', desc: 'Thousands of players trust and play daily.', icon: faStar },
];

const Features = () => {
  return (
    <>
    <section className="features-section text-white">

      <div className="container py-5">
        <h3 className="text-center text-warning fw-bold mb-5">Why Choose Us?</h3>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-6 col-sm-6 col-lg-6 mb-4" key={index}>
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


<div className="how-it-works-section">
      <h2 className="text-center">How It Works</h2>
      <div className="row text-center">
        <div className="col-12 col-md-4 mb-4">
          <div className="step-card">
            <h4>1. Join & Add Funds</h4>
            <p>Create your account and add money to your wallet securely.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="step-card">
            <h4>2. Place a Bet</h4>
            <p>Choose a match and place your bet to win real money.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="step-card">
            <h4>3. Play on Ludo King</h4>
            <p>Paste the code in Ludo King, play the match, and win!</p>
          </div>
        </div>
      </div>
    </div>


    

    <section className="security-promise">
  <h2 className="section-title">Our Security Promise</h2>
  <div className="security-cards">
    <div className="card-security">
      <div className="icon">
        <FontAwesomeIcon icon={faLock} />
      </div>
      <p>Secure Payments</p>
    </div>
    <div className="card-security">
      <div className="icon">
        <FontAwesomeIcon icon={faUserCheck} />
      </div>
      <p>Verified Players</p>
    </div>
    <div className="card-security">
      <div className="icon">
        <FontAwesomeIcon icon={faBalanceScale} />
      </div>
      <p>Fair Gameplay</p>
    </div>
    <div className="card-security">
      <div className="icon">
        <FontAwesomeIcon icon={faMoneyBillWave} />
      </div>
      <p>Instant Withdrawals</p>
    </div>
  </div>
</section>
</section>

    </>
  );
};

export default Features;

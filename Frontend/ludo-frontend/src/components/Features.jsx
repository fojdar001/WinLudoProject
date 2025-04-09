import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Feautures.css';

const features = [
  { title: 'Instant Withdrawal', desc: 'Get your money in seconds via UPI/QR.', color: 'card-red' },
  { title: 'Secure Platform', desc: '100% safe and encrypted transactions.', color: 'card-green' },
  { title: ' 24/7 Support', desc: 'Live chat available anytime you need help.', color: 'card-yellow' },
  { title: 'Dedicated Customer Support', desc: 'Always here to help — day or night, our support’s got your back!', color: 'card-blue' },
];

const Features = () => {
  return (
    <section className="features-section py-1 bg-light">
      <h3 className="text-center text-warning mt-5 mb-5">Why Choose Us?</h3>
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-6 col-sm-6 col-md-6 mb-4" key={index}>
              <div className={`card custom-card ${feature.color} text-center h-100 animate-card delay-${index}`}>
                <div className="card-body">
                  <h5 className="card-title text-gold fw-bold">{feature.title}</h5>
                  <p className="card-text text-white">{feature.desc}</p>
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

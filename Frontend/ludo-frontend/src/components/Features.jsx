import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  { title: 'Instant Withdrawal', desc: 'Get your money in seconds via UPI/QR.' },
  { title: 'Secure Platform', desc: '100% safe and encrypted transactions.' },
  { title: '24/7 Support', desc: 'Live chat available anytime you need help.' },
];

const Features = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 fs-2">Why Choose Us?</h2>
        <div className="row g-4">
          {features.map((f, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{f.title}</h5>
                  <p className="card-text text-muted">{f.desc}</p>
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

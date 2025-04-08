import React from 'react';
import './css/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Ludo Game</h2>
        <p className="about-description">
          Welcome to <span className="highlight">Ludo </span>, the ultimate destination to relive your favorite childhood game with a modern twist!<br/>You can now enjoy Ludo online for free or play with real cash for added excitement.You can play for free, challenge yourself in cash games, or join tournaments. <br/>If you're just looking for some casual fun , you can play the game online for free.Even in the free version, you still have the chance to win exciting cash prizes. NO need to spend anything to enjoy the classic ludo game online.Simply join  game, test your skills and see if you can win!
        </p>

        <div className="about-content">
          <h4 className="about-subtitle">Our Mission</h4>
          <p>
            At Ludo Game, we aim to provide a fun, fair, and thrilling platform for Ludo lovers across the globe.
            With lightning-fast withdrawals, secure gameplay, and 24/7 customer support — we bring you the best digital Ludo experience ever.
          </p>

          <h4 className="about-subtitle">Why Choose Us?</h4>
          <ul className="about-list">
            <li>🛡️ 100% secure and trusted platform</li>
            <li>💸 Instant withdrawals through UPI & QR</li>
            <li>🎮 Real-time multiplayer gaming</li>
            <li>🧑‍💻 24/7 Dedicated support</li>
          </ul>

          <h4 className="about-subtitle">Join the Ludo Revolution!</h4>
          <p>
            Whether you're playing casually or competitively, <span className="highlight">Ludo </span> is your perfect arena. Get started today and turn your skills into rewards!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

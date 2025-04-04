import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
          {/* About */}
          <div className="col mb-4 ">
            <h5>LudoPlay - The Classic Board Game</h5>
            <p>
              LudoPlay brings the traditional Ludo experience online. Play with friends or compete with global players in exciting matches.
            </p>
          </div>

          {/* How to Play & Features */}
          <div className="col mb-4 ">
            <h5>How to Play</h5>
            <ul className="list-unstyled">
              <li><a href="#">Game Rules</a></li>
              <li><a href="#">Winning Strategies</a></li>
              <li><a href="#">Multiplayer Guide</a></li>
            </ul>

            <h5 className="mt-3">Features</h5>
            <ul className="list-unstyled">
              <li>🎲 Online Multiplayer</li>
              <li>💬 In-Game Chat</li>
              <li>🏆 Global Leaderboard</li>
              <li>🎁 Daily Rewards</li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div className="col mb-4">
            <h5>Support & Help</h5>
            <ul className="list-unstyled">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Report an Issue</a></li>
              <li><a href="#">Game Updates</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>

            <h5 className="mt-3">Policies</h5>
            <ul className="list-unstyled">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col mb-4">
            <h5>Contact Us</h5>
            <p>Email: </p>
            <p>Phone: +91-</p>
            <p>Live Chat: 24/7 Available</p>

            <h5 className="mt-3">Get Updates</h5>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <hr />
        <p className="text-center mt-3">&copy; 2025 LudoPlay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './css/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faLock,
  faMoneyBillWave,
  faUserCheck,
  faCheckCircle,
  faHeadset,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about-winludo text-white">
      <div className="container">
        <h2 className="text-center  mb-4 fw-bold" style={{ color: ' #FFD700' }}>About RockLudo</h2>
        <p className="lead text-center mb-5 text-light fs-5">
          Welcome to <strong>RockLudo</strong>, India’s most trusted and exciting platform for real-money Ludo battles!
          We combine the love for the classic Ludo game with modern technology and secure payments to bring you an engaging experience where fun meets opportunity.
        </p>

        <div className="row align-items-center mb-5 flex-column flex-md-row text-center text-md-start ">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="https://games.lol/wp-content/uploads/2022/03/ludo-game-gameplay-on-pc.jpg" className="img-fluid rounded-4 shadow" alt="About RockLudo" />
          </div>
          <div className="col-md-6">
            <h4 className=" mb-3 " style={{ color: ' #FFD700' }}>What Makes Us Special?</h4>
            <ul className="list-unstyled fs-5">
  <li className="mb-3 special-point"><i className="fas fa-bullseye me-2 text-warning"></i><strong>100% Skill-Based:</strong> Every match is a true test of your strategy and skill, not luck.</li>
  <li className="mb-3 special-point"><i className="fas fa-lock me-2 text-warning"></i><strong>Secure Platform:</strong> Built with end-to-end encryption to protect your data and money.</li>
  <li className="mb-3 special-point"><i className="fas fa-wallet me-2 text-warning"></i><strong>Instant Withdrawals:</strong> Winnings are sent to your UPI/Paytm in minutes, not days.</li>
  <li className="mb-3 special-point"><i className="fas fa-users me-2 text-warning"></i><strong>Real Players Only:</strong> All users are verified – no bots, no fake matches.</li>
</ul>

          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12">
            <h4 className="mb-3 text-center" style={{ color: ' #FFD700' }}>Our Mission</h4>
            <p className="fs-5 text-center text-light">
              At WinLudo, we aim to create a fair, fun, and secure environment for passionate Ludo players to compete,
              win, and grow. Whether you're a casual gamer or a competitive player, our platform gives you the stage
              to shine and earn while you play.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12">
            <h4 className=" mb-3 text-center"style={{ color: ' #FFD700' }}>How We Work</h4>
            <p className="fs-5 text-center text-light">
              Players create or join bets using real game codes from the Ludo King app. Once the game is played, the winner submits the screenshot for verification.
              Our system or support team verifies the result and ensures the winning amount is credited instantly. All of this happens with top-notch transparency.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12">
            <h4 className=" mb-3 text-center" style={{ color: ' #FFD700' }}>Why Trust Us?</h4>
            <ul className="list-unstyled text-center fs-5">
              <li><FontAwesomeIcon icon={faCheckCircle} className="me-2 text-warning " /> Over 10,000+ satisfied users</li>
              <li><FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-warning" /> Instant UPI withdrawals</li>
              <li><FontAwesomeIcon icon={faHeadset} className="me-2 text-warning" /> 24/7 live support</li>
              <li><FontAwesomeIcon icon={faShieldAlt} className="me-2 text-warning" /> Strict anti-cheat verification</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <h5 className=" mb-3"style={{ color: ' #FFD700' }}>Join the Ludo revolution. Play Smart. Win Big.</h5>
          <a href="/register" className="btn btn-warning px-4 py-2 fw-bold rounded-pill">Start Playing Now</a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import './css/HowToPlay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoins,
  faGamepad,
  faCode,
  faClock,
  faCamera,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

const HowToPlay = () => {
  return (
    <section className="how-to-play-section text-white">
      <div className="container py-5">
        <h2 className="text-center text-warning mb-5 fw-bold">How to Play & Win Real Cash</h2>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="play-card p-4 text-center">
              <FontAwesomeIcon icon={faCoins} className="step-icon mb-3" />
              <h5 className="text-warning fw-bold">1. Join & Add Money</h5>
              <p>Register or log in to your account. Go to the wallet section and add funds using UPI, QR or other secure options.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="play-card p-4 text-center">
              <FontAwesomeIcon icon={faGamepad} className="step-icon mb-3" />
              <h5 className="text-warning fw-bold">2. Create Room on Ludo King</h5>
              <p>Open the Ludo King app, create a room, and note down the 6-digit room code generated for that game.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="play-card p-4 text-center">
              <FontAwesomeIcon icon={faCode} className="step-icon mb-3" />
              <h5 className="text-warning fw-bold">3. Enter Room Code</h5>
              <p>Return to our website and paste the room code in the "Join Game" section so we can track your game and match.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="play-card p-4 text-center">
              <FontAwesomeIcon icon={faClock} className="step-icon mb-3" />
              <h5 className="text-warning fw-bold">4. Timer Starts</h5>
              <p>Once both players join, a timer will start. Complete the match before the timer ends to ensure fair results.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="play-card p-4 text-center">
              <FontAwesomeIcon icon={faCamera} className="step-icon mb-3" />
              <h5 className="text-warning fw-bold">5. Upload Match Screenshot</h5>
              <p>Take a clear screenshot of your win/loss result and upload it to our system for quick verification.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="play-card p-4 text-center">
              <FontAwesomeIcon icon={faTrophy} className="step-icon mb-3" />
              <h5 className="text-warning fw-bold">6. Win Rewards Instantly</h5>
              <p>If you win, the money will be instantly credited to your wallet. If you lose, the bet amount is deducted.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;

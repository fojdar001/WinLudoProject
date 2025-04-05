import React from "react";
import "./css/HowToPlay.css";

const HowToPlay = () => {
  return (
    <section className="howtoplay-section text-white ">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-warning">How to Play</h2>

        <div className="section-block">
          <h4 className="text-gold">🧩 Game Setup</h4>
          <p>
            Each player gets 4 tokens. The game board has 4 colored bases, and tokens start from their respective bases.
            You must roll a 6 to release your tokens onto the board.
          </p>
        </div>

        <div className="section-block">
          <h4 className="text-gold">🎯 Objective</h4>
          <p>
            Move all your tokens from the base to the center home area before your opponents do.
            The first player to get all 4 tokens home wins.
          </p>
        </div>

        <div className="section-block">
          <h4 className="text-gold">📜 Game Rules</h4>
          <ul className="rules-list">
            <li>Rolling a 6 grants an extra turn.</li>
            <li>You can capture opponent tokens by landing on the same square.</li>
            <li>Safe zones cannot be attacked by opponents.</li>
            <li>You must roll the exact number to enter the home area.</li>
          </ul>
        </div>

        <div className="section-block">
          <h4 className="text-gold">🏆 Winning Strategies</h4>
          <ul className="strategies-list">
            <li>Spread your tokens instead of moving one quickly.</li>
            <li>Use safe zones smartly to block others.</li>
            <li>Plan ahead before attacking opponent tokens.</li>
            <li>Keep one token near home to finish fast in the end game.</li>
          </ul>
        </div>

        <h3 className="text-center text-warning mt-5 mb-4">Get Started</h3>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card custom-card text-center h-100 animate-card">
              <div className="card-body">
                <h5 className="card-title text-gold fw-bold">Login</h5>
                <p className="card-text text-white">Create your account or log in to start playing exciting Ludo matches.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card text-center h-100 animate-card delay-1">
              <div className="card-body">
                <h5 className="card-title text-gold fw-bold">Register</h5>
                <p className="card-text text-white">Register now and join thousands of players winning real cash every day.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card text-center h-100 animate-card delay-2">
              <div className="card-body">
                <h5 className="card-title text-gold fw-bold">Start Playing</h5>
                <p className="card-text text-white">Choose a mode, enter the game, and show your skills on the board!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToPlay;

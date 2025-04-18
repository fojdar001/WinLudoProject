import React from "react";
import "./CSS/Terms&conditions.css";

const Termsandconditions = () => {
  return (
    <section className="terms-section">
    <div className="tc-container">
      <h1 className="tc-heading">Terms & Conditions</h1>

      <div className="tc-section">
        <h2>Who Can Play?</h2>
        <p>Only users 18+ are allowed. We promote responsible gaming and strictly prohibit underage users.</p>
      </div>

      <div className="tc-section">
        <h2>One Account, One Player</h2>
        <p>Each user must maintain a single account. Multiple or fake accounts will be banned permanently.</p>
      </div>

      <div className="tc-section">
        <h2>Game Code & Participation</h2>
        <p>Use valid Ludo King codes provided by the site. Your game will not be considered if wrong code is used.</p>
      </div>

      <div className="tc-section">
        <h2>Bet Placement Policy</h2>
        <p>Bets are final once placed. No cancellations or refunds are allowed after confirmation.</p>
      </div>

      <div className="tc-section">
        <h2>Win Proof Submission</h2>
        <p>Winners must upload a screenshot within 10 minutes after the match ends. Delayed entries are invalid.</p>
      </div>

      <div className="tc-section">
        <h2>Safe & Secure Payouts</h2>
        <p>All payments are UPI-based. Please use correct and verified UPI IDs for smooth transactions.</p>
      </div>

      <div className="tc-section">
        <h2>Fair Play First</h2>
        <p>Cheating, fake results, or any manipulation will lead to account suspension and blacklisting.</p>
      </div>

      <div className="tc-section">
        <h2>Need Help?</h2>
        <p>Our support team is ready to help via email or live chat. We usually reply within 24 hours.</p>
      </div>

      <div className="tc-section">
        <h2>Changes to Policy</h2>
        <p>We may update these Terms anytime. Stay informed and always follow the latest guidelines.</p>
      </div>
    </div>
    </section>
  );
};

export default Termsandconditions;

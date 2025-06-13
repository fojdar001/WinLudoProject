import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faWallet, faGamepad, faUsers, faCheckCircle, faUpload, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import './css/Howtoplay.css';

const steps = [
  {
    icon: faUserPlus,
    title: 'Register / Login',
    desc: 'Sign up with your name, number & password. Already have an account? Just log in.',
  },
  {
    icon: faWallet,
    title: 'Add Money to Wallet',
    desc: 'Top up your wallet securely using UPI, Card, or Paytm.',
  },
  {
    icon: faGamepad,
    title: 'Create Bet',
    desc: 'Set entry fee, choose game type & paste Ludo King code. Your bet will go live.',
  },
  {
    icon: faUsers,
    title: 'Join Bet',
    desc: 'Browse open bets and join one. You’ll receive the game code for Ludo King.',
  },
  {
    icon: faCheckCircle,
    title: 'Play Game',
    desc: 'Open Ludo King, enter the code & play. Win with your skills!',
  },
  {
    icon: faUpload,
    title: 'Submit Result',
    desc: 'Upload win screenshot for verification. Opponent or system verifies it.',
  },
  {
    icon: faMoneyBillTransfer,
    title: 'Get Paid',
    desc: 'If verified, your winnings will be added to your wallet. Withdraw anytime!',
  },
];

const HowToPlay = () => {
  return (
    <section className="htp-section">
      <h2 className="htp-heading text-center">How to Play & Win</h2>
      <div className="htp-cards">
        {steps.map((step, index) => (
          <div className="htp-card" key={index}>
            <div className="htp-icon">
              <FontAwesomeIcon icon={step.icon} />
            </div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToPlay;

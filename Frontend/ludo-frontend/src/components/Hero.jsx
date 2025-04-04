import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero.css'

const Hero = () => {
  return (
    <section className="hero-section text-center py-5">
      <div className="container">
        <img src="https://playerzpot.com/blog/wp-content/uploads/2023/06/LUDO-BLOG-IMAGE-3.jpg"></img>
        <h1 className="display-4  fw-bold text-warning">Play Ludo & Win Real Cash</h1>
        <p className="lead">Compete, win, and withdraw instantly!</p>
        <button className="hero-btn btn-light btn-lg text-light fw-bold mt-3 rounded-pill py-2 px-4 border-0">Start Playing</button>
      </div>
    </section>
  );
};

export default Hero;

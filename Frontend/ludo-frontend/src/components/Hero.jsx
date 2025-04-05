import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero.css'

const Hero = () => {
  return (
    <section className="hero-section text-center ">
      {/* <img src="https://wallpapers.com/images/hd/ludo-king-blue-squares-background-f2l0zc9t3trvwxxz.jpg" class="img-fluid" alt="..."></img> */}
      {/* <img src="https://miro.medium.com/v2/resize:fit:800/1*Ox55ibp2PrUEyH7pUiWegw.png" class="img-fluid" alt="..."></img> */}
       <img src="https://games.lol/wp-content/uploads/2022/11/ludo-pc-full-version.jpg" class="img-fluid" alt="..."></img> 
    <div className="container-text">
        {/* <h1 className=" text-big display-4  fw-bold ">Play Ludo & Win Real Cash</h1>
        <p className="lead">Compete, win, and withdraw instantly!</p> */}
        <button className="hero-btn btn-light btn-lg text-light fw-bold  rounded-pill py-3 px-4 border-0">Start Playing</button>
      </div>
    </section>
  );
};

export default Hero;

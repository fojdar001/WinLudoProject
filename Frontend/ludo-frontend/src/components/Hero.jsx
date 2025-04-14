import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero.css'
import homepage from '../assets/homepage.png'
import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % 5); // 3 images hain
  }, 4000); // change every 4s

  return () => clearInterval(timer);
}, []);

  return (
    <section className="hero-section text-center ">
      
      <div className="slideshow-container">
  <div className={`slide fade ${currentSlide === 0 ? "active" : ""}`}>
    <img src="https://appindiatech.com/wp-content/uploads/2023/04/Ludo-Banner.png" className="img-fluid" alt="..." />
  </div>
  <div className={`slide fade ${currentSlide === 1 ? "active" : ""}`}>
    <img src="https://www.getrushapp.com/blog/wp-content/uploads/2022/10/Blog-6-1120x561-1.png" className="img-fluid" alt="..." />
  </div>
  <div className={`slide fade ${currentSlide === 2 ? "active" : ""}`}>
    <img src="https://www.thepopularapps.com/application/upload/Apps/2023/01/ludo-super-titans-89.png" className="img-fluid" alt="..." />
  </div>
  <div className={`slide fade ${currentSlide === 3 ? "active" : ""}`}>
    <img src="https://static-perf1.zupee.com/blog-images/uploads/2023/09/ludo-win-cash-online.webp" className="img-fluid" alt="..." />
  </div>
  <div className={`slide fade ${currentSlide === 4 ? "active" : ""}`}>
    <img src="https://time2play.com/app/uploads/2023/04/instant-withdrawal-usa.png" className="img-fluid" alt="..." />
  </div>
</div>

    
<div className="dots-container">
  {[0, 1, 2, 3, 4].map((index) => (
    <span
      key={index}
      className={`dot ${currentSlide === index ? "active" : ""}`}
      onClick={() => setCurrentSlide(index)}
    ></span>
  ))}
</div>



    <div className="container-text mt-4">
      <h1 className=" text-big display-4  fw-bold ">Play Ludo & Win Real Cash</h1>
        <p className="lead">Compete, win, and withdraw instantly!</p>
        <Link to={'/login'} className="hero-btn btn-light btn-lg text-light fw-bold  rounded-pill py-3 px-4 border-0">
          <FontAwesomeIcon icon={faCirclePlay} className='btn-icon' />  Start Playing</Link>
      </div>
    </section>
  );
};

export default Hero;

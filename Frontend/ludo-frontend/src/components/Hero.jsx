import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero.css'
import homepage from '../assets/homepage.png'
import  { useState, useEffect } from 'react';



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
    <img src="https://i.ytimg.com/vi/53CRHHDQ-78/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFYgEyh_MA8=&rs=AOn4CLAwJUwlZ2h4bKlYgakubznSIS5LNw" className="img-fluid" alt="..." />
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



    <div className="container-text mt-3">
      <h1 className=" text-big display-4  fw-bold ">Play Ludo & Win Real Cash</h1>
        <p className="lead">Compete, win, and withdraw instantly!</p>
        <button className="hero-btn btn-light btn-lg text-light fw-bold  rounded-pill py-3 px-4 border-0">Start Playing</button>
      </div>
    </section>
  );
};

export default Hero;

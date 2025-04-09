import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Register from './pages/Register';
import Chatbox from './components/Chatbox';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import Header from './components/Header';
import OTPVerify from './pages/OTPVerify';
import Dashboard from './pages/Dashboard';
import Howtoplay from './components/howtoplay';
import About from './components/about';
import Termsandconditions from './components/Terms&conditions';
import Help from './components/Help';
import VerifyLogin from './pages/VerifyLogin';



function App() {
  return (
    <div id="root">
    <Router>
      <>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
              </>
            }
          />
          <Route
            path="/Howtoplay"
            element={<Howtoplay/>}
          />
          <Route path="/About" element={<About/>} />
          <Route path="/Terms&conditions" element={<Termsandconditions/>} />
          <Route path="/Help" element={<Help/>} />

          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<OTPVerify />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/verify-login" element={<VerifyLogin />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        
        <Chatbox />
        <ScrollToTop />
        <Footer/>
      </>
    </Router>
    </div>
  );
}

export default App;

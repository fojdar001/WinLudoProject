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
<<<<<<< HEAD
import OTPVerify from './pages/OTPVerify';
import Dashboard from './pages/Dashboard';
=======
import Howtoplay from './components/howtoplay';
>>>>>>> 836c74f (Your commit message here)

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
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<OTPVerify />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} /> 
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

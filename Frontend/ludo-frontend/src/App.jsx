import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Register from './pages/Register';
import Chatbox from './components/Chatbox';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <>
        <Navbar />

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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>

        <Footer />
        <Chatbox />
        <ScrollToTop />
      </>
    </Router>
  );
}

export default App;

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

function App() {
  return (
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>

        
        <Chatbox />
        <ScrollToTop />
        <Footer/>
      </>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import './css/Header.css'
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="md" expanded={expanded} className="custom-navbar">
      <Container>
        <Navbar.Brand href="#">
        <Link to="/"><img src="" className="logo" /> ROCKLUDO</Link> 
        </Navbar.Brand>

    
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />

        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-center">
            <Nav.Link as={Link} to="/" href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/About"  href="#features" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/Howtoplay" href="#about" onClick={() => setExpanded(false)}>How to Play</Nav.Link>
            <Nav.Link  as={Link} to="/Terms&conditions" href="#contact" onClick={() => setExpanded(false)}>Terms & Conditions</Nav.Link>
            <Nav.Link as={Link} to="/Help" href="#contact" onClick={() => setExpanded(false)}>Help</Nav.Link>
          </Nav>

        
          <div className="d-flex">
            <Button as={Link} to="/login" variant="outline-light rounded-pill px-4" className="me-2">Login</Button>
            <Button as={Link} to="/register" className=" me-3 rounded-pill px-4 border-0"style={{ backgroundColor: "#ffcc00", color: "#23255b"}} >Register</Button>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

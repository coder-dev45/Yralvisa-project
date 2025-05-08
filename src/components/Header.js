// components/Header.jsx

import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import LoginModal from './Loginpage';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar bg="primary" variant="dark" className="py-3" fixed="top">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand>Yralvisa.com<sup>®</sup> VISAS ON TIME</Navbar.Brand>
          <div className="d-flex gap-3 align-items-center text-white">
            <span className="badge bg-light text-dark">On Time Guaranteed</span>
            <i
              className="bi bi-person-circle fs-4"
              role="button"
              onClick={() => setShowLogin(true)}
            ></i>
          </div>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
};

export default Header;


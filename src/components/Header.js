import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="primary" variant="dark" className="py-3" fixed="top">
    <Container className="d-flex justify-content-between align-items-center">
      <Navbar.Brand>Yralvisa.com<sup>®</sup> VISAS ON TIME</Navbar.Brand>
      <div className="d-flex gap-3 align-items-center text-white">
        <span className="badge bg-light text-dark">On Time Guaranteed</span>
        <i className="bi bi-person-circle fs-4"></i>
      </div>
    </Container>
  </Navbar>
);

export default Header;

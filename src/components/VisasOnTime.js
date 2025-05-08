import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Visaontime = () => (
  
    <Container className="my-5">
    {/* Visas On Time Section */}
    <div style={{ minHeight: '350px' }}>
      <h2 className="fw-bold mb-3 text-center">Visas On Time</h2>
      <hr className="mb-4" />
      <Row className="g-4">
        <Col md={4}>
          <div className="p-4 rounded-4 bg-light h-100 d-flex flex-column justify-content-between" style={{ minHeight: '250px' }}>
            <div>
              <h3 className="fw-bold">99.2%</h3>
              <p className="fw-semibold mb-1 ">Visas on time</p>
              <p className="text-muted mb-0">Never miss your trip. Visas on Atlys come 2x faster</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 rounded-4 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#0D0E1D', minHeight: '250px' }}>
            <div>
              <h3 className="fw-bold">5L+</h3>
              <p className="fw-semibold mb-1">Visas Processed</p>
              <p className="mb-0">In just over a year, we are India's second largest visa processing platform.</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 rounded-4 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#5B47FB', minHeight: '250px' }}>
            <div>
              <h3 className="fw-bold">
                4.91 <FaStar />
              </h3>
              <p className="fw-semibold mb-1">Rating</p>
              <p className="mb-0">Across Trustpilot, app stores, and expert reviews, we've scored highest-in-class reviews</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>

    {/* Spacing between sections */}
    <div style={{ height: '80px' }} />

    {/* Atlys In The News Section */}
    <h2 className="fw-bold text-center mb-4 ">Yralvisa In The News</h2><hr/>
    <Row className="text-center gx-5 gy-4 justify-content-center bg-light rounded shadow p-4 ">
      <Col md={2} sm={4} xs={6}>
        <div>
          <h5 className="fw-bold mb-2">FORTUNE</h5>
          <p className="text-muted small mb-0">Yralvisa Streamlines Visa Process as Borders Reopen</p>
        </div>
      </Col>
      <Col md={2} sm={4} xs={6}>
        <div>
          <h5 className="fw-bold mb-2">Forbes</h5>
          <p className="text-muted small mb-0">How Governments Can Streamline Visas</p>
        </div>
      </Col>
      <Col md={2} sm={4} xs={6}>
        <div>
          <h5 className="fw-bold mb-2">FAST COMPANY</h5>
          <p className="text-muted small mb-0">The 10 most innovative travel companies of 2022</p>
        </div>
      </Col>
      <Col md={2} sm={4} xs={6}>
        <div>
          <h5 className="fw-bold mb-2">The Washington Post</h5>
          <p className="text-muted small mb-0">Gamechangers: atlys as Winner in Technology sector</p>
        </div>
      </Col>
      <Col md={2} sm={4} xs={6}>
        <div>
          <h5 className="fw-bold mb-2">TechCrunch</h5>
          <p className="text-muted small mb-0">Yralvisa raises $4.25M to make visas faster and easier</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Visaontime;

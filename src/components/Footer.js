// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-5 border-top">
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-3 py-3">
            <h6 className="fw-bold mb-4">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="/careers" className="text-dark text-decoration-none">Careers</a></li> {/* updated ID */}
              <li className="mb-3"><a href="/Blog" className="text-dark text-decoration-none">Blog</a></li>
              <li className="mb-3"><a href="/Newsroom" className="text-dark text-decoration-none">Newsroom</a></li>
              <li className="mb-3"><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Partners</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Inwards Out</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-3 py-3">
            <h6 className="fw-bold mb-4">Products</h6>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Yralvisa</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">For Travel Agents</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Security</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Transparency</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Visa Pre Approval</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Vaya</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">-1% Club</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">U.S. Mock Interview</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-3 py-3">
            <h6 className="fw-bold mb-4">Tools</h6>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Visa Photo Creator</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Schengen Cover Letter</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Schengen Invitation Letter</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Visa Eligibility Quiz</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Visa Glossary</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">UAE Status Checker</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Vietnam Status Checker</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Passport Mobility Index</a></li>
              <li className="mb-3"><a href="#" className="text-dark text-decoration-none">Schengen Appointment Checker</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-3 py-3">
            <h6 className="fw-bold mb-4">Offices</h6>
            <ul className="list-unstyled text-dark">
              <li className="mb-3">📍 7 Khullar Farms, Mandi Rd, Mehrauli, New Delhi, Delhi 110030</li>
              <li>📍 447 Broadway STE 851, New York, NY, 10013</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center bg-light text-dark py-2 mt-3 border-top">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-3 text-dark">
              <br />
              © Atlys, All rights reserved •
              <a href="#" className="text-dark text-decoration-none ms-2">Privacy</a> •
              <a href="#" className="text-dark text-decoration-none ms-2">Terms</a>
            </p>
          </Col>

          <Col md={3}>
            <div className="d-flex gap-2">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width="100"
                />
              </a>
            </div>
          </Col>

          <Col md={3}>
            <div className="d-flex justify-content-md-end gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-dark"><FaYoutube /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;



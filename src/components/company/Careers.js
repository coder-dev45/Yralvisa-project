// ...your other imports
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import openRoles from '../../careersData';

import careersImage from '../../assets/Image/company/careers.jpg';
import missionImage from '../../assets/Image/company/missiom.jpg';

import corevalue02 from '../../assets/Image/company/corevalue02.jpg';
import corevalue03 from '../../assets/Image/company/corevalue03.jpg';
import corevalue005 from '../../assets/Image/company/corevalue05.jpg';
import corevalue06 from '../../assets/Image/company/corevalue06.jpg';
import corevalue07 from '../../assets/Image/company/corevalue07.jpg';

import eng01 from '../../assets/Image/company/eng01.jpg';
import eng02 from '../../assets/Image/company/eng02.jpg';
import eng03 from '../../assets/Image/company/eng03.jpg';

import got01 from '../../assets/Image/company/got01.jpg';
import got07 from '../../assets/Image/company/got07.jpeg';
import got03 from '../../assets/Image/company/got03.jpg';
import got4 from '../../assets/Image/company/got04.jpg';
import got5 from '../../assets/Image/company/got05.jpg';
import got06 from '../../assets/Image/company/got06.jpg';

import './corevalus.css';

const useFadeInOnScroll = () => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const CareersSection = () => {
  const [coreValuesRef, coreValuesVisible] = useFadeInOnScroll();
  const [selectedDepartment, setSelectedDepartment] = useState('All departments');

  const departments = [
    'All departments',
    'Engineering',
    'Growth',
    'Marketing',
    'Operations',
    'Sales',
  ];

  const filteredRoles =
    selectedDepartment === 'All departments'
      ? openRoles
      : openRoles.filter((role) => role.department === selectedDepartment);

  const londonRoles = openRoles.filter(role =>
    role.location.toLowerCase().includes('london')
  );

  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="white" expand="md" className="border-bottom py-3 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            <span className="text-dark">Yralvisa<sup>®</sup></span> VISAS ON TIME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto text-dark fw-semibold">
              <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
              <Nav.Link onClick={() => document.getElementById('core-values')?.scrollIntoView({ behavior: 'smooth' })}>Core Values</Nav.Link>
              <Nav.Link as={Link} to="/careers">Open Roles</Nav.Link>
              <Nav.Link as={Link} to="/perks">Perks</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Careers Header */}
      <div id="careers" className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-4">Your journey to making a more open world begins here.</h2>
              <Button variant="primary" className="px-4 py-2">Open Roles</Button>
            </Col>
            <Col md={6}>
              <img src={careersImage} alt="Careers" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mission Section */}
      <div id="our-mission" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}><img src={missionImage} alt="Mission" className="img-fluid" /></Col>
            <Col md={6}>
              <h2 className="fw-bold mb-4">Our Story & Mission</h2>
              <p>Atlys' mission is to enable every person on earth to travel freely.</p>
              <p>
                Atlys was <strong>founded in 2021</strong> with the vision of simplifying the visa process. 
                Our motto is: <strong>“Treat your customer like your date.”</strong>
              </p>
              <p>
                We automate the pain point of visas to enable efficient travel. One customer has applied for 
                32 visas through Atlys in a year. We've processed <strong>1.2 million visas</strong> globally.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Core Values */}
      <div id="core-values" ref={coreValuesRef} className={`py-5 bg-white fade-in-section ${coreValuesVisible ? 'is-visible' : ''}`}>
        <Container>
          <h2 className="text-center fw-bold mb-5">Core Values</h2>
          <Row className="text-center mb-5">
            <Col md={4}><img src={corevalue02} alt="" className="mb-3" height={80} /><h5 className="fw-bold">Treat The Customer Like Your Date</h5><p>Impress customers like you’re on a date.</p></Col>
            <Col md={4}><img src={corevalue03} alt="" className="mb-3" height={80} /><h5 className="fw-bold">Move at the Speed of Light</h5><p>Speed up learning and innovation by moving fast.</p></Col>
            <Col md={4}><img src={corevalue005} alt="" className="mb-3" height={80} /><h5 className="fw-bold">Conquer, Not Compete</h5><p>Dominate markets with focus and boldness.</p></Col>
          </Row>
          <Row className="text-center">
            <Col md={6}><img src={corevalue06} alt="" className="mb-3" height={80} /><h5 className="fw-bold">Be Your Self, Not Your Selfie</h5><p>Authenticity drives diversity and growth.</p></Col>
            <Col md={6}><img src={corevalue07} alt="" className="mb-3" height={80} /><h5 className="fw-bold">Celebrate Breaking</h5><p>Move fast and break things — that’s how we learn.</p></Col>
          </Row>
        </Container>
      </div>

      {/* Open Roles */}
      <div id="open-roles" className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Open Roles</h2>
          <div className="d-flex justify-content-center flex-wrap mb-4">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? 'primary' : 'outline-primary'}
                className="m-1"
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </Button>
            ))}
          </div>
          <Row>
            {filteredRoles.map((role) => (
              <Col key={role.id} md={4} className="mb-4">
                <div className="p-4 border rounded shadow-sm h-100">
                  <h5 className="fw-bold">{role.title}</h5>
                  <p className="mb-1 text-muted">{role.location} | {role.type}</p>
                  <p className="small">{role.description}</p>
                  <Button variant="outline-primary" size="sm">Apply Now</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

          
      <div className="py-5 bg-white">
  <Container>
    <Row className="align-items-center">
      {/* Left side - Images */}
      <Col md={6}>
        <Row className="g-3">
          <Col xs={6}>
            <img
              src={eng03}
              alt="Team collaboration"
              className="img-fluid rounded"
              style={{ objectFit: "cover", height: "320px", width: "100%" }}
            />
          </Col>
          <Col xs={6}>
            <img
              src={eng02}
              alt="Team discussion"
              className="img-fluid rounded mb-3"
              style={{ objectFit: "cover", height: "155px", width: "100%" }}
            />
            <img
              src={eng01}
              alt="All you need is a passport"
              className="img-fluid rounded"
              style={{ objectFit: "cover", height: "155px", width: "100%" }}
            />
          </Col>
        </Row>
      </Col>

      {/* Right side - Text */}
      <Col md={6}>
        <h2 className="fw-bold mb-4 display-6">Engineering at Atlys</h2>
        <p className="fs-5 mb-3">
          We’re a lean, high-performing group of just{" "}
          <strong>24 engineers</strong>, each taking on some of the hardest
          roles in the industry to build exceptional products at lightning
          speed. With an <strong>acceptance rate of only 0.2%</strong>, we’re
          intentional about bringing on the best talent to drive our mission
          forward.
        </p>
        <p className="fs-5 mb-3">
          We aim to keep our engineering team small, staying under 30 to
          maintain our agility and focus. If you thrive on challenges and are
          passionate about making a real impact, we’d love for you to join us.
        </p>
        <p className="fs-5 mb-4">
          Check out our tech blog to see what we’re working on—from our latest
          projects to engineering best practices and the stories behind our
          success.
        </p>
        <Button
          style={{
            backgroundColor: "#5a5cf4",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            padding: "12px 26px",
            fontSize: "1.1rem",
          }}
        >
          Read more
        </Button>
      </Col>
    </Row>
  </Container>
</div>

<div className="py-5 bg-white">
      <Container>
        <Row className="mb-5">
        <Col md={12} className="d-flex justify-content-center">
  <h2 className="fw-bold display-5 text-center">We Got You Covered</h2>
</Col>

        </Row>
        <Row className="gy-5">
          <Col md={6} lg={4}>
            <img src={got01} alt="Unlimited PTO" className="mb-3" width="64" />
            <h5 className="fw-bold">Unlimited Paid Time Off (PTO)</h5>
            <p>We offer unlimited PTO, empowering you to take vacations, personal days, or sick leave whenever needed.</p>
          </Col>
          <Col md={6} lg={4}>
            <img src={got07} alt="Growth" className="mb-3" width="64" />
            <h5 className="fw-bold">Invest in Your Growth</h5>
            <p>Your professional development matters. We provide access to training programs, conferences, and workshops to help you learn and grow.</p>
          </Col>
          <Col md={6} lg={4}>
            <img src={got03} alt="Health Insurance" className="mb-3" width="64" />
            <h5 className="fw-bold">Comprehensive Health Insurance</h5>
            <p>Your health is our priority. We offer comprehensive health insurance plans to ensure you and your family are well taken care of.</p>
          </Col>
          <Col md={6} lg={4}>
            <img src={got4} alt="Well-being" className="mb-3" width="64" />
            <h5 className="fw-bold">Prioritize Your Well-being</h5>
            <p>Stay fit with reimbursed gym memberships (up to USD 50/ INR 3,000 per month) and enjoy a monthly spa visit (up to USD 50/ INR 3,000).</p>
          </Col>
          <Col md={6} lg={4}>
            <img src={got5} alt="Mindfulness" className="mb-3" width="64" />
            <h5 className="fw-bold">Mindfulness Matters</h5>
            <p>Get your annual Headspace meditation subscription covered to help you stay centered and focused.</p>
          </Col>
          <Col md={6} lg={4}>
            <img src={got06} alt="Supportive Environment" className="mb-3" width="64" />
            <h5 className="fw-bold">Thrive in a Supportive Environment</h5>
            <p>We foster a culture of continuous learning and well-being, ensuring our employees feel valued and supported in all aspects of their lives.</p>
          </Col>
        </Row>
      </Container>
    </div>

    
    </>
  );
};

export default CareersSection;

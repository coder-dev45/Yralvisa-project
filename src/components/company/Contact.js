import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';

const Contact = () => {
  return (
    <>
      <Container className="py-5 text-center">
        <h2 className="fw-bold mb-4 fs-1">Get in touch</h2>

        <div className="bg-light rounded shadow p-4"> {/* Box wrapper */}
          <p className="text-secondary mb-4 fs-5">
            Thank you for your interest in reaching out to us! <br />
            We value your feedback, inquiries, and suggestions. <br />
            To ensure we can assist you effectively, <br />
            please find the appropriate contact information <br />
            and guidelines below:
          </p>

          <h5 className="fw-bold fs-4">Delhi</h5>
          <p className="fs-5">🏢 7 Khullar Farms, Mandi Rd, Mehrauli, New Delhi, Delhi 110030</p>

          <h5 className="fw-bold fs-4">New York</h5>
          <p className="fs-5">🏢 447 Broadway STE 851, New York, NY, 10013</p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;

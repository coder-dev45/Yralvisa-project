import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VisaCard from './VisaCard';
import visaData from '../Datas/visaData'; // Make sure visaData is correctly imported

const VisaCardList = () => (
  <Container>
    {/* Fixed Map Icon using Bootstrap utility classes */}
    {/* <div className="position-fixed bottom-0 end-0 p-3">
      <img src="/path-to-your-map-icon.png" alt="Map Icon" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
    </div> */}

    <Row>
      {visaData.map((item, index) => (
        <Col key={index} xs={12} sm={6} md={3} className="mb-4">
          <VisaCard data={item} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default VisaCardList;

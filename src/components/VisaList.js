import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VisaCard from './VisaCard';
import visaData from '../Datas/visaData'; // Make sure visaData is correctly imported

const VisaCardList = () => (
  <Container>
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

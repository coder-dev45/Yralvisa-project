import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VisaCard from './VisaCard';
import visaData from '../Datas/visaData'; // Make sure visaData is correctly imported

const VisaCardList = () => (
  <Container>
    <Row className="flex-nowrap overflow-auto">
      {visaData.map((item, index) => (
        <Col key={index} xs={10} md={4} lg={3}>
          <VisaCard data={item} /> {/* This passes the correct image and data */}
        </Col>
      ))}
    </Row>
  </Container>
);

export default VisaCardList;

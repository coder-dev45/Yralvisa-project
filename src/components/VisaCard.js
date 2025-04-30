import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const VisaCard = ({ data }) => (
  <Card className="shadow-sm border-0 rounded-4 mx-2">
    <Card.Img variant="top" src={data.image} className="rounded-top-4" />
    <Card.Body>
      {data.trending && <Badge bg="light" text="dark" className="mb-2">🌸 Trending</Badge>}
      <h5>{data.country}</h5>
      <p className="text-muted mb-1">Get on <strong className="text-primary">{data.dateTime}</strong></p>
      <h6 className="fw-bold">₹{data.price}</h6>
      <Badge bg="primary" className="mt-2">{data.visaCount}+ Visas on Time via Yralvisa.com</Badge>
    </Card.Body>
  </Card>
);

export default VisaCard;

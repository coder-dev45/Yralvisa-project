import React from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';

const BottomToggle = () => (
  <Container className="text-center my-4">
    <ButtonGroup>
      <Button variant="dark">Show Grid</Button>
      <Button variant="light">Show Map</Button>
    </ButtonGroup>
  </Container>
);

export default BottomToggle;

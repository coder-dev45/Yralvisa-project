import React from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';

const FilterTabs = () => (
  <Container className="d-flex justify-content-center my-3">
    <ButtonGroup>
      <Button variant="primary">All</Button>
      <Button variant="outline-secondary">Instant</Button>
      <Button variant="outline-secondary">In a week</Button>
      <Button variant="outline-secondary">In a month</Button>
    </ButtonGroup>
  </Container>
);

export default FilterTabs;

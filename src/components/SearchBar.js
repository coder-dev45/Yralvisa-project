import React from 'react';
import { Form, InputGroup, Container } from 'react-bootstrap';

const SearchBar = () => (
  <div style={{ position: 'sticky', top: '64px', zIndex: 1020, background: 'white' }}>
    <Container className="py-2 border-bottom">
      <InputGroup className="shadow-sm rounded">
        <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
        <Form.Control placeholder="Where to?" />
      </InputGroup>
    </Container>
  </div>
);

export default SearchBar;

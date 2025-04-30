import React from 'react';
import { Form, InputGroup, Container } from 'react-bootstrap';

const SearchBar = () => (
  <Container className="my-4">
    <InputGroup className="shadow-sm rounded">
      <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
      <Form.Control placeholder="Where to?" />
    </InputGroup>
  </Container>
);

export default SearchBar;

// components/LoginModal.jsx

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="text-center p-4">
        <h6 className="text-primary">Visas on time</h6>
        <h5 className="mb-4 fw-bold">And sign ups in no time.</h5>
        <Form>
          <Form.Group className="mb-3 text-start">
            <Form.Label> What's your phone?</Form.Label>
            <Form.Text className="text-muted  fw-bold">
              We will provide status updates on your visa
            </Form.Text>
            <Form.Control type="text" placeholder="Enter phone number" />
          </Form.Group>
          <Button variant="primary" className="w-100 mb-3">
            Receive OTP
          </Button>
          <div className="my-2 text-muted">or</div>
          <Button variant="light" className="w-100 border">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              width="20"
              className="me-2"
            />
            Continue with Google
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

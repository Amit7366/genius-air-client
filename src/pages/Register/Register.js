import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
    return (
        <Container>
      <Row>
        <Col md="6" className="mx-auto card p-4">
            <h3>Register</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name='name' type="text" placeholder="John Doe" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control name='photoURL' type="text" placeholder="https://xyz.com/abc.jpg" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="yourname@domain.com" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="******" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    );
};

export default Register;
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col md="6" className="mx-auto card p-4">
            <h3>Login</h3>
          <Form>
          <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="yourname@domain.com" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="******" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

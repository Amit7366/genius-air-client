import React from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .then((error) => console.log(error));
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Row>
        <Col md="6" className="mx-auto card p-4">
          <h3>Register</h3>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="John Doe" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="photoURL"
                type="text"
                placeholder="https://xyz.com/abc.jpg"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="yourname@domain.com"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="******"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
            <Link to="/login">Login</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

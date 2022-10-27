import React, { useState } from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState();
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;

    if (password.length < 6) {
      setError("Password must be at least 6 character");
      toast.error("Password must be at least 6 character");
      return;
    }
    if (cpassword !== password) {
      setError("Password did not match");
      toast.error("Password did not match");
      return;
    }

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please provide at least 2 Uppercase letter");
      toast.error("Please provide at least 2 Uppercase letter");
      return;
    }

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Password should have special charecter");
      toast.error("Password should have special charecter");
      return;
    }

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
              <Form.Control
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="photoURL"
                type="text"
                placeholder="https://xyz.com/abc.jpg"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="yourname@domain.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="******"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="cpassword"
                type="password"
                placeholder="******"
                required
              />
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}
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

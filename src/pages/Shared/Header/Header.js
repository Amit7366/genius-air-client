import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/">Genius Air School</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses" className="nav-link">
              Courses
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </Nav>
          <Nav>
            <Link to="#" className="nav-link">
              More deets
            </Link>
            <Link to="#memes" className="nav-link">
              Dank memes
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

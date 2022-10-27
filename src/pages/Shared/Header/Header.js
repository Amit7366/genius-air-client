import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Sidebar from "../Sidebar/Sidebar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Button } from "react-bootstrap";
const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then( () => {})
    .catch(error => console.log(error))
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Genius Air School</Link>
        </Navbar.Brand>
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
            {user ? (
              <>
               
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      {user.displayName ? user.displayName : ""}
                    </Tooltip>
                  }
                >
                  {user.photoURL ? 
                  <img
                  style={{ height: "40px",width:'40px' }}
                  src={user.photoURL}
                  alt=""
                  className="rounded-circle"
                />
                  : <></>}
                  
                </OverlayTrigger>
                <Button onClick={handleLogout} variant="danger" size="sm" className="ms-2">Logout</Button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
                <Link to="/login" className="nav-link">
                <FaUser></FaUser>
                </Link>
                
              </>
            )}
          </Nav>
          <div className="d-lg-none d-block">
            <Sidebar></Sidebar>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

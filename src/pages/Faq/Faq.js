import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
    return (
        <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is this website about?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    This is site is about online learning platform. Here you can access various tech courses with cheap cost. This site is easily accessible and great ui experience.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What Technology is behind this website?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    This site is built on React framework and secure authentication of firebase. You can Access site with your email,password or your direct gmail or github account.
                  </p>
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What is the features?
                </Accordion.Header>
                <Accordion.Body>
                  
                  <ul>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Firebase</li>
                    <li>React Icon</li>
                    <li>React Hot toast</li>
                    <li>React Router</li>
                    <li>Authentication</li>
                    <li>Protected Route</li>
                    <i>Public Route</i>
                  </ul>
                  
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
};

export default Faq; <h2>Faq</h2>
import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import './Courses.css'

const Courses = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {topics.map((topic) => (
          <Col key={topic.id}>
            <Card>
              <Card.Img
                variant="top"
                src={topic.image}
                className='topic-image'
              />
              <Card.Body>
                <Card.Title>{topic.title}</Card.Title>
                <Card.Text>
                  {topic.details.slice(0,110)}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;

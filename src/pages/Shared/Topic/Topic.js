import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Topic = () => {
  const categoryCourses = useLoaderData();

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {categoryCourses.map((singleCourse) => (
          <Col key={singleCourse.id}>
            <Card>
              <Card.Img variant="top" src={singleCourse.image}  className='topic-image'/>
              <Card.Body>
                <Card.Title>{singleCourse.title}</Card.Title>
                <Card.Text>{singleCourse.details.slice(0,110)}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Topic;

import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import PreviewCard from "../PreviewCard/PreviewCard";


const Topic = () => {
  const categoryCourses = useLoaderData();

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {categoryCourses.map((singleCourse) => <PreviewCard key={singleCourse.id} course={singleCourse}></PreviewCard> )}
      </Row>
    </Container>
  );
};

export default Topic;

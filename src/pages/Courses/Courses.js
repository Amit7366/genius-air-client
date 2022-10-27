import React from "react";
import { useLoaderData } from "react-router-dom";
import {  Container, Row } from "react-bootstrap";
import './Courses.css'
import PreviewCard from "../Shared/PreviewCard/PreviewCard";

const Courses = () => {
  const topics = useLoaderData();
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {topics.map((topic) => <PreviewCard key={topic.id} course={topic}></PreviewCard> )}
      </Row>
    </Container>
  );
};

export default Courses;

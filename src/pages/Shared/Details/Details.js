import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const topicDetails = useLoaderData();
  const {id,title,image,details,rating,price,ratings} = topicDetails;
  console.log(details);
  return (
    <Card >
      <Card.Header>Featured</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image} className='banner-image'/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="primary">Get Premium Access</Button>
      </Card.Body>
      
    </Card>
  );
};

export default Details;

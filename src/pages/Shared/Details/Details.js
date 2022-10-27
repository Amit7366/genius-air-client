import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import './Details.css';

const Details = () => {
  const topicDetails = useLoaderData();
  const {id,title,image,details,rating,price,ratings,bullet} = topicDetails;
  return (
    <Card >
      <Card.Header>Featured</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image} className='banner-image'/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <ul>
          {
            bullet.map((bullet,idx) => <li key={idx}>{bullet}</li>)
          }
          
        </ul>
        <Link className="btn btn-outline-success" to={`/courses/checkout/${id}`}>Get Premium Access</Link>
      </Card.Body>
      
    </Card>
  );
};

export default Details;

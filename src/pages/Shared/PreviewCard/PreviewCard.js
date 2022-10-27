import React from 'react';
import { Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const PreviewCard = ({course}) => {
    const {id,title,image,details} = course;
    return (
        <Col>
            <Card>
              <Card.Img variant="top" src={image}  className='topic-image'/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details.slice(0,110)}</Card.Text>
                <Button variant="primary"><Link to={`/courses/topics/${id}`} className='text-white text-decoration-none'>Read more</Link></Button>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default PreviewCard;
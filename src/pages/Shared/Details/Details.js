import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaBookmark } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import './Details.css';
import Pdf from "react-to-pdf";

const Details = () => {
  const topicDetails = useLoaderData();
  const {id,title,image,details,rating,price,ratings,bullet} = topicDetails;
  const ref = React.createRef();
  return (
    <Card >
      
      <Card.Header className="text-end">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="btn btn-sm btn-info"><FaBookmark></FaBookmark> </button>}
      </Pdf>
        
      </Card.Header>
      <Card.Body ref={ref}>
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

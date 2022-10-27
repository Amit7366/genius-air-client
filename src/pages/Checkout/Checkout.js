import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { FaDonate,FaStar } from "react-icons/fa";

const Checkout = () => {
    const allDetails = useLoaderData();
    const {id,title,image,details,rating,price,ratings,bullet} = allDetails;
    return (
        <div className='card'>
            <Row>
                <Col lg='4'>
                    <img src={image} alt="" className='w-100'/>
                </Col>
                <Col lg='8'>
                    <h3>{title}</h3>
                    <div>
                        <span className='bg-success text-white px-2 py-1 rounded align-align-items-center'> <FaDonate></FaDonate> {price} </span>
                        <span className='bg-warning text-white px-2 py-1 rounded ms-3'> <FaStar></FaStar> {ratings} </span>
                    </div>
                    <p>
                        {details.slice(0,100)}
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default Checkout;
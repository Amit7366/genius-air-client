import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import Sidebar from '../pages/Shared/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4' className='d-none d-lg-block'>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg='8'>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;
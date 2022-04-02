import React from 'react'
import { Navbar, Card, Container, Row, Col } from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import '../App.css'
function MoviePage() {
    const location = useLocation();
    const { title, posterlink, discription } = location.state;
    
    return (
        <div>
            <Navbar bg="light" expand="lg" className='navsize'>
                <Navbar.Brand className='navsize' style={{ fontSize: '2.5rem', paddingRight: '10rem' }}>MoviesVerse</Navbar.Brand>
            </Navbar>
            <br>
            </br>
            <br>
            </br>
            <Row>
                <Col  >
                    <Card border="warning" style={{ width: '30rem', height: '45rem' }}>
                        <Card.Img variant="top" src={posterlink} />
                    </Card>
                </Col>
                <Col >

                    <Card border="warning" style={{ width: '78rem', height: '45rem', fontSize: '1.2rem' }}>

                        <Card.Body>
                            <Card.Title style={{ fontSize: '1.8rem' }}>{title}</Card.Title>
                            <Card.Text>
                                {discription}
                            </Card.Text>
                            <Card.Title style={{ fontSize: '1.8rem' }}>Reviews</Card.Title>
                        </Card.Body>
                    </Card>
                    <br />

                </Col>

            </Row>

        </div>
    )
}

export default MoviePage
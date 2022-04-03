import React from 'react'
import { Navbar, Card, Container, Row, Col } from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import '../App.css'
import { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import Populars from './Populars'
import '../App.css'
import GoogleButton from 'react-google-button'
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
function MoviePage() {
    const location = useLocation();
    const { title, posterlink, discription, releaseDate, isadlt, votect } = location.state;
    const [isLoggedin, setisLoggedin] = useState(false)
    const [Name, setName] = useState("")
    const responseGoogle = (response) => {
        if (response.profileObj != null) {
            setisLoggedin(true);
            setName(response.profileObj.name);
        }
        console.log(response);
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg" className='navsize'>
                <Navbar.Brand style={{ fontSize: '2.5rem', paddingRight: '80rem' , color:"white"}} className='navsize'>MoviesVerse</Navbar.Brand>


                <div style={{ paddingLeft: '5rem' }}>
                    {
                        !isLoggedin ?
                            <GoogleLogin
                                clientId="962851586497-9sktg69pd8n33ft3o7p4qc2o29gn6lnq.apps.googleusercontent.com"
                                render={renderProps => (
                                    <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled} />
                                )}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                            :
                            <>
                                <GoogleLogout
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    buttonText="Logout"
                                    onLogoutSuccess={() => setisLoggedin(false)}
                                >
                                    <div style={{ fontSize: "1.2rem" }}>{Name}</div>
                                </GoogleLogout>
                            </>
                    }
                </div>
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
                            <Card.Title style={{ fontSize: '2.5rem' ,fontWeight:"70"}}>{title}</Card.Title>
                            <Card.Text>
                                {discription}
                            </Card.Text>
                        
                            <div className="text-muted">ReleaseDate {releaseDate}</div>
                            <div className="text-muted">Parent Guide : {{isadlt} ? "Yes":"No"}</div>
                            <div className="text-muted">Popularity : {votect}</div>
                            <br />
                            <Card.Title style={{ fontSize: '2.5rem' ,fontWeight:"70"}}>Reviews</Card.Title>
                        </Card.Body>
                    </Card>
                    <br />

                </Col>

            </Row>

        </div>
    )
}

export default MoviePage
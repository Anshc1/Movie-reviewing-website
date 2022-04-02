import React, { useState, useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Form, FormControl, Button } from 'react-bootstrap'
import Populars from './Populars'
import '../App.css'
import GoogleButton from 'react-google-button'
function Frontpage() {
    const [Search, setSearch] = useState("");
    return (
        <>
            <Navbar bg="light" expand="lg" className='navsize'>
                <Navbar.Brand style={{ fontSize: '2.5rem', paddingRight: '15rem' }} className='navsize'>MoviesVerse</Navbar.Brand>
                <Form className="d-flex"  >
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button variant="outline-success" >Search</Button>
                </Form>
            </Navbar>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Populars type={Search} />
        </>

    )
}

export default Frontpage
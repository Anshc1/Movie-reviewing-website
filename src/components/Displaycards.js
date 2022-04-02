import React from 'react'
import Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link} from "react-router-dom";
function Displaycards(props) {
    const url = `https://image.tmdb.org/t/p/original/${props.img}`
    var str = props.desc; 
    str = str.substring(0 ,100); 
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Link to="/movies" state={{title: props.title , posterlink :url , discription : props.desc }}>
                    <Card.Img variant="top" src={url} />
                </Link>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {str}....
                    </Card.Text>
                <Link to="/movies" state={{title: props.title , posterlink :url , discription : props.desc }}>
                    <Button  variant="outline-warning">Rate It</Button>{' '}
                </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Displaycards
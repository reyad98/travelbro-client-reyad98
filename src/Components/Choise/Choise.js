import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Choise.css'

const Choise = ({ service }) => {
     console.log(service);
    const {name,description,price,img,_id} = service;
    return (

        <div>
            <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="crdcol">
                        <h3>{name}</h3>
                        <Card.Title>
                          {description}
                        </Card.Title>
                        <Card.Title>
                       <h3>  Cost:${price}</h3>
                       
                        </Card.Title>
                       
                       <Link to={`/myorders/${_id}`}>
                       <button 
                        onClick={()=>service.handleCart}
                        className="buttn">Book Now!</button>
                       </Link>
                      
                    </Card.Body>
                </Card>
            </Col>
        </div>
        </div>
    );
};

export default Choise;
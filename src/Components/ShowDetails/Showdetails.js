
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Showdetails.css'
const Showdetails = (props) => {
    return (
        <div className="detalis">
                 <div>
                    <Col>
                        <Card>
                             <Card.Img variant="top" src={props.frist.img} />
                             <Card.Body className="crdcol">
                                 <h3>{props.frist.name}</h3>
                                <Card.Title>
                                    Description: {props.frist.duration}
                                 </Card.Title>
                               
                                <button className="buttn">Book Now!</button>
                             </Card.Body>
                         </Card>
                     </Col>
                 </div>
               </div>
    );
};

export default Showdetails;
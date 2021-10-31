import React from 'react';
import { Card } from 'react-bootstrap';
import './Mypart.css'

const Mypart = (props) => {
    const{name,img} = props.me;
    return (
        <div>
           
            <div>
            <Card className="bg-color text-black">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                <h1>Happy Journey With Us</h1>
                    <Card.Title>{name}</Card.Title>
                    <h5>
                    Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.[1] Travel can also include relatively short stays between successive movements, as in the case of tourism.
                    </h5>
                </Card.ImgOverlay>
            </Card>
            </div>
            <h2 className="last">Our Services</h2>
        </div>
    );
};

export default Mypart;
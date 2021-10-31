
import { Card, Col, Row } from 'react-bootstrap';

const Firstpart = (props) => {

    //console.log(props)
    // const { name, fee, img, duration } = props.first;
    return (
        <div>
            
            <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={props.frist.img} />
                        <Card.Body>
                            <Card.Title>Name:{props.frist.name}</Card.Title>
                            <Card.Title>
                                Course Duration: {props.frist.duration}
                            </Card.Title>
                            <Card.Title>
                                Course Fee:$ {props.frist.fee}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Firstpart;
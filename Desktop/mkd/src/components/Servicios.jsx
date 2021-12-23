import React from 'react'
import '../App.css';
import{Card,ListGroupItem,ListGroup} from "react-bootstrap";

export default function Servicios() {
    return (
        <div className="body-services">
             <h4 className="white">Nuestros servicios</h4>
            <h1 className="white">Descubre que te ofrecemos</h1>
        <div className="cards">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/quienesomos/bffe7a7c-3deb-4042-abd7-b751b085b0c8.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/quienesomos/bffe7a7c-3deb-4042-abd7-b751b085b0c8.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/quienesomos/bffe7a7c-3deb-4042-abd7-b751b085b0c8.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
</Card>
</div>
        </div>
    )
}

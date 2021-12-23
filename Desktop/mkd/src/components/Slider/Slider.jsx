import React from 'react';
import{Carousel} from "react-bootstrap";
import './Slider.css'

export default function Slider() {
    return (
        <div>
 <Carousel className="slider" variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/principal/d56b7720-0ae7-4d3a-b7b0-cb845167b668.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="h1-slider">First slide label</h1>
      <p className="p-slider">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/principal/cffa82bd-9ed7-4eb8-a21b-003497801536.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1 className="h1-slider">Second slide label</h1>
      <p className="p-slider">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/principal/d88907f9-f22d-4a06-805d-0a0f70df3bb9.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1 className="h1-slider">Third slide label</h1>
      <p className="p-slider">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

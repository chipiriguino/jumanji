import React, { Component } from 'react' 
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';

export default function Carousel1() {
  
    return (
        <div className="carousel">
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/cocktail.jpeg" height="600" 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>MM</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/gourmet.jpeg" height="600"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/puerto.jpeg" height="600"
      alt="Third slide"/>
      
    <Carousel.Caption>
      <h3>Third slide label</h3>
   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    )
}

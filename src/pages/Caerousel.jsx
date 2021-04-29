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
      <p>mmmm que rico el cocktail</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/gourmet.jpeg" height="600"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>chef</h3>
      <p>Lesto esta rqiuisimo</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/puerto.jpeg" height="600"
      alt="Third slide"/>
      
    <Carousel.Caption>
      <h3>Puerto</h3>
   <p>con sabor a mar</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    )
}

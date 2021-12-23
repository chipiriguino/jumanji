import React, { Component } from 'react';
import Carousel from './Slider/Slider';
import About from './About';
import About1 from './About/About1'
import '../App.css'
import Servicios from './Servicios';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import CookieConsent from "react-cookie-consent";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel className="slider-size" />
                <About1/>
                {/* <div className="about"><img className="img-about" src="/images/quienesomos/533b6cca-91de-4406-958b-3404ec4ab6d8.jpg" alt="dentures"/><About/></div> */}
                <Servicios/>
            <Cards/>
            <Footer/>
            <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>

            </div>
        )
    }
}

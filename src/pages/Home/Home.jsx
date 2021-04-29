import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import Wasap2 from "../Wasap2.jsx";
import Caerousel from "../Caerousel.jsx";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section class="et-hero-tabs">
          <h3>
            <div className="typing-demo">MALA MADRE</div>
          </h3>
          <p className="typing-demo1 pp">feel the experience</p>
          <div className="et-hero-tabs-container">
            <a className="et-hero-tab" href="#tab-es6">
              Experience
            </a>
            <a className="et-hero-tab" href="#tab-flexbox">
              Carta
            </a>
            <a className="et-hero-tab" href="#tab-react">
              Cocktails
            </a>
            <a className="et-hero-tab" href="#tab-angular">
              Contacto
            </a>
            <a className="et-hero-tab" href="#tab-other">
              Galería
            </a>
            <span className="et-hero-tab-slider"></span>
          </div>
        </section>

        <main className="et-main">
          <section className="et-slide et-slide-experience" id="tab-es6">
            <h1>Experience</h1>
            <Caerousel></Caerousel>
          </section>
          <section className="et-slide et-slide-carta" id="tab-flexbox">
            <h1>Carta</h1>

            <div class="wrapper-cart">
              <div class="list">
                <h2 class="list-title">By The Pound</h2>
                <ul>
                  <li class="item">
                    <span class="name">Brisket</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Ribs</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Pulled Pork</span>
                    <span class="price">19</span>
                  </li>
                  <li class="item">
                    <span class="name">Turkey</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Sausage</span>
                    <span class="price">14</span>
                  </li>
                </ul>
              </div>

              <div class="list">
                <h2 class="list-title">Sandwiches</h2>
                <ul>
                  <li class="item">
                    <span class="name">Brisket</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">pulled Pork</span>
                    <span class="price">9.5</span>
                  </li>
                  <li class="item">
                    <span class="name">Chopped Beef</span>
                    <span class="price">19</span>
                  </li>
                  <li class="item">
                    <span class="name">Turkey</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Sausage</span>
                    <span class="price">14</span>
                  </li>
                  <li class="item">
                    <span class="name">Tipsy Texan</span>
                    <span class="price">14</span>
                  </li>
                </ul>
              </div>

              <div class="list">
                <h2 class="list-title">Sides</h2>
                <ul>
                  <li class="item">
                    <span class="name">Potato Salad</span>
                    <span class="price">3</span>
                  </li>
                  <li class="item">
                    <span class="name">Slaw</span>
                    <span class="price">9.5</span>
                  </li>
                  <li class="item">
                    <span class="name">Pinto Beans</span>
                    <span class="price">19</span>
                  </li>
                  <li class="item">
                    <span class="name">Pinto Beans</span>
                    <span class="price">19</span>
                  </li>
                </ul>
              </div>
              <div class="list">
                <h2 class="list-title">By The Pound</h2>
                <ul>
                  <li class="item">
                    <span class="name">Brisket</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Ribs</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Pulled Pork</span>
                    <span class="price">19</span>
                  </li>
                  <li class="item">
                    <span class="name">Turkey</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Sausage</span>
                    <span class="price">14</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="et-slide et-slide-cocktails" id="tab-react">
            <h1>Cocktails</h1>
            <div class="wrapper-cart">
              <div class="list">
                <h2 class="list-title">Cocktails</h2>
                <ul>
                  <li class="item">
                    <span class="name">Manhatan</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Pipireto</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Piña colada</span>
                    <span class="price">19</span>
                  </li>
                  <li class="item">
                    <span class="name">Sandia Boom</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Caipirinha</span>
                    <span class="price">14</span>
                  </li>
                  <li class="item">
                    <span class="name">Manhatan</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Pipireto</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Piña colada</span>
                    <span class="price">19</span>
                  </li>
                  <li class="item">
                    <span class="name">Sandia Boom</span>
                    <span class="price">22</span>
                  </li>
                  <li class="item">
                    <span class="name">Caipirinha</span>
                    <span class="price">14</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="et-slide et-slide-cotacto" id="tab-angular">
            <h1>Contacto</h1>
            <p className="reservas">
              Aceptamos reservas para comidas y cenas. Para hacer la reserva,
              por favor llame o mande un wasap al número de{" "}
              <a href="tel:+34663537159">teléfono. </a>
              Nuevo horario hasta nueva orden por parte de la Generalitat.
              <br></br>
              <br></br>
              -Domingo a Jueves de 9:00 h. a 18:00 h.<br></br>
              -Viernes y Sábado de 9:00 h. a 22:00 h.
            </p>
            <h6 className="rrssh6">
              También puede comunicarse con nosotros atraves de nuestras RRSS:
            </h6>
            <ul className="rrss">
              <div>
                <a href="https://twitter.com/"><img src="/images/twitter.png" width="100" alt="twitter"></img></a>
              </div>
              <div>
              <a href="https://twitter.com/"><img src="/images/facebook.png" width="100" alt="twitter"></img></a>
              </div>
              <div>
              <a href="https://twitter.com/"> <img
                  src="/images/twitter.png"
                  width="100"
                  alt="twitter"
                ></img></a>
              </div>
            </ul>
          </section>
          <section className="et-slide et-slide-galeria" id="tab-other">
              <h1>Galería</h1>
            {/* <div className="fotos">
              <img src="images/1.png" width="100" alt=""></img>
              <img src="images/2.png" width="100" alt=""></img>
              <img src="images/3.png" width="100" alt=""></img>
            </div> */}
          </section>
          <Wasap2 className="wasap"></Wasap2>
        </main>
      </div>
    );
  }
}

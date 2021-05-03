import React, { Component } from "react";
import ReactPlayer from 'react-player';
import {Link} from "react-scroll";
import Wasap2 from "../Wasap2.jsx";
import Caerousel from "../Caerousel.jsx";
// import {Helmet} from "react-helmet";
// import Gallery from 'react-grid-gallery';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="et-hero-tabs">
          <h3>
            <div className="typing-demo">MALA MADRE</div>
          </h3>
          <p className="typing-demo1 pp">feel the experience</p>
          <div className="et-hero-tabs-container">
            <a className="et-hero-tab" href="#tab-es6">
            <Link
                to="tab-es6"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >Experience</Link>
            </a>
            <a className="et-hero-tab" href="#tab-flexbox">
            <Link
                to="tab-flexbox"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >Carta</Link>
            </a>
            <a className="et-hero-tab" href="#tab-react">
            <Link
                to="tab-react"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >Cocktails</Link>
            </a>
            <a className="et-hero-tab" href="#tab-angular">
            <Link
                to="tab-angular"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >Contacto</Link>
            </a>
            <a className="et-hero-tab" href="#tab-other">
            <Link
                to="tab-other"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >Galería</Link>
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

            <div className="wrapper-cart">
              <div className="list">
                <h2 className="list-title">By The Pound</h2>
                <ul>
                  <li className="item">
                    <span className="name">Brisket</span>
                    <span className="price">22</span>
                  </li>
                  <li className="item">
                    <span className="name">Ribs</span>
                    <span className="price">22</span>
                  </li>
                  <li className="item">
                    <span className="name">Pulled Pork</span>
                    <span className="price">19</span>
                  </li>
                  <li className="item">
                    <span className="name">Turkey</span>
                    <span className="price">22</span>
                  </li>
                  <li className="item">
                    <span className="name">Sausage</span>
                    <span className="price">14</span>
                  </li>
                </ul>
              </div>

              <div className="list">
                <h2 className="list-title">Sandwiches</h2>
                <ul>
                  <li className="item">
                    <span className="name">Brisket</span>
                    <span className="price">22</span>
                  </li>
                  <li className="item">
                    <span className="name">pulled Pork</span>
                    <span className="price">9.5</span>
                  </li>
                  <li className="item">
                    <span className="name">Chopped Beef</span>
                    <span className="price">19</span>
                  </li>
                  <li className="item">
                    <span className="name">Turkey</span>
                    <span className="price">22</span>
                  </li>
                  <li className="item">
                    <span className="name">Sausage</span>
                    <span className="price">14</span>
                  </li>
                  <li className="item">
                    <span className="name">Tipsy Texan</span>
                    <span className="price">14</span>
                  </li>
                </ul>
              </div>

              <div className="list">
                <h2 className="list-title">Sides</h2>
                <ul>
                  <li className="item">
                    <span className="name">Potato Salad</span>
                    <span className="price">3</span>
                  </li>
                  <li className="item">
                    <span className="name">Slaw</span>
                    <span className="price">9.5</span>
                  </li>
                  <li className="item">
                    <span className="name">Pinto Beans</span>
                    <span className="price">19</span>
                  </li>
                  <li className="item">
                    <span className="name">Pinto Beans</span>
                    <span className="price">19</span>
                  </li>
                </ul>
              </div>
              <div className="list">
                <h2 className="list-title">By The Pound</h2>
                <ul>
                  <li className="item">
                    <span className="name">Brisket</span>
                    <span className="price">22</span>
                  </li>
                  <li className="item">
                    <span className="name">Ribs</span>
                    <span className="price">22</span>
                  </li>
                  <li className="item">
                    <span className="name">Pulled Pork</span>
                    <span className="price">19</span>
                  </li>
                  <li className="item">
                    <span className="name">Turkey</span>
                    <span className="price">22</span>
                  </li>
                  <li className="item">
                    <span className="name">Sausage</span>
                    <span className="price">14</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="et-slide et-slide-cocktails" id="tab-react">
            <h1>Cocktails</h1>
            <div className="wrapper-cart">
              <div className="list">
                <h2 className="list-title">Los Mala Madre</h2>
                <ul>
                  <li className="item">
                    <span className="name">PIÑA CORN</span>
                    <span className="price">9</span>
                  </li>
                  <p>Ron,piña,coco,palomitas</p>
                  <li className="item">
                    <span className="name">DONATELLA</span>
                    <span className="price">8</span>
                  </li>
                  <p>Gin,violeta,limón.</p>
                  <li className="item">
                    <span className="name">SOUTH SIDE</span>
                    <span className="price">8</span>
                  </li>
                  <p>Gin,limón,hierbabuena</p>
                  <li className="item">
                    <span className="name">PORN STAR</span>
                    <span className="price">9</span>
                  </li>
                  <p>Vodka,maracuyá,lima,vainilla</p>
                  <li className="item">
                    <span className="name">JUNE BUG</span>
                    <span className="price">9</span>
                  </li>
                  <p>Platanca,coco,piña,melón</p>
                  <li className="item">
                    <span className="name">PENICILIN</span>
                    <span className="price">9</span>
                  </li>
                  <p>Whisky ahumado,jengibre,miel</p>
                  <li className="item">
                    <span className="name">ROSAS & ENCANTO</span>
                    <span className="price">9</span>
                  </li>
                  <p>Vodka,arándanos,frambuesa,lima</p>
                  <li className="item">
                    <span className="name">MAI"MADRE"</span>
                    <span className="price">9</span>
                  </li>
                  <p>Ron,piña,coco,jengibre</p>
                  <li className="item">
                    <span className="name">SOON OF JAMES</span>
                    <span className="price">9</span>
                  </li>
                  <p>Jameson,lima,naranja</p>
                </ul>

                <h2 className="list-title h2-title">Los Clásicos</h2>
                <ul>
                  <li className="item">
                    <span className="name">MOJITO</span>
                    <span className="price">6</span>
                  </li>
                  <p>Ron,azúcar,menta</p>
                  <li className="item">
                    <span className="name">MOJITO SABORES</span>
                    <span className="price">7</span>
                  </li>
                  <p>Fresa,sandía,piña,coco</p>
                  <li className="item">
                    <span className="name">DAIQUIRI SABORES</span>
                    <span className="price">7</span>
                  </li>
                  <p>Fresa,sandía,piña,coco</p>
                  <li className="item">
                    <span className="name">PIÑA COLADA</span>
                    <span className="price">7</span>
                  </li>
                  <p>Ron,piña,coco</p>
                  <li className="item">
                    <span className="name">S**  ON THE BEACH</span>
                    <span className="price">7</span>
                  </li>
                  <p>Vodka,arándanos,naranja</p>
                  <li className="item">
                    <span className="name">DARK & STORMY</span>
                    <span className="price">8</span>
                  </li>
                  <p>Ron,jengibre,coco</p>
                  <li className="item">
                    <span className="name">MOSCOW MULE</span>
                    <span className="price">7</span>
                  </li>
                  <p>Vodka,jengibre,lima</p>
                  <li className="item">
                    <span className="name">OLD SCHOOL</span>
                    <span className="price">9</span>
                  </li>
                  <p>Whisky,vainilla,palomitas</p>
                </ul>

                <h2 className="list-title h2-title">Los Toro Rosso</h2>
                <ul>
                  <li className="item">
                    <span className="name">DARK & STORMY</span>
                    <span className="price">7</span>
                  </li>
                  <p>Ron,jengibre,cola,original RB</p>
                  <li className="item">
                    <span className="name">GIN TONIC</span>
                    <span className="price">7</span>
                  </li>
                  <p>Gin,tónica,original RB</p>
                  <li className="item">
                    <span className="name">WHISKY ALE</span>
                    <span className="price">7</span>
                  </li>
                  <p>Whisky,ginger,limón,original RB</p>
                  <li className="item">
                    <span className="name">GIN LEMON</span>
                    <span className="price">7</span>
                  </li>
                  <p>Gin,limón,original RB</p>
                  </ul>

                  <h2 className="list-title h2-title">For Drivers</h2>
                <ul>
                  <li className="item">
                    <span className="name">GINGER PUMPKING</span>
                    <span className="price">7</span>
                  </li>
                  <p>Calabaza,canela,naranja</p>
                  <li className="item">
                    <span className="name">MOJITO 0,0</span>
                    <span className="price">7</span>
                  </li>
                  <p>Hierbabuena,lima</p>
                  <li className="item">
                    <span className="name">SAN FRANCISCO</span>
                    <span className="price">7</span>
                  </li>
                  <p>Naranja,piña,melocotón</p>
                  </ul>

                  <h2 className="list-title h2-title">Aperitivo</h2>
                <ul>
                  <li className="item">
                    <span className="name">NEGRONI</span>
                    <span className="price">6</span>
                  </li>
                  <p>Gin,vermut,Campari</p>
                  <li className="item">
                    <span className="name">AMERICANO</span>
                    <span className="price">6</span>
                  </li>
                  <p>Soda,vermut,Campari</p>
                  <li className="item">
                    <span className="name">MARGARITA</span>
                    <span className="price">7</span>
                  </li>
                  <p>Tequila,triple seco,lima</p>
                  <li className="item">
                    <span className="name">PISCO SOUR</span>
                    <span className="price">8</span>
                  </li>
                  <p>Pisco,limón,huevo</p>
                  </ul>

                  <h2 className="list-title h2-title">Batidos De Fruta</h2>
                <ul>
                  <li className="item">
                    <span className="name">PIÑA & COCO</span>
                    <span className="price">6</span>
                  </li>
                  <p>Leche y azúcar</p>
                  <li className="item">
                    <span className="name">ARÁNDANOS & MENTA</span>
                    <span className="price">6</span>
                  </li>
                  <p>Leche y azúcar</p>
                  <li className="item">
                    <span className="name">NARANJA & FRESA</span>
                    <span className="price">6</span>
                  </li>
                  <p>Zumo y lima</p>
                  </ul>

              </div>
            </div>
          </section>
          <section className="et-slide et-slide-cotacto" id="tab-angular">
            <h1>Contacto</h1>
            <p className="reservas">
              Aceptamos reservas para comidas y cenas. Para hacer la reserva,
              por favor llame o mande un wasap al número de teléfono{" "}
              <a href="tel:+34663537159">12345. </a>
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
                  src="/images/instagram.png"
                  width="100"
                  alt="twitter"
                ></img></a>
              </div>
            </ul>
          </section>
          <section className="et-slide et-slide-galeria" id="tab-other">
              <h1>Galería</h1>
              <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='/images/cocktail-video.mp4'
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
      <img src="/images/plantilla.png" width="100%" height="100%" alt="Equipo" />
          </section>
          <Wasap2 className="wasap"></Wasap2>
        </main>
      </div>
      
    );
  }
}

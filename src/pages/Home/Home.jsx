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
                <h2 class="list-title">Los Mala Madre</h2>
                <ul>
                  <li class="item">
                    <span class="name">PIÑA CORN</span>
                    <span class="price">9</span>
                  </li>
                  <p>Ron,piña,coco,palomitas</p>
                  <li class="item">
                    <span class="name">DONATELLA</span>
                    <span class="price">8</span>
                  </li>
                  <p>Gin,violeta,limón.</p>
                  <li class="item">
                    <span class="name">SOUTH SIDE</span>
                    <span class="price">8</span>
                  </li>
                  <p>Gin,limón,hierbabuena</p>
                  <li class="item">
                    <span class="name">PORN STAR</span>
                    <span class="price">9</span>
                  </li>
                  <p>Vodka,maracuyá,lima,vainilla</p>
                  <li class="item">
                    <span class="name">JUNE BUG</span>
                    <span class="price">9</span>
                  </li>
                  <p>Platanca,coco,piña,melón</p>
                  <li class="item">
                    <span class="name">PENICILIN</span>
                    <span class="price">9</span>
                  </li>
                  <p>Whisky ahumado,jengibre,miel</p>
                  <li class="item">
                    <span class="name">ROSAS & ENCANTO</span>
                    <span class="price">9</span>
                  </li>
                  <p>Vodka,arándanos,frambuesa,lima</p>
                  <li class="item">
                    <span class="name">MAI"MADRE"</span>
                    <span class="price">9</span>
                  </li>
                  <p>Ron,piña,coco,jengibre</p>
                  <li class="item">
                    <span class="name">SOON OF JAMES</span>
                    <span class="price">9</span>
                  </li>
                  <p>Jameson,lima,naranja</p>
                </ul>

                <h2 class="list-title h2-title">Los Clásicos</h2>
                <ul>
                  <li class="item">
                    <span class="name">MOJITO</span>
                    <span class="price">6</span>
                  </li>
                  <p>Ron,azúcar,menta</p>
                  <li class="item">
                    <span class="name">MOJITO SABORES</span>
                    <span class="price">7</span>
                  </li>
                  <p>Fresa,sandía,piña,coco</p>
                  <li class="item">
                    <span class="name">DAIQUIRI SABORES</span>
                    <span class="price">7</span>
                  </li>
                  <p>Fresa,sandía,piña,coco</p>
                  <li class="item">
                    <span class="name">PIÑA COLADA</span>
                    <span class="price">7</span>
                  </li>
                  <p>Ron,piña,coco</p>
                  <li class="item">
                    <span class="name">S**  ON THE BEACH</span>
                    <span class="price">7</span>
                  </li>
                  <p>Vodka,arándanos,naranja</p>
                  <li class="item">
                    <span class="name">DARK & STORMY</span>
                    <span class="price">8</span>
                  </li>
                  <p>Ron,jengibre,coco</p>
                  <li class="item">
                    <span class="name">MOSCOW MULE</span>
                    <span class="price">7</span>
                  </li>
                  <p>Vodka,jengibre,lima</p>
                  <li class="item">
                    <span class="name">OLD SCHOOL</span>
                    <span class="price">9</span>
                  </li>
                  <p>Whisky,vainilla,palomitas</p>
                </ul>

                <h2 class="list-title h2-title">Los Toro Rosso</h2>
                <ul>
                  <li class="item">
                    <span class="name">DARK & STORMY</span>
                    <span class="price">7</span>
                  </li>
                  <p>Ron,jengibre,cola,original RB</p>
                  <li class="item">
                    <span class="name">GIN TONIC</span>
                    <span class="price">7</span>
                  </li>
                  <p>Gin,tónica,original RB</p>
                  <li class="item">
                    <span class="name">WHISKY ALE</span>
                    <span class="price">7</span>
                  </li>
                  <p>Whisky,ginger,limón,original RB</p>
                  <li class="item">
                    <span class="name">GIN LEMON</span>
                    <span class="price">7</span>
                  </li>
                  <p>Gin,limón,original RB</p>
                  </ul>

                  <h2 class="list-title h2-title">For Drivers</h2>
                <ul>
                  <li class="item">
                    <span class="name">GINGER PUMPKING</span>
                    <span class="price">7</span>
                  </li>
                  <p>Calabaza,canela,naranja</p>
                  <li class="item">
                    <span class="name">MOJITO 0,0</span>
                    <span class="price">7</span>
                  </li>
                  <p>Hierbabuena,lima</p>
                  <li class="item">
                    <span class="name">SAN FRANCISCO</span>
                    <span class="price">7</span>
                  </li>
                  <p>Naranja,piña,melocotón</p>
                  </ul>

                  <h2 class="list-title h2-title">Aperitivo</h2>
                <ul>
                  <li class="item">
                    <span class="name">NEGRONI</span>
                    <span class="price">6</span>
                  </li>
                  <p>Gin,vermut,Campari</p>
                  <li class="item">
                    <span class="name">AMERICANO</span>
                    <span class="price">6</span>
                  </li>
                  <p>Soda,vermut,Campari</p>
                  <li class="item">
                    <span class="name">MARGARITA</span>
                    <span class="price">7</span>
                  </li>
                  <p>Tequila,triple seco,lima</p>
                  <li class="item">
                    <span class="name">PISCO SOUR</span>
                    <span class="price">8</span>
                  </li>
                  <p>Pisco,limón,huevo</p>
                  </ul>

                  <h2 class="list-title h2-title">Batidos De Fruta</h2>
                <ul>
                  <li class="item">
                    <span class="name">PIÑA & COCO</span>
                    <span class="price">6</span>
                  </li>
                  <p>Leche y azúcar</p>
                  <li class="item">
                    <span class="name">ARÁNDANOS & MENTA</span>
                    <span class="price">6</span>
                  </li>
                  <p>Leche y azúcar</p>
                  <li class="item">
                    <span class="name">NARANJA & FRESA</span>
                    <span class="price">6</span>
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

import React, { Component } from 'react';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <section class="et-hero-tabs">
                    
    <h3><div className="typing-demo">
      MALA MADRE
    </div></h3>
    <p className="typing-demo1 pp">feel the experience</p> 
    <div className="et-hero-tabs-container">
      <a className="et-hero-tab" href="#tab-es6">Experience</a>
      <a className="et-hero-tab" href="#tab-flexbox">Carta</a>
      <a className="et-hero-tab" href="#tab-react">About us</a>
      <a className="et-hero-tab" href="#tab-angular">FAQ</a>
      <a className="et-hero-tab" href="#tab-other">Fotos</a>
      <span className="et-hero-tab-slider"></span>
    </div>
  </section>


  <main className="et-main">
    <section className="et-slide" id="tab-es6">
      <h1>Experience</h1>
      <h3>experience</h3>
    </section>
    <section className="et-slide" id="tab-flexbox">
      <h1>Carta</h1>
      <h3>carta</h3>
    </section>
    <section className="et-slide" id="tab-react">
      <h1>About us</h1>
      <h3>about us</h3>
    </section>
    <section className="et-slide" id="tab-angular">
      <h1>FAQ</h1>
      <h3>FAQ</h3>
    </section>
    <section className="et-slide" id="tab-other">
        <div className="fotos">
      <img  src="images/1.png" width="100" alt=""></img>
      <img src="images/2.png" width="100" alt=""></img>
      <img src="images/3.png" width="100" alt=""></img>
      </div>
    </section>
  </main>
            </div>
        )
    }
}



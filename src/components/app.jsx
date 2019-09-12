import React from 'react';
import { MainStore } from '../context/mainContext';
import Nav from './nav';
import Footer from './footer';
import Ring from '../images/main-ring.png';
import Waves from '../images/top-waves.svg';
import Setting from '../images/setting.jpg';
import Design from '../images/bracelets.png';

export default () => (
  <MainStore>
    <Nav />
    <div className="home">
      <img className="waves" src={Waves} alt="Waves" />
      <div className="main">
        <h3 className="main__tradition">
          A Family Tradition of Quality Manufacturing
        </h3>
        <img className="ring" src={Ring} alt="Ring" />
        <div className="buttons-container">
          <a className="buttons" href="#magical">Learn More</a>
          <a className="buttons buttons--learn" href="#magical">Contact Us</a>
        </div>
      </div>
    </div>
    <div className="about">
      <h4>Quality Production and Design</h4>
      <p>This is totally just a bunch of words and stuff but it's important to have</p>
      <div className="about-box-container">
        <div className="about-box">
          <h4>
            <i className="material-icons">cloud_upload</i>
            Quality Metals
          </h4>
          <p>This once again is totally just a bunch of words and stuff that is quite important for everything still</p>
        </div>
        <div className="about-box">
          <h4>
            <i className="material-icons">donut_small</i>
            Beautiful Precious Gems
          </h4>
          <p>This once again is totally just a bunch of words and stuff that is quite important for everything still</p>
        </div>
        <div className="about-box">
          <h4>
            <i className="material-icons">check</i>
            Custom & Quality Designs
          </h4>
          <p>This once again is totally just a bunch of words and stuff that is quite important for everything still</p>
        </div>
      </div>
    </div>
    <div className="manufacturing">
      <img className="manufacturing__image" src={Setting} alt="Setting Stone" />
      <div className="manufacturing-container">
        <h2 className="manufacturing__title">
          Refined and Quality Manufacturing Process
        </h2>
        <p className="manufacturing__text">
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non est nulla. Ut nisl risus, molestie sit amet tincidunt sed, aliquam a ipsum. Praesent vulputate volutpat molestie.
        </p>
      </div>
      <div className="manufacturing--background" />
    </div>
    <div className="designs">
      <div className="designs__container">
        <h4 className="designs__title">
          Striking and Stunning Designs
        </h4>
        <p className="designs__text">
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non est nulla. Ut nisl risus, molestie sit amet tincidunt sed, aliquam a ipsum. Praesent vulputate volutpat molestie.
        </p>
      </div>
      <img src={Design} alt="Design Bracelet" />
      <div className="designs--background" />
    </div>
    <div className="contact">
      <h4>
        Contact Us
      </h4>
      <p>
        This is a smaller amount of text. But regardless it's still important to have.
      </p>
      <a href="#something" className="contact-button">Contact</a>
    </div>
    <Footer />
  </MainStore>
);

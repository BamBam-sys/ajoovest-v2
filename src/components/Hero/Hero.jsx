import React from 'react';
import heroImg from '../../assets/images/hero-img.png';
import underline from '../../assets/images/fancy-underline.png';
import './hero.scss';
import { Testimonials } from '../../components';

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div className="text">
          <h1 className="headerOne headerText">
            {' '}
            A better way to do{' '}
            <div className="fancyUnderline">
              <img src={underline} alt="line" />
            </div>
          </h1>

          <span className="unique headerOne">Ajoo</span>
          <p className="bodyText">
            Digitize payments, Formalize remittances! Start monitoring your Ajoo
            contributions at the click of a button
          </p>
        </div>
        <div className="testimonial">
          <Testimonials />
        </div>
      </div>
      <div className="right">
        <img className="img" src={heroImg} alt="naira notes" />
      </div>
    </div>
  );
};

export default Hero;

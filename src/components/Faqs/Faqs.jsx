import React from 'react';
import { Accordion } from '../../components';
import faqImg from '../../assets/images/faq-img.png';
import { ReactComponent as Dots } from '../../assets/images/blue-dots.svg';
import './faqs.scss';

const Faqs = () => {
  return (
    <div className="faqs container">
      <div className="text">
        <h2 className="headerTwo">Frequently Asked Questions</h2>
        <Accordion />
      </div>
      <div className="img">
        <img src={faqImg} alt="trader" />
        <Dots className="dots" />
      </div>
    </div>
  );
};

export default Faqs;

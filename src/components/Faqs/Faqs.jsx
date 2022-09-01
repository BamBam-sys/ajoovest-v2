import React from 'react';
import { Accordion } from '../../components';
import faqImg from '../../assets/images/faq-img.png';
import { ReactComponent as Dots } from '../../assets/images/blue-dots.svg';
import './faqs.scss';

const Faqs = () => {
  const faqs = [
    {
      label: 'What is Ajoovest',
      content: `Visit your preferred AjooVest/POS agent (or have them come to you) 
      Give the agent cash and tell him purpose (interface allows user to save 
        for Ajoo, Target, or specified reason)`,
      id: 1,
    },
    {
      label: 'Is Ajoovest a Savings App?',
      content: `Visit your preferred AjooVest/POS agent (or have them come to you) 
      Give the agent cash and tell him purpose (interface allows user to save 
        for Ajoo, Target, or specified reason)`,
      id: 2,
    },
    {
      label: 'Is Ajoovest just for Ajoo Contributors?',
      content: `Visit your preferred AjooVest/POS agent (or have them come to you) 
      Give the agent cash and tell him purpose (interface allows user to save 
        for Ajoo, Target, or specified reason)`,
      id: 3,
    },
    {
      label: 'What are the Benenfits of Ajoovest',
      content: `Visit your preferred AjooVest/POS agent (or have them come to you) 
      Give the agent cash and tell him purpose (interface allows user to save 
        for Ajoo, Target, or specified reason)`,
      id: 4,
    },
  ];

  return (
    <div className="faqSection container">
      <div className="text">
        <h2 className="headerTwo">Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <Accordion label={faq.label} content={faq.content} key={faq.id} />
        ))}
      </div>
      <div className="img">
        <img src={faqImg} alt="trader" />
        <Dots className="dots" />
      </div>
    </div>
  );
};

export default Faqs;

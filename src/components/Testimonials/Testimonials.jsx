import React from 'react';
import userImg from '../../assets/images/testimonial-img.png';
import './testimonials.scss';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={userImg} alt="user" className="userImg" />
      <div className="dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="text">
        <div className="bodySmall">
          “Ajoovest has helped me track my contributions more effectively.”
        </div>
        <span className="bodySmall">Iya Oloja, Eko Market</span>
      </div>
    </div>
  );
};

export default Testimonials;

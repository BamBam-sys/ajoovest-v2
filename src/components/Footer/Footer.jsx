import React from 'react';
import { Link } from 'react-router-dom';
import { Brand, Button } from '../../common';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footerSection container">
      <div className="brand">
        <Brand />
        <span className="text">
          Building an all inclusive digital economy Africa and beyond.
        </span>
      </div>

      <div className="product">
        <h4 className="bodyBold">Product</h4>
        <Link to={'/'} className="link bodyText">
          AjooVest for You
        </Link>
        <Link to={'/'} className="link bodyText">
          AjooVest Agent
        </Link>
        <Link to={'/'} className="link bodyText">
          AjooVest for Enterprise
        </Link>
      </div>

      <div className="features">
        <h4 className="bodyBold">Features</h4>
        <Link to={'/'} className="link bodyText">
          Credit History
        </Link>
        <Link to={'/'} className="link bodyText">
          savings
        </Link>
        <Link to={'/'} className="link bodyText">
          Loans
        </Link>
        <Link to={'/'} className="link bodyText">
          Micro-insurance
        </Link>
        <Link to={'/'} className="link bodyText">
          Micro-pension
        </Link>
        <Link to={'/'} className="link bodyText">
          Micro-mortgage
        </Link>
        <Link to={'/'} className="link bodyText">
          Business Tools
        </Link>
      </div>

      <div className="resources">
        <h4 className="bodyBold">Resources</h4>
        <Link to={'/'} className="link bodyText">
          Blog
        </Link>
        <Link to={'/'} className="link bodyText">
          FAQ
        </Link>
      </div>

      <div className="socials">
        <h4 className="bodyBold">Socials</h4>
        <Link to={'/'} className="link bodyText">
          Instagram
        </Link>
        <Link to={'/'} className="link bodyText">
          Facebook
        </Link>
        <Link to={'/'} className="link bodyText">
          LinkedIn
        </Link>
        <Link to={'/'} className="link bodyText">
          Whatsapp
        </Link>
        <Link to={'/'} className="link bodyText">
          Live Chat
        </Link>
      </div>
      <form>
        <div className="formElement">
          <label className="bodyBold" htmlFor="email">
            Join the waitlist!
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </div>
        <div className="btn">
          <Button text={'submit'} />
        </div>
      </form>
    </div>
  );
};

export default Footer;

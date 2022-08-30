import React, { useState } from 'react';
import { Brand, Button } from '../../common';

import { BiChevronDown } from 'react-icons/bi';
import { BiChevronUp } from 'react-icons/bi';
import './nav.scss';

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="navbar">
      <div className="brand">
        <Brand />
      </div>
      <ul className="navLinks bodySmall">
        <li className="buttonText active">Home</li>
        <li className="products" onClick={() => setDropdown(!dropdown)}>
          Products{' '}
          <span>
            {dropdown ? (
              <BiChevronUp className="dropdownIcon" />
            ) : (
              <BiChevronDown className="dropdownIcon" />
            )}
          </span>
        </li>
        <li className="">About</li>
        <li className="">FAQs</li>
        {dropdown && (
          <ul className="dropdown">
            <li>Ajoovest for you</li>
            <li>Ajoovest Agent</li>
            <li>Ajoovest Enterprise</li>
          </ul>
        )}
      </ul>
      <div className="btn">
        <Button text={'Get Started'} />
      </div>
    </div>
  );
};

export default Nav;

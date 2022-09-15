import React, { useEffect, useRef, useState } from 'react';
import { Brand, Button } from '../../common';

import { BiChevronDown } from 'react-icons/bi';
import { BiChevronUp } from 'react-icons/bi';
import { BsList } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';
import './nav.scss';

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    !sideNav
      ? (document.body.style.overflowY = 'scroll')
      : (document.body.style.overflowY = 'hidden');
  }, [sideNav]);

  const handleSideNav = () => setSideNav(!sideNav);

  const openSideNav = sideNav ? 'openSideNav' : '';

  return (
    <div className={`navbar ${openSideNav}`}>
      <div className="brand">
        <Brand />
      </div>
      <div className="nav">
        <ul className="navLinks bodySmall">
          <div className="mobileBrand">
            <Brand />
            <BsX className="closeIcon" onClick={handleSideNav} />
          </div>
          <li className="link buttonText active">Home</li>
          <li
            className="link products"
            onClick={() => {
              setDropdown(!dropdown);
              setAccordionOpen(!accordionOpen);

              accordionOpen
                ? (ref.current.style.height = 0)
                : (ref.current.style.height = ref.current.scrollHeight + 'px');
            }}
          >
            <div className="sideNavAccordion">
              <span className="label">Products</span>
              <ul className="mobileDropdown" ref={ref}>
                <li>Ajoovest for you</li>
                <li>Ajoovest Agent</li>
                <li>Ajoovest Enterprise</li>
              </ul>
            </div>
            <span>
              {dropdown ? (
                <BiChevronUp className="dropdownIcon" />
              ) : (
                <BiChevronDown className="dropdownIcon" />
              )}
            </span>
          </li>
          <li className="link">About</li>
          <li className="link">FAQs</li>
          {dropdown && (
            <ul className="dropdown">
              <li>Ajoovest for you</li>
              <li>Ajoovest Agent</li>
              <li>Ajoovest Enterprise</li>
            </ul>
          )}
        </ul>
        <div className="btn">
          <Button styles={{ width: '100%' }} text={'Get Started'} />
        </div>
      </div>

      <BsList className="menu" onClick={handleSideNav} />
    </div>
  );
};

export default Nav;

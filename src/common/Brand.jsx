import React from 'react';
import { StyledBrand } from './styled';
import brandLogo from '../assets/images/brand-logo.png';

const Brand = () => {
  return (
    <StyledBrand className="brand">
      <div className="brandLogo">
        <img className="up" src={brandLogo} alt="logo" />
        <img className="down" src={brandLogo} alt="logo" />{' '}
      </div>
      <span>|</span>
      <div className="brandText">Ajoovest</div>
    </StyledBrand>
  );
};

export default Brand;

import React from 'react';
import { StyledBrand } from './styled';
import brandLogo from '../assets/images/ajoovest-logo.png';

const Brand = () => {
  return (
    <StyledBrand className="brand">
      <img className="brandLogo" src={brandLogo} alt="logo" />
    </StyledBrand>
  );
};

export default Brand;

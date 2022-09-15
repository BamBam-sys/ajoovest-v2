import React from 'react';
import { StyledButton } from './styled';

const Button = ({ text, styles }) => {
  return <StyledButton style={styles}>{text}</StyledButton>;
};

export default Button;

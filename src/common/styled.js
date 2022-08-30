import styled from 'styled-components';

const colors = {
  bgLightColor: '#fafcfe',
  primaryBrandColor: '#20b2aa',
  secondaryBrandColor: '#008b8b',
  // secondaryColor: '#0a9396',
  textColor: '#4a4a68',
  subtleTextColor: '#8c8ca1',
  altTextColor: '#808080',
  primaryWhiteColor: '#fff9f6',
  accentColor: '#ecf1f4',
};

const fonts = {
  metropolis: `'Metropolis', sans - serif`,
  sourceSansPro: `'Source Sans Pro', sans-serif`,
  centuryGothic: `'Century Gothic', sans-serif`,
  workSans: `'Work Sans', sans-serif`,
};

export const StyledButton = styled.button`
  width: 100%;
  border: none;
  padding: 1.5rem 4.25rem;
  background: ${colors.primaryBrandColor};
  color: ${colors.primaryWhiteColor};
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 7px;
  transition: all ease-in-out 400ms;
  cursor: pointer;
  &:hover {
    background: ${colors.secondaryBrandColor};
  }
`;

export const StyledBrand = styled.div`
  display: flex;
  align-items: center;

  .brandLogo {
    img {
      width: 1.3rem;
      ${'' /* transform: translateY(-5px); */}
    }
    .up {
      transform: translateY(4px);
    }
    .down {
      transform: translateY(-4px);
    }
  }
`;

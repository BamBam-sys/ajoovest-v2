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

// eslint-disable-next-line no-unused-vars
const fonts = {
  metropolis: `'Metropolis', sans - serif`,
  sourceSansPro: `'Source Sans Pro', sans-serif`,
  centuryGothic: `'Century Gothic', sans-serif`,
  workSans: `'Work Sans', sans-serif`,
};

export const StyledButton = styled.button`
  ${'' /* width: 100%; */}
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

export const StyledDownloadButton = styled.button`
  width: 100%;
  border: 1px solid #c4c4c4;
  background: #fff;
  padding: 0.8rem 1.8rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 1.2rem;
  cursor: pointer;

  .icon {
    width: 2rem;
    grid-row: 1/3;
    align-self: center;
  }

  .text {
    justify-self: start;
    font-size: 1.2rem;
    line-height: 14.4px;
  }

  .device {
    justify-self: start;
    font-size: 2rem;
    line-height: 24px;
  }
`;

export const StyledBrand = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  .brandLogo {
    width: 1.3rem;

    .up {
      transform: translateY(25%);
    }
    .down {
      transform: translateY(-25%);
    }
  }
`;

import { css } from 'styled-components';

const breakpoints = {
  giant: 1200,
  xl: 1200,
  desktop: 992,
  lg: 992,
  tablet: 768,
  md: 768,
  phone: 576,
  sm: 576,
  smaller: 575,
  xs: 575,
};

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  if (label === 'xs' || label === 'smaller') {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[xs]}px) {
        ${css(...args)}
      }
    `;
  } else {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)}
      }
    `;
  }
  return accumulator;
}, {});

export default media;

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
};

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;

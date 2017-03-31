import { css } from 'styled-components';

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  // const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;

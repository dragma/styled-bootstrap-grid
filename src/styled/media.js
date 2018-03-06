import { css } from 'styled-components';

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  if (label === 'phone') {
    accumulator[label] = (...args) => css`
	  @media (max-width: ${sizes.tablet - 1}px) {
	    ${css(...args)}
	  }
	`;
  } else {
    accumulator[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;
  }
  return accumulator;
}, {});

export default media;

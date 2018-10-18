import { css } from 'styled-components';

const defaultBreakpoints = {
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

const getBreakpoints = (props) => {
  if (
    props.theme
    && props.theme.styledBootstrapGrid
    && props.theme.styledBootstrapGrid.breakpoints
  ) {
    return props.theme.styledBootstrapGrid.breakpoints;
  }
  return defaultBreakpoints;
};

const media = Object.keys(defaultBreakpoints).reduce((accumulator, label) => {
  if (label === 'xs' || label === 'smaller') {
    accumulator[label] = (...args) => css`
      @media (max-width: ${props => getBreakpoints(props).xs}px) {
        ${css(...args)}
      }
    `;
  } else {
    accumulator[label] = (...args) => css`
      @media (min-width: ${props => getBreakpoints(props)[label]}px) {
        ${css(...args)}
      }
    `;
  }
  return accumulator;
}, {});

export default media;

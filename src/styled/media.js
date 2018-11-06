import { css } from 'styled-components';

export const defaultBreakpoints = {
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
    return {
      ...defaultBreakpoints,
      ...props.theme.styledBootstrapGrid.breakpoints,
    };
  }
  return defaultBreakpoints;
};

const media = Object.keys(defaultBreakpoints).reduce((accumulator, label) => {
  accumulator.max = accumulator.max || {};
  accumulator.min = accumulator.min || {};
  const minMedia = (...args) => css`
    @media (min-width: ${props => getBreakpoints(props)[label]}px) {
      ${css(...args)}
    }
  `;
  const maxMedia = (...args) => css`
    @media (max-width: ${props => getBreakpoints(props)[label]}px) {
      ${css(...args)}
    }
  `;
  if (label === 'xs' || label === 'smaller') {
    accumulator[label] = maxMedia;
  } else {
    accumulator[label] = minMedia;
  }
  accumulator.max[label] = maxMedia;
  accumulator.min[label] = minMedia;
  return accumulator;
}, {});

export default media;

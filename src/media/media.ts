import { css, CSSObject } from 'styled-components';

import makeAliases from '../aliases';
import { Media, MediaTagFunction, MediaObject, GetBreakpointsFn } from './types';
import { Breakpoints } from '../components/ThemeProvider';

const defaultBreakpoints = makeAliases({
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 575,
}) as Breakpoints;

const getBreakpoints: GetBreakpointsFn = props => ({
  ...defaultBreakpoints,
  ...((props.theme &&
    props.theme.styledBootstrapGrid &&
    props.theme.styledBootstrapGrid.breakpoints) ||
    {}),
});

const media: MediaObject = (Object.keys(defaultBreakpoints) as Media[]).reduce(
  (accumulator, label) => {
    const minMedia: MediaTagFunction = (strings, ...interpolations) => css`
      @media (min-width: ${props => getBreakpoints(props)[label]}px) {
        ${css(strings as CSSObject | TemplateStringsArray, ...interpolations)}
      }
    `;

    const maxMedia: MediaTagFunction = (strings, ...interpolations) => css`
      @media (max-width: ${props => (getBreakpoints(props)[label] - 1)}px) {
        ${css(strings as CSSObject | TemplateStringsArray, ...interpolations)}
      }
    `;

    accumulator[label] = label === 'xs' || label === 'smaller' ? maxMedia : minMedia;
    accumulator.max[label] = maxMedia;
    accumulator.min[label] = minMedia;

    return accumulator;
  },
  { min: {}, max: {} } as MediaObject,
);

export default media;

// @flow
import * as React from 'react';

import { defaultBreakpoints } from '../values';
import type { BreakpointsType } from '../values';
// @flow
import BaseCSS from './BaseCSS';

type StyledBootstrapGridProviderType = {
  children: React.Node,
  breakpoints: ?BreakpointsType
};

export const StyledBootstrapGridContext: React$Context<
  void | {breakpoints: BreakpointsType, ...}
> = React.createContext();

const StyledBootstrapGridProvider = (
  { children, breakpoints = {} }: StyledBootstrapGridProviderType,
): React$Node => {
  const computedBreakpoints: BreakpointsType = React.useMemo((): BreakpointsType => ({
    ...defaultBreakpoints,
    ...breakpoints,
  }), [breakpoints]);

  console.log(computedBreakpoints, breakpoints);

  const value = {
    breakpoints: computedBreakpoints,
  };

  return (
    <StyledBootstrapGridContext.Provider value={value}>
      <BaseCSS />
      {children}
    </StyledBootstrapGridContext.Provider>
  );
};

export default StyledBootstrapGridProvider;

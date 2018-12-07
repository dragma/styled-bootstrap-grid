import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DefaultContainerMaxWidth, MyTheme, ThemeProps } from 'components/ThemeProvider/types';
import { isNumber } from 'utils';
import makeAliases from 'aliases';
import { MediaAliases } from 'media.types';

export const defaultContainerMaxWidth: DefaultContainerMaxWidth = {
  xl: 1140,
  lg: 960,
  md: 720,
  sm: 540,
  xs: 540,
};

export default (props: ThemeProps) => {
  const { gridTheme: theme = {} } = props;

  const getContainerPadding = () => {
    if (isNumber(myTheme.container.padding)) {
      return myTheme.container.padding;
    }

    return 15;
  };

  const getContainerMaxWidth = (breakpoint: MediaAliases) => {
    if (isNumber(myTheme.container.maxWidth[breakpoint])) {
      return myTheme.container.maxWidth[breakpoint];
    }

    return defaultContainerMaxWidth[breakpoint];
  };

  const getRowPadding = () => {
    if (myTheme.row && isNumber(myTheme.row.padding)) {
      return myTheme.row.padding;
    }

    return 15;
  };

  const getColPadding = () => {
    if (myTheme.col && isNumber(myTheme.col.padding)) {
      return myTheme.col.padding;
    }

    return 15;
  };

  const myTheme: MyTheme = {
    breakpoints: makeAliases(theme.breakpoints),
    col: theme.col,
    row: theme.row,
    container: {
      ...theme.container,
      maxWidth: {
        ...makeAliases(defaultContainerMaxWidth),
        ...makeAliases((theme.container || {}).maxWidth || {}),
      },
    },
    getContainerPadding,
    getContainerMaxWidth,
    getRowPadding,
    getColPadding,
  };

  return <ThemeProvider theme={{ styledBootstrapGrid: myTheme }} {...props} />;
};

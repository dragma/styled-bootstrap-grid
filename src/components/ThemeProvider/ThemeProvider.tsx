import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DefaultContainerMaxWidth, StyledBootstrapGrid, ThemeProps } from './types';
import { isNumber } from '../../utils';
import makeAliases from '../../aliases';
import { MediaAliases } from '../../media/types';

export const defaultContainerMaxWidth: DefaultContainerMaxWidth = {
  xxl: 1141,
  xl: 1140,
  lg: 960,
  md: 720,
  sm: 540,
  xs: 540,
};

export default (props: ThemeProps) => {
  const { gridTheme: theme = {} } = props;

  const getContainerPadding = () => {
    if (isNumber(styledBootstrapGridTheme.container.padding)) {
      return styledBootstrapGridTheme.container.padding;
    }

    return 15;
  };

  const getContainerMaxWidth = (breakpoint: MediaAliases) => {
    if (isNumber(styledBootstrapGridTheme.container.maxWidth[breakpoint])) {
      return styledBootstrapGridTheme.container.maxWidth[breakpoint];
    }

    return defaultContainerMaxWidth[breakpoint];
  };

  const getRowPadding = () => {
    if (styledBootstrapGridTheme.row && isNumber(styledBootstrapGridTheme.row.padding)) {
      return styledBootstrapGridTheme.row.padding;
    }

    return 15;
  };

  const getColPadding = () => {
    if (styledBootstrapGridTheme.col && isNumber(styledBootstrapGridTheme.col.padding)) {
      return styledBootstrapGridTheme.col.padding;
    }

    return 15;
  };

  const getGridColumns = () => {
    if (styledBootstrapGridTheme && isNumber(styledBootstrapGridTheme.gridColumns)) {
      return styledBootstrapGridTheme.gridColumns;
    }

    return 12;
  };

  const styledBootstrapGridTheme: StyledBootstrapGrid = {
    gridColumns: theme.gridColumns,
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
    getGridColumns,
  };

  return <ThemeProvider theme={{ styledBootstrapGrid: styledBootstrapGridTheme }} {...props} />;
};

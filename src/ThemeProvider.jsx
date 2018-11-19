import React from 'react';
import { ThemeProvider } from 'styled-components';
import makeAliases from './aliases'

const defaultContainerMaxWidth = {
  xl: 1140,
  lg: 960,
  md: 720,
  sm: 540,
  xs: 540,
}
export default (props) => {
  const { gridTheme: theme = {} } = props;
  const getContainerPadding = () => {
    if (myTheme.styledBootstrapGrid.container) {
      if (!Number.isNaN(parseInt(myTheme.styledBootstrapGrid.container.padding, 10))) {
        return myTheme.styledBootstrapGrid.container.padding;
      }
    }
    return 15;
  };
  const getContainerMaxWidth = (breakpoint) => {
    if (myTheme.styledBootstrapGrid.container && myTheme.styledBootstrapGrid.container.maxWidth) {
      const size = myTheme.styledBootstrapGrid.container.maxWidth[breakpoint];
      if (!Number.isNaN(parseInt(size, 10))) {
        return size;
      }
      return defaultContainerMaxWidth[breakpoint];
    }
  };
  const getRowPadding = () => {
    if (myTheme.styledBootstrapGrid.row) {
      if (!Number.isNaN(parseInt(myTheme.styledBootstrapGrid.row.padding, 10))) {
        return myTheme.styledBootstrapGrid.row.padding;
      }
    }
    return 15;
  };
  const getColPadding = () => {
    if (myTheme.styledBootstrapGrid.col) {
      if (!Number.isNaN(parseInt(myTheme.styledBootstrapGrid.col.padding, 10))) {
        return myTheme.styledBootstrapGrid.col.padding;
      }
    }
    return 15;
  };

  const myTheme = {
    styledBootstrapGrid: {
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
    },
  };

  return <ThemeProvider theme={myTheme} {...props} />;
};

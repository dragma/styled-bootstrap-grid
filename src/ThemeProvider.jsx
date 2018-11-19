import React from 'react';
import { ThemeProvider } from 'styled-components';

const defaultContainerMaxWidth = {
  xl: 1140,
  lg: 960,
  md: 720,
  sm: 540,
  xs: 540,
}
export default (props) => {
  const { gridTheme: theme = {} } = props;
  const myTheme = {
    styledBootstrapGrid: {
      breakpoints: theme.breakpoints,
      col: theme.col,
      row: theme.row,
      container: {
        maxWidth: {
          ...defaultContainerMaxWidth
        },
        ...theme.container,
      },
      getContainerPadding: () => {
        if (theme.container) {
          if (!Number.isNaN(parseInt(theme.container.padding, 10))) {
            return theme.container.padding;
          }
        }
        return 15;
      },
      getContainerMaxWidth: (breakpoint) => {
        if (theme.container && theme.container.maxWidth) {
          const size = theme.container.maxWidth[breakpoint];
          if (!Number.isNaN(parseInt(size, 10))) {
            return size;
          }
          return defaultContainerMaxWidth[breakpoint];
        }
      },
      getRowPadding: () => {
        if (theme.row) {
          if (!Number.isNaN(parseInt(theme.row.padding, 10))) {
            return theme.row.padding;
          }
        }
        return 15;
      },
      getColPadding: () => {
        if (theme.col) {
          if (!Number.isNaN(parseInt(theme.col.padding, 10))) {
            return theme.col.padding;
          }
        }
        return 15;
      },
    },
  };

  return <ThemeProvider theme={myTheme} {...props} />;
};

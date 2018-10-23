import React from 'react';
import { ThemeProvider } from 'styled-components';

export default (props) => {
  const { gridTheme: theme = {} } = props;
  const myTheme = {
    styledBootstrapGrid: {
      breakpoints: theme.breakpoints,
      col: theme.col,
      row: theme.row,
      container: theme.container,
      getContainerPadding: () => {
        if (theme.container) {
          if (!Number.isNaN(parseInt(theme.container.padding, 10))) {
            return theme.container.padding;
          }
        }
        return 15;
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

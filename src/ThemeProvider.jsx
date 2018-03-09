import React from 'react';
import { ThemeProvider } from 'styled-components';

export default props => {
  const theme = props.gridTheme || {};
  const myTheme = {
    styledBootstrapGrid: {
      col: theme.col || {},
      row: theme.row || {},
      container: theme.container || {},
      getContainerPadding: () => {
        if (theme.container) {
          if (!isNaN(parseInt(theme.container.padding, 10))) {
            return theme.container.padding
          }
        }
        return 15;
      },
      getRowPadding: () => {
        if (theme.row) {
          if (!isNaN(parseInt(theme.row.padding, 10))) {
            return theme.row.padding
          }
        }
        return 15;
      },
      getColPadding: () => {
        if (theme.col) {
          if (!isNaN(parseInt(theme.col.padding, 10))) {
            return theme.col.padding
          }
        }
        return 15;
      }
    }
  };
  return <ThemeProvider theme={myTheme} {...props} />;
}

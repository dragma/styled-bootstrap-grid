import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const theme = {
  gridColumns: 12,
  row: {
    padding: 10,
  },
  col: {
    padding: 10,
  },
  container: {
    padding: 10,
    maxWidth: {
      md: 700,
      xl: 800,
      xxl: 1141,
    },
  },
};

ReactDOM.render(
  <ThemeProvider theme={{ test: 124 }}>
    <GridThemeProvider gridTheme={theme}>
      <App />
    </GridThemeProvider>
  </ThemeProvider>,
  document.getElementById('root'), //eslint-disable-line
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

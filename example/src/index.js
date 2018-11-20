import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = {
  row: {
    padding: 10,
  },
  col: {
    padding: 10,
  },
  container: {
    padding: 10,
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
registerServiceWorker();

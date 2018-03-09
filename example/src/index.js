import React from 'react';
import ReactDOM from 'react-dom';
import { injectLayoutBaseCSS, GridThemeProvider } from './styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectLayoutBaseCSS();

// console.log('ThemeProvider', ThemeProvider)

const theme = {
  row: {
    padding: 0,
  },
  col: {
    padding: 0,
  },
  container: {
    padding: 0,
  },
}

// ReactDOM.render(<GridThemeProvider gridTheme={theme}><App /></GridThemeProvider>, document.getElementById('root'));
ReactDOM.render(<ThemeProvider theme={{ test: 124 }}><GridThemeProvider gridTheme={theme}><App /></GridThemeProvider></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();

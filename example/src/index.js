import React from 'react';
import ReactDOM from 'react-dom';
import { GridThemeProvider } from './styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// console.log('ThemeProvider', ThemeProvider)

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
}

// ReactDOM.render(<GridThemeProvider gridTheme={theme}><App /></GridThemeProvider>, document.getElementById('root'));
ReactDOM.render(<ThemeProvider theme={{ test: 124 }}><GridThemeProvider gridTheme={theme}><App /></GridThemeProvider></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { injectLayoutBaseCSS } from 'styled-bootstrap-grid';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectLayoutBaseCSS();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const defaultCSS = `
  @-ms-viewport {
    width: device-width;
  }

  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
`;

export default createGlobalStyle`
  ${defaultCSS}
  ${p => p.css}
`;;

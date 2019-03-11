import { createGlobalStyle } from 'styled-components';

import { BaseCSSProps } from './types';

export default createGlobalStyle<BaseCSSProps>`
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

  ${p => p.css}
`;

import { createGlobalStyle } from 'styled-components';

const BaseCSS = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

export default BaseCSS;

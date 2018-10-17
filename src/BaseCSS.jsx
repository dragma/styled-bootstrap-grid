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

export default ({css}) => {
  if (css == null) {
    return createGlobalStyle`${defaultCSS}`;
  }
  return createGlobalStyle`
    ${defaultCSS}
    ${css}
  `;
}

import { injectGlobal } from 'styled component';

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

export default (css = null, append = false) => {
  if (css === null) {
    return injectGlobal`${defaultCSS}`;
  }
  else if (append) {
    return injectGlobal`
      ${defaultCSS}
      ${css}
    `;
  }
  return injectGlobal`${css}`
}

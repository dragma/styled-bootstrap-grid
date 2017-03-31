import styled from 'styled-components';

import media from './media';

const css = {
  col: `
    -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
            flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%;
  `,
  1: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.333333%;
        -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
    max-width: 8.333333%;
  `,
  2: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.666667%;
        -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
    max-width: 16.666667%;
  `,
  3: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%;
  `,
  4: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.333333%;
        -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
    max-width: 33.333333%;
  `,
  5: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.666667%;
        -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
    max-width: 41.666667%;
  `,
  6: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%;
  `,
  7: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.333333%;
        -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
    max-width: 58.333333%;
  `,
  8: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.666667%;
        -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
    max-width: 66.666667%;
  `,
  9: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%;
  `,
  10: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.333333%;
        -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
    max-width: 83.333333%;
  `,
  11: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.666667%;
        -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
    max-width: 91.666667%;
  `,
  12: `
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  `,
  offset: {
    1: 'margin-left: 8.333333%;',
    2: 'margin-left: 16.666667%;',
    3: 'margin-left: 25%;',
    4: 'margin-left: 33.333333%;',
    5: 'margin-left: 41.666667%;',
    6: 'margin-left: 50%;',
    7: 'margin-left: 58.333333%;',
    8: 'margin-left: 66.666667%;',
    9: 'margin-left: 75%;',
    10: 'margin-left: 83.333333%;',
    11: 'margin-left: 91.666667%;',
  },
  push: {
    1: 'left: 8.333333%;',
    2: 'left: 16.666667%;',
    3: 'left: 25%;',
    4: 'left: 33.333333%;',
    5: 'left: 41.666667%;',
    6: 'left: 50%;',
    7: 'left: 58.333333%;',
    8: 'left: 66.666667%;',
    9: 'left: 75%;',
    10: 'left: 83.333333%;',
    11: 'left: 91.666667%;',
  },
};

const buildCSS = (colVal, offsetVal, pushVal) => {
  let buildCss = '';
  if (colVal) {
    buildCss = `
      ${buildCss}
      ${css[colVal]}
    `;
  }
  if (offsetVal) {
    buildCss = `
      ${buildCss}
      ${css.offset[offsetVal]}
    `;
  }
  if (pushVal) {
    buildCss = `
      ${buildCss}
      ${css.push[pushVal]}
    `;
  }
  return buildCss;
};

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  ${
    props => (
      props.sm
      ? media.phone`${buildCSS(props.sm, props.smOffset, props.smPush)}`
      : null
    )
  }
  ${
    props => (
      props.md
      ? media.tablet`${buildCSS(props.md, props.mdOffset, props.mdPush)}`
      : null
    )
  }
  ${
    props => (
      props.lg
      ? media.desktop`${buildCSS(props.lg, props.lgOffset, props.lgPush)}`
      : null
    )
  }
  ${
    props => (
      props.xl
      ? media.giant`${buildCSS(props.xl, props.xlOffset, props.xlPush)}`
      : null
    )
  }
`;

export default Col;

import styled from 'styled-components';

import media from './media';

const css = {
  col: {
    true: `
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    `,
    1: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    `,
    2: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    `,
    3: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
        `,
    4: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
        `,
    5: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
        `,
    6: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    `,
    7: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    `,
    8: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    `,
    9: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    `,
    10: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    `,
    11: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    `,
    12: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    `,
  }
}

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  ${p => p.col && css.col[p.col]}
`;

export default Col;

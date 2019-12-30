import { ColCss } from './types';

const css: ColCss = {
  col: {
    true: `
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    `,
    auto: `
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    `,
    1: `
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    `,
    2: `
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    `,
    3: `
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
        `,
    4: `
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
        `,
    5: `
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
        `,
    6: `
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    `,
    7: `
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    `,
    8: `
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    `,
    9: `
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    `,
    10: `
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    `,
    11: `
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    `,
    12: `
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    `,
  },
  offset: {
    0: 'margin-left: 0;',
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
  order: {
    first: `
      -ms-flex-order: -1;
      order: -1;
    `,
    last: `
      -ms-flex-order: 13;
      order: 13;
    `,
    0: `
      -ms-flex-order: 0;
      order: 0;
    `,
    1: `
      -ms-flex-order: 1;
      order: 1;
    `,
    2: `
      -ms-flex-order: 2;
      order: 2;
    `,
    3: `
      -ms-flex-order: 3;
      order: 3;
    `,
    4: `
      -ms-flex-order: 4;
      order: 4;
    `,
    5: `
      -ms-flex-order: 5;
      order: 5;
    `,
    6: `
      -ms-flex-order: 6;
      order: 6;
    `,
    7: `
      -ms-flex-order: 7;
      order: 7;
    `,
    8: `
      -ms-flex-order: 8;
      order: 8;
    `,
    9: `
      -ms-flex-order: 9;
      order: 9;
    `,
    10: `
      -ms-flex-order: 10;
      order: 10;
    `,
    11: `
      -ms-flex-order: 11;
      order: 11;
    `,
    12: `
      -ms-flex-order: 12;
      order: 12;
    `,
  },
  alignSelf: {
    auto: `
      -ms-flex-item-align: auto;
      align-self: auto;
    `,
    start: `
      -ms-flex-item-align: start;
      align-self: flex-start;
    `,
    end: `
      -ms-flex-item-align: end;
      align-self: flex-end;
    `,
    center: `
      -ms-flex-item-align: center;
      align-self: center;
    `,
    baseline: `
      -ms-flex-item-align: baseline;
      align-self: baseline;
    `,
    stretch: `
      -ms-flex-item-align: stretch;
      align-self: stretch;
    `,
  },
  display: {
    none: `
      display: none;
    `,
  },
  noGutter: `
    padding-right: 0;
    padding-left: 0;
  `,
};

export default css;

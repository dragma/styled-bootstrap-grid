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
    auto: `
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
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
  },
  offset: {
    0: `margin-left: 0;`,
    1: `margin-left: 8.333333%;`,
    2: `margin-left: 16.666667%;`,
    3: `margin-left: 25%;`,
    4: `margin-left: 33.333333%;`,
    5: `margin-left: 41.666667%;`,
    6: `margin-left: 50%;`,
    7: `margin-left: 58.333333%;`,
    8: `margin-left: 66.666667%;`,
    9: `margin-left: 75%;`,
    10: `margin-left: 83.333333%;`,
    11: `margin-left: 91.666667%;`,
  }
}

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  ${p => p.col && css.col[p.col]}
  ${p => p.offset && css.offset[p.offset]}
  ${p => p.auto && css.col.auto}

  ${p => p.sm && media.sm`${css.col[p.sm]}`}
  ${p => !isNaN(parseInt(p.smOffset, 10)) && media.sm`${css.offset[p.smOffset]}`}
  ${p => p.smAuto && media.sm`${css.col.auto}`}

  ${p => p.md && media.md`${css.col[p.md]}`}
  ${p => !isNaN(parseInt(p.mdOffset, 10)) && media.md`${css.offset[p.mdOffset]}`}
  ${p => p.mdAuto && media.md`${css.col.auto}`}

  ${p => p.lg && media.lg`${css.col[p.lg]}`}
  ${p => !isNaN(parseInt(p.lgOffset, 10)) && media.lg`${css.offset[p.lgOffset]}`}
  ${p => p.lgAuto && media.lg`${css.col.auto}`}

  ${p => p.xl && media.xl`${css.col[p.xl]}`}
  ${p => !isNaN(parseInt(p.xlOffset, 10)) && media.xl`${css.offset[p.xlOffset]}`}
  ${p => p.xlAuto && media.xl`${css.col.auto}`}
`;

export default Col;

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
  },
  order: {
    first: `
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    `,
    last: `
      -webkit-box-ordinal-group: 14;
      -ms-flex-order: 13;
      order: 13;
    `,
    0: `
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    `,
    1: `
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    `,
    2: `
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    `,
    3: `
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    `,
    4: `
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    `,
    5: `
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    `,
    6: `
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    `,
    7: `
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    `,
    8: `
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    `,
    9: `
      -webkit-box-ordinal-group: 10;
      -ms-flex-order: 9;
      order: 9;
    `,
    10: `
      -webkit-box-ordinal-group: 11;
      -ms-flex-order: 10;
      order: 10;
    `,
    11: `
      -webkit-box-ordinal-group: 12;
      -ms-flex-order: 11;
      order: 11;
    `,
    12: `
      -webkit-box-ordinal-group: 13;
      -ms-flex-order: 12;
      order: 12;
    `,
  },
  alignSelf: {
    auto: `
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    `,
    start: `
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    `,
    end: `
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    `,
    center: `
      -ms-flex-item-align: center !important;
      align-self: center !important;
    `,
    baseline: `
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    `,
    stretch: `
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    `,
  },
  noGutter: `
    margin-right: 0;
    margin-left: 0;
  `,
}

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${p => {
    if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getColPadding) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getColPadding();
  }}px;
  padding-left: ${p => {
    if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getColPadding) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getColPadding();
  }}px;

  ${p => p.noGutter && css.noGutter}

  ${p => p.col && css.col[p.col]}
  ${p => p.offset && css.offset[p.offset]}
  ${p => p.auto && css.col.auto}
  ${p => p.alignSelf && css.alignSelf[p.alignSelf]}
  ${p => p.order && css.order[p.order]}

  ${p => p.sm && media.sm`${css.col[p.sm]}`}
  ${p => !isNaN(parseInt(p.smOffset, 10)) && media.sm`${css.offset[p.smOffset]}`}
  ${p => p.smAuto && media.sm`${css.col.auto}`}
  ${p => p.smAlignSelf && media.sm`${css.alignSelf[p.smAlignSelf]}`}
  ${p => p.smOrder && media.sm`${css.order[p.smOrder]}`}

  ${p => p.md && media.md`${css.col[p.md]}`}
  ${p => !isNaN(parseInt(p.mdOffset, 10)) && media.md`${css.offset[p.mdOffset]}`}
  ${p => p.mdAuto && media.md`${css.col.auto}`}
  ${p => p.mdAlignSelf && media.md`${css.alignSelf[p.mdAlignSelf]}`}
  ${p => p.mdOrder && media.md`${css.order[p.mdOrder]}`}

  ${p => p.lg && media.lg`${css.col[p.lg]}`}
  ${p => !isNaN(parseInt(p.lgOffset, 10)) && media.lg`${css.offset[p.lgOffset]}`}
  ${p => p.lgAuto && media.lg`${css.col.auto}`}
  ${p => p.lgAlignSelf && media.lg`${css.alignSelf[p.lgAlignSelf]}`}
  ${p => p.lgOrder && media.lg`${css.order[p.lgOrder]}`}

  ${p => p.xl && media.xl`${css.col[p.xl]}`}
  ${p => !isNaN(parseInt(p.xlOffset, 10)) && media.xl`${css.offset[p.xlOffset]}`}
  ${p => p.xlAuto && media.xl`${css.col.auto}`}
  ${p => p.xlAlignSelf && media.xl`${css.alignSelf[p.xlAlignSelf]}`}
  ${p => p.xlOrder && media.xl`${css.order[p.xlOrder]}`}
`;

export default Col;

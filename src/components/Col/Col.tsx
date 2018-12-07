import styled from 'styled-components';

import { ColCss, ColProps } from './types';
import { isNumber, suffix } from 'utils';
import media from 'media';

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

const getDataName = (p: ColProps) =>
  [
    p.col && `col${suffix(p.col)}`,
    isNumber(p.offset) && `offset-${p.offset}`,
    p.auto && `col-auto`,
    p.alignSelf && `align-self-${p.alignSelf}`,
    isNumber(p.order) || p.order === 'first' || (p.order === 'last' && `order-${p.order}`),
    p.xs && `col-xs${suffix(p.xs)}`,
    isNumber(p.xsOffset) && `offset-xs-${p.xsOffset}`,
    p.xsAuto && `col-xs-auto`,
    p.xsAlignSelf && `align-self-xs-${p.xsAlignSelf}`,
    isNumber(p.xsOrder) ||
      p.xsOrder === 'first' ||
      (p.xsOrder === 'last' && `order-xs-${p.xsOrder}`),
    p.hiddenXsDown && `hidden-xs-down`,
    p.hiddenXsUp && `hidden-xs-up`,
    p.sm && `col-sm${suffix(p.sm)}`,
    isNumber(p.smOffset) && `offset-sm-${p.smOffset}`,
    p.smAuto && `col-sm-auto`,
    p.smAlignSelf && `align-self-sm-${p.smAlignSelf}`,
    isNumber(p.smOrder) ||
      p.smOrder === 'first' ||
      (p.smOrder === 'last' && `order-sm-${p.smOrder}`),
    p.hiddenSmDown && `hidden-sm-down`,
    p.hiddenSmUp && `hidden-sm-up`,
    p.md && `col-md${suffix(p.md)}`,
    isNumber(p.mdOffset) && `offset-md-${p.mdOffset}`,
    p.mdAuto && `col-md-auto`,
    p.mdAlignSelf && `align-self-md-${p.mdAlignSelf}`,
    isNumber(p.mdOrder) ||
      p.mdOrder === 'first' ||
      (p.mdOrder === 'last' && `order-md-${p.mdOrder}`),
    p.hiddenMdDown && `hidden-xs-down`,
    p.hiddenMdUp && `hidden-xs-up`,
    p.lg && `} col-lg${suffix(p.lg)}`,
    isNumber(p.lgOffset) && `offset-lg-${p.lgOffset}`,
    p.lgAuto && `col-lg-auto`,
    p.lgAlignSelf && `align-self-lg-${p.lgAlignSelf}`,
    isNumber(p.lgOrder) ||
      p.lgOrder === 'first' ||
      (p.lgOrder === 'last' && `order-lg-${p.lgOrder}`),
    p.hiddenLgDown && `hidden-xs-down`,
    p.hiddenLgUp && `hidden-xs-up`,
    p.xl && `col-xl${suffix(p.xl)}`,
    isNumber(p.xlOffset) && `offset-xl-${p.xlOffset}`,
    p.xlAuto && `col-xl-auto`,
    p.xlAlignSelf && `align-self-xl-${p.xlAlignSelf}`,
    isNumber(p.xlOrder) ||
      p.xlOrder === 'first' ||
      (p.xlOrder === 'last' && `order-xl-${p.xlOrder}`),
    p.hiddenXlDown && `hidden-xs-down`,
    p.hiddenXlUp && `hidden-xs-up`,
    p.noGutter && `no-gutter`,
  ]
    .filter(Boolean)
    .join(' ');

export default styled.div.attrs<ColProps>(props => ({ 'data-name': process.env.NODE_ENV === 'development' ? getDataName(props) : undefined, }))<ColProps>`
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

  ${p => p.col && css.col[p.col === true ? 'true' : p.col]}
  ${p => p.offset && css.offset[p.offset]}
  ${p => p.auto && css.col.auto}
  ${p => p.alignSelf && css.alignSelf[p.alignSelf]}
  ${p => p.order && css.order[p.order]}

  ${p => p.xs && media.xs`${css.col[p.xs === true ? 'true' : p.xs]}`}
  ${p => p.xsOffset && isNumber(p.xsOffset) && media.xs`${css.offset[p.xsOffset]}`}
  ${p => p.xsAuto && media.xs`${css.col.auto}`}
  ${p => p.xsAlignSelf && media.xs`${css.alignSelf[p.xsAlignSelf]}`}
  ${p => p.xsOrder && media.xs`${css.order[p.xsOrder]}`}
  ${p => p.hiddenXsDown && media.max.xs`${css.display.none}`}
  ${p => p.hiddenXsUp && media.min.xs`${css.display.none}`}

  ${p => p.sm && media.sm`${css.col[p.sm === true ? 'true' : p.sm]}`}
  ${p => p.smOffset && isNumber(p.smOffset) && media.sm`${css.offset[p.smOffset]}`}
  ${p => p.smAuto && media.sm`${css.col.auto}`}
  ${p => p.smAlignSelf && media.sm`${css.alignSelf[p.smAlignSelf]}`}
  ${p => p.smOrder && media.sm`${css.order[p.smOrder]}`}
  ${p => p.hiddenSmDown && media.max.sm`${css.display.none}`}
  ${p => p.hiddenSmUp && media.min.sm`${css.display.none}`}

  ${p => p.md && media.md`${css.col[p.md === true ? 'true' : p.md]}`}
  ${p => p.mdOffset && isNumber(p.mdOffset) && media.md`${css.offset[p.mdOffset]}`}
  ${p => p.mdAuto && media.md`${css.col.auto}`}
  ${p => p.mdAlignSelf && media.md`${css.alignSelf[p.mdAlignSelf]}`}
  ${p => p.mdOrder && media.md`${css.order[p.mdOrder]}`}
  ${p => p.hiddenMdDown && media.max.md`${css.display.none}`}
  ${p => p.hiddenMdUp && media.min.md`${css.display.none}`}

  ${p => p.lg && media.lg`${css.col[p.lg === true ? 'true' : p.lg]}`}
  ${p => p.lgOffset && isNumber(p.lgOffset) && media.lg`${css.offset[p.lgOffset]}`}
  ${p => p.lgAuto && media.lg`${css.col.auto}`}
  ${p => p.lgAlignSelf && media.lg`${css.alignSelf[p.lgAlignSelf]}`}
  ${p => p.lgOrder && media.lg`${css.order[p.lgOrder]}`}
  ${p => p.hiddenLgDown && media.max.lg`${css.display.none}`}
  ${p => p.hiddenLgUp && media.min.lg`${css.display.none}`}

  ${p => p.xl && media.xl`${css.col[p.xl === true ? 'true' : p.xl]}`}
  ${p => p.xlOffset && isNumber(p.xlOffset) && media.xl`${css.offset[p.xlOffset]}`}
  ${p => p.xlAuto && media.xl`${css.col.auto}`}
  ${p => p.xlAlignSelf && media.xl`${css.alignSelf[p.xlAlignSelf]}`}
  ${p => p.xlOrder && media.xl`${css.order[p.xlOrder]}`}
  ${p => p.hiddenXlDown && media.max.xl`${css.display.none}`}
  ${p => p.hiddenXlUp && media.min.xl`${css.display.none}`}
`;

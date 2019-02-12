import { ColProps } from './types';
import { isNumber, suffix } from '../../utils';

export default (p: ColProps) =>
  process.env.NODE_ENV === 'production'
    ? undefined
    : [
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
        p.hiddenMdDown && `hidden-md-down`,
        p.hiddenMdUp && `hidden-md-up`,
        p.lg && `col-lg${suffix(p.lg)}`,
        isNumber(p.lgOffset) && `offset-lg-${p.lgOffset}`,
        p.lgAuto && `col-lg-auto`,
        p.lgAlignSelf && `align-self-lg-${p.lgAlignSelf}`,
        isNumber(p.lgOrder) ||
          p.lgOrder === 'first' ||
          (p.lgOrder === 'last' && `order-lg-${p.lgOrder}`),
        p.hiddenLgDown && `hidden-lg-down`,
        p.hiddenLgUp && `hidden-lg-up`,
        p.xl && `col-xl${suffix(p.xl)}`,
        isNumber(p.xlOffset) && `offset-xl-${p.xlOffset}`,
        p.xlAuto && `col-xl-auto`,
        p.xlAlignSelf && `align-self-xl-${p.xlAlignSelf}`,
        isNumber(p.xlOrder) ||
          p.xlOrder === 'first' ||
          (p.xlOrder === 'last' && `order-xl-${p.xlOrder}`),
        p.hiddenXlDown && `hidden-xl-down`,
        p.hiddenXlUp && `hidden-xl-up`,
        p.noGutter && `no-gutter`,
      ]
        .filter(Boolean)
        .join(' ');

import { RowProps } from './types';

export default (p: RowProps) =>
  process.env.NODE_ENV === 'production'
    ? undefined
    : [
        'row',
        p.alignItems ? `align-items-${p.alignItems}` : '',
        p.smAlignItems ? `align-items-sm-${p.smAlignItems}` : '',
        p.mdAlignItems ? `align-items-md-${p.mdAlignItems}` : '',
        p.lgAlignItems ? `align-items-lg-${p.lgAlignItems}` : '',
        p.xlAlignItems ? `align-items-xl-${p.xlAlignItems}` : '',
        p.justifyContent ? `justify-content-${p.justifyContent}` : '',
        p.smJustifyContent ? `justify-content-sm-${p.smJustifyContent}` : '',
        p.mdJustifyContent ? `justify-content-md-${p.mdJustifyContent}` : '',
        p.lgJustifyContent ? `justify-content-lg-${p.lgJustifyContent}` : '',
        p.xlJustifyContent ? `justify-content-xl-$p.{xlJustifyContent}` : '',
      ]
        .filter(Boolean)
        .join(' ');

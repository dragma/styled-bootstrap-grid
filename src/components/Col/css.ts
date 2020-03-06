import { ColCss } from './types';

let css: ColCss = {
  col: (column: any, gridColumns: number) => {
    switch(column){
      case true:
        return `
          -ms-flex-preferred-size: 0;
          flex-basis: 0;
          -ms-flex-positive: 1;
          flex-grow: 1;
          max-width: 100%;
        `;
      case 'auto':
        return `
          -ms-flex: 0 0 auto;
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        `;
      default:
        const singleCol: number = 100 / gridColumns;
        const colFlexBasis: number = singleCol * column;
          return `
            -ms-flex: 0 0 ${colFlexBasis}%;
            flex: 0 0 ${colFlexBasis}%;
            max-width: ${colFlexBasis}%;
        `;
    }
  },
  offset: (offset: any, gridColumns: number) => {
    const singleCol: number = 100 / gridColumns;
    const offsetFlexBasis: number = singleCol * offset;
    const offsetUnit: string = offsetFlexBasis > 0 ? '%' : '';
    return `margin-left: ${offsetFlexBasis}${offsetUnit}`;
  },
  order: (order: any) => {
    switch(order){
      case 'first':
        return `
          -ms-flex-order: -1;
          order: -1;
        `;
      case 'last':
        return `
           -ms-flex-order: 13;
           order: 13;
        `;
      default:
        return `
            -ms-flex-order: ${order};
            order: ${order};
        `;
    }
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

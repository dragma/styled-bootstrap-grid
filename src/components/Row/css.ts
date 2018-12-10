import { RowCss } from './types';

const css: RowCss = {
  alignItems: {
    start: `
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    `,
    end: `
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    `,
    center: `
      -ms-flex-align: center !important;
      align-items: center !important;
    `,
    baseline: `
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    `,
    stretch: `
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    `,
  },
  justifyContent: {
    start: `
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    `,
    end: `
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    `,
    center: `
      -ms-flex-pack: center !important;
      justify-content: center !important;
    `,
    between: `
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    `,
    around: `
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    `,
  },
};

export default css;

import { RowCss } from './types';

const css: RowCss = {
  alignItems: {
    start: `
      -ms-flex-align: start;
      align-items: flex-start;
    `,
    end: `
      -ms-flex-align: end;
      align-items: flex-end;
    `,
    center: `
      -ms-flex-align: center;
      align-items: center;
    `,
    baseline: `
      -ms-flex-align: baseline;
      align-items: baseline;
    `,
    stretch: `
      -ms-flex-align: stretch;
      align-items: stretch;
    `,
  },
  justifyContent: {
    start: `
      -ms-flex-pack: start;
      justify-content: flex-start;
    `,
    end: `
      -ms-flex-pack: end;
      justify-content: flex-end;
    `,
    center: `
      -ms-flex-pack: center;
      justify-content: center;
    `,
    between: `
      -ms-flex-pack: justify;
      justify-content: space-between;
    `,
    around: `
      -ms-flex-pack: distribute;
      justify-content: space-around;
    `,
  },
};

export default css;

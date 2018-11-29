import styled from 'styled-components';

import media from './media';

const css = {
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


const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -${(p) => {
    if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getRowPadding) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getRowPadding();
  }}px;
  margin-left: -${(p) => {
    if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getRowPadding) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getRowPadding();
  }}px;

  ${p => p.alignItems && css.alignItems[p.alignItems]}
  ${p => p.smAlignItems && media.xs`${css.alignItems[p.xsAlignItems]}`}
  ${p => p.smAlignItems && media.sm`${css.alignItems[p.smAlignItems]}`}
  ${p => p.mdAlignItems && media.md`${css.alignItems[p.mdAlignItems]}`}
  ${p => p.lgAlignItems && media.lg`${css.alignItems[p.lgAlignItems]}`}
  ${p => p.xlAlignItems && media.xl`${css.alignItems[p.xlAlignItems]}`}

  ${p => p.justifyContent && css.justifyContent[p.justifyContent]}
  ${p => p.smJustifyContent && media.xs`${css.justifyContent[p.xsJustifyContent]}`}
  ${p => p.smJustifyContent && media.sm`${css.justifyContent[p.smJustifyContent]}`}
  ${p => p.mdJustifyContent && media.md`${css.justifyContent[p.mdJustifyContent]}`}
  ${p => p.lgJustifyContent && media.lg`${css.justifyContent[p.lgJustifyContent]}`}
  ${p => p.xlJustifyContent && media.xl`${css.justifyContent[p.xlJustifyContent]}`}
`;

export default Row;

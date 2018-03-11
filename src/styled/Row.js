import styled from 'styled-components';

import media from './media';

const css = {
  alignItems: {
    start: `
      -webkit-box-align: start !important;
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    `,
    end: `
      -webkit-box-align: end !important;
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    `,
    center: `
      -webkit-box-align: center !important;
      -ms-flex-align: center !important;
      align-items: center !important;
    `,
    baseline: `
      -webkit-box-align: baseline !important;
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    `,
    stretch: `
      -webkit-box-align: stretch !important;
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    `,
  }
}


const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  ${p => p.alignItems && css.alignItems[p.alignItems]}
  ${p => p.smAlignItems && media.sm`${css.alignItems[p.smAlignItems]}`}
  ${p => p.mdAlignItems && media.md`${css.alignItems[p.mdAlignItems]}`}
  ${p => p.lgAlignItems && media.lg`${css.alignItems[p.lgAlignItems]}`}
  ${p => p.xlAlignItems && media.xl`${css.alignItems[p.xlAlignItems]}`}
`;

export default Row;

import styled from 'styled-components';

import css from './css';
import { RowProps } from './types';
import media from '../../media';
import getDataName from './getDataName';

export default styled.div.attrs<RowProps>(props => ({
  'data-name': getDataName(props),
}))<RowProps>`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -${p => {
    if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getRowPadding) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getRowPadding();
  }}px;
  margin-left: -${p => {
    if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getRowPadding) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getRowPadding();
  }}px;

  ${p => p.alignItems && css.alignItems[p.alignItems]}
  ${p => p.smAlignItems && media.sm`${css.alignItems[p.smAlignItems]}`}
  ${p => p.mdAlignItems && media.md`${css.alignItems[p.mdAlignItems]}`}
  ${p => p.lgAlignItems && media.lg`${css.alignItems[p.lgAlignItems]}`}
  ${p => p.xlAlignItems && media.xl`${css.alignItems[p.xlAlignItems]}`}

  ${p => p.justifyContent && css.justifyContent[p.justifyContent]}
  ${p => p.smJustifyContent && media.sm`${css.justifyContent[p.smJustifyContent]}`}
  ${p => p.mdJustifyContent && media.md`${css.justifyContent[p.mdJustifyContent]}`}
  ${p => p.lgJustifyContent && media.lg`${css.justifyContent[p.lgJustifyContent]}`}
  ${p => p.xlJustifyContent && media.xl`${css.justifyContent[p.xlJustifyContent]}`}
`;

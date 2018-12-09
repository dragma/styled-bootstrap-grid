import styled from 'styled-components';

import css from './css';
import getDataName from './getDataName';
import { isNumber } from '../../utils';
import media from '../../media';
import { ColProps } from './types';

export default styled.div.attrs<ColProps>(props => ({
  'data-name': getDataName(props),
}))<ColProps>`
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

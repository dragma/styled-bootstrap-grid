import styled from 'styled-components';

import css from './css';
import getDataName from './getDataName';
import { isNumber } from '../../utils';
import media from '../../media';
import { ColProps } from './types';
import { Theme } from '../ThemeProvider/types'

const getGridColumns = (theme: Theme): number => {
  if (!theme.styledBootstrapGrid) {
    return 12;
  }
  return theme.styledBootstrapGrid.getGridColumns();
}

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

  ${p => p.col && css.col(p.col, getGridColumns(p.theme))}
  ${p => typeof p.offset !== 'undefined' && css.offset(p.offset, getGridColumns(p.theme))}
  ${p => p.auto && css.col('auto', 0)}
  ${p => p.alignSelf && css.alignSelf[p.alignSelf]}
  ${p => p.order && css.order(p.order)}

  ${p => p.xs && media.xs`${css.col(p.xs, getGridColumns(p.theme))}`}
  ${p => typeof p.xsOffset !== 'undefined' && isNumber(p.xsOffset) && media.xs`${css.offset(p.xsOffset, getGridColumns(p.theme))}`}
  ${p => p.xsAuto && media.xs`${css.col('auto', 0)}`}
  ${p => p.xsAlignSelf && media.xs`${css.alignSelf[p.xsAlignSelf]}`}
  ${p => p.xsOrder && media.xs`${css.order(p.xsOrder)}`}
  ${p => p.hiddenXsDown && media.max.xs`${css.display.none}`}
  ${p => p.hiddenXsUp && media.min.xs`${css.display.none}`}

  ${p => p.sm && media.sm`${css.col(p.sm, getGridColumns(p.theme))}`}
  ${p => typeof p.smOffset !== 'undefined' && isNumber(p.smOffset) && media.sm`${css.offset(p.smOffset, getGridColumns(p.theme))}`}
  ${p => p.smAuto && media.sm`${css.col('auto', 0)}`}
  ${p => p.smAlignSelf && media.sm`${css.alignSelf[p.smAlignSelf]}`}
  ${p => p.smOrder && media.sm`${css.order(p.smOrder)}`}
  ${p => p.hiddenSmDown && media.max.sm`${css.display.none}`}
  ${p => p.hiddenSmUp && media.min.sm`${css.display.none}`}

  ${p => p.md && media.md`${css.col(p.md, getGridColumns(p.theme))}`}
  ${p => typeof p.mdOffset !== 'undefined' && isNumber(p.mdOffset) && media.md`${css.offset(p.mdOffset, getGridColumns(p.theme))}`}
  ${p => p.mdAuto && media.md`${css.col('auto')}`}
  ${p => p.mdAlignSelf && media.md`${css.alignSelf[p.mdAlignSelf]}`}
  ${p => p.mdOrder && media.md`${css.order(p.mdOrder)}`}
  ${p => p.hiddenMdDown && media.max.md`${css.display.none}`}
  ${p => p.hiddenMdUp && media.min.md`${css.display.none}`}

  ${p => p.lg && media.lg`${css.col(p.lg, getGridColumns(p.theme))}`}
  ${p => typeof p.lgOffset !== 'undefined' && isNumber(p.lgOffset) && media.lg`${css.offset(p.lgOffset, getGridColumns(p.theme))}`}
  ${p => p.lgAuto && media.lg`${css.col('auto')}`}
  ${p => p.lgAlignSelf && media.lg`${css.alignSelf[p.lgAlignSelf]}`}
  ${p => p.lgOrder && media.lg`${css.order(p.lgOrder)}`}
  ${p => p.hiddenLgDown && media.max.lg`${css.display.none}`}
  ${p => p.hiddenLgUp && media.min.lg`${css.display.none}`}

  ${p => p.xl && media.xl`${css.col(p.xl, getGridColumns(p.theme))}`}
  ${p => typeof p.xlOffset !== 'undefined' && isNumber(p.xlOffset) && media.xl`${css.offset(p.xlOffset, getGridColumns(p.theme))}`}
  ${p => p.xlAuto && media.xl`${css.col('auto')}`}
  ${p => p.xlAlignSelf && media.xl`${css.alignSelf[p.xlAlignSelf]}`}
  ${p => p.xlOrder && media.xl`${css.order(p.xlOrder)}`}
  ${p => p.hiddenXlDown && media.max.xl`${css.display.none}`}
  ${p => p.hiddenXlUp && media.min.xl`${css.display.none}`}

  ${p => p.xxl && media.xxl`${css.col(p.xxl, getGridColumns(p.theme))}`}
  ${p => typeof p.xxlOffset !== 'undefined' && isNumber(p.xxlOffset) && media.xxl`${css.offset(p.xxlOffset, getGridColumns(p.theme))}`}
  ${p => p.xxlAuto && media.xxl`${css.col('auto')}`}
  ${p => p.xxlAlignSelf && media.xxl`${css.alignSelf[p.xxlAlignSelf]}`}
  ${p => p.xxlOrder && media.xxl`${css.order(p.xxlOrder)}`}
  ${p => p.hiddenXlDown && media.max.xxl`${css.display.none}`}
  ${p => p.hiddenXlUp && media.min.xxl`${css.display.none}`}
`;

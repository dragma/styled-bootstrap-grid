import { ContainerProps } from './types';
import styled from 'styled-components';

import { defaultContainerMaxWidth } from '../ThemeProvider/ThemeProvider';
import media from '../../media';

export default styled.div.attrs<ContainerProps>(props => ({
  'data-name':
    process.env.NODE_ENV !== 'production' ? `container${props.fluid ? '-fluid' : ''}` : undefined,
}))<ContainerProps>`
  width: 100%;
  padding-right: ${p => {
    if (
      !p.theme ||
      !p.theme.styledBootstrapGrid ||
      !p.theme.styledBootstrapGrid.getContainerPadding
    ) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getContainerPadding();
  }}px;
  padding-left: ${p => {
    if (
      !p.theme ||
      !p.theme.styledBootstrapGrid ||
      !p.theme.styledBootstrapGrid.getContainerPadding
    ) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getContainerPadding();
  }}px;
  margin-right: auto;
  margin-left: auto;

  ${p => !p.fluid && media.sm`
    max-width: ${
      (
        !p.theme
        || !p.theme.styledBootstrapGrid
        || !p.theme.styledBootstrapGrid.getContainerMaxWidth
      ) && defaultContainerMaxWidth.sm
      || p.theme.styledBootstrapGrid.getContainerMaxWidth('sm')
    }px;
  `}

  ${p => !p.fluid && media.md`
    max-width: ${
    (
      !p.theme
      || !p.theme.styledBootstrapGrid
      || !p.theme.styledBootstrapGrid.getContainerMaxWidth
    ) && defaultContainerMaxWidth.md
    || p.theme.styledBootstrapGrid.getContainerMaxWidth('md')
    }px;
  `}

  ${p => !p.fluid && media.lg`
    max-width: ${
    (
      !p.theme
      || !p.theme.styledBootstrapGrid
      || !p.theme.styledBootstrapGrid.getContainerMaxWidth
    ) && defaultContainerMaxWidth.lg
    || p.theme.styledBootstrapGrid.getContainerMaxWidth('lg')
    }px;
  `}

  ${p => !p.fluid && media.xl`
    max-width: ${
    (
      !p.theme
      || !p.theme.styledBootstrapGrid
      || !p.theme.styledBootstrapGrid.getContainerMaxWidth
    ) && defaultContainerMaxWidth.xl
    || p.theme.styledBootstrapGrid.getContainerMaxWidth('xl')
    }px;
  `}
`;

import { ContainerProps } from './Container.types';
import styled from 'styled-components';

import { defaultContainerMaxWidth } from '../ThemeProvider/ThemeProvider';
import media from '../../media';

export default styled.div.attrs<ContainerProps>(props => ({
  'data-name':
    process.env.NODE_ENV === 'development' ? `container${props.fluid && '-fluid'}` : undefined,
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

  ${props =>
    !props.fluid &&
    `
      ${media.sm`
        max-width: ${p => {
          if (
            !p.theme ||
            !p.theme.styledBootstrapGrid ||
            !p.theme.styledBootstrapGrid.getContainerMaxWidth
          ) {
            return defaultContainerMaxWidth.sm;
          }
          return p.theme.styledBootstrapGrid.getContainerMaxWidth('sm');
        }}px;
      `}
    
      ${media.md`
        max-width: ${p => {
          if (
            !p.theme ||
            !p.theme.styledBootstrapGrid ||
            !p.theme.styledBootstrapGrid.getContainerMaxWidth
          ) {
            return defaultContainerMaxWidth.md;
          }
          return p.theme.styledBootstrapGrid.getContainerMaxWidth('md');
        }}px;
      `}
    
      ${media.lg`
        max-width: ${p => {
          if (
            !p.theme ||
            !p.theme.styledBootstrapGrid ||
            !p.theme.styledBootstrapGrid.getContainerMaxWidth
          ) {
            return defaultContainerMaxWidth.lg;
          }
          return p.theme.styledBootstrapGrid.getContainerMaxWidth('lg');
        }}px;
      `}
    
      ${media.xl`
        max-width: ${p => {
          if (
            !p.theme ||
            !p.theme.styledBootstrapGrid ||
            !p.theme.styledBootstrapGrid.getContainerMaxWidth
          ) {
            return defaultContainerMaxWidth.xl;
          }
          return p.theme.styledBootstrapGrid.getContainerMaxWidth('xl');
        }}px;
      `}
  `}
`;

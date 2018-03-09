import styled from 'styled-components';

import media from './media';

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
  padding-left: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;

  ${media.phone`
    padding-right: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
    padding-left: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
    width: 540px;
    max-width: 100%;
  `}

  ${media.tablet`
    padding-right: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
    padding-left: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
    width: 720px;
    max-width: 100%;
  `}

  ${media.desktop`
    padding-right: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
    padding-left: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
    width: 960px;
    max-width: 100%;
  `}

  ${media.giant`
    padding-right: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
    padding-left: ${p => p.theme.styledBootstrapGrid.getContainerPadding()}px;
    width: 1140px;
    max-width: 100%;
  `}
`;

export default Container;

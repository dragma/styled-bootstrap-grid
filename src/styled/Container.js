import styled from 'styled-components';

import media from './media';

const Container = styled.div`
  width: 100%;
  padding-right: ${p => {
    if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getContainerPadding) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getContainerPadding();
  }}px;
  padding-left: ${p => {
    if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getContainerPadding) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getContainerPadding();
  }}px;
  margin-right: auto;
  margin-left: auto;

  ${media.phone`
    max-width: 540px;
  `}

  ${media.tablet`
    max-width: 720px;
  `}

  ${media.desktop`
    max-width: 960px;
  `}

  ${media.giant`
    max-width: 1140px;
  `}
`;

export default Container;

import styled from 'styled-components';

import media from './media';

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
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

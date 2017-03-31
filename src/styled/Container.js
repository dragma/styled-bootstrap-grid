import styled from 'styled-components';

import media from './media';

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;

  ${media.phone`
    padding-right: 15px;
    padding-left: 15px;
    width: 540px;
    max-width: 100%;
  `}

  ${media.tablet`
    padding-right: 15px;
    padding-left: 15px;
    width: 720px;
    max-width: 100%;
  `}

  ${media.desktop`
    padding-right: 15px;
    padding-left: 15px;
    width: 960px;
    max-width: 100%;
  `}

  ${media.giant`
    padding-right: 15px;
    padding-left: 15px;
    width: 1140px;
    max-width: 100%;
  `}
`;

export default Container;

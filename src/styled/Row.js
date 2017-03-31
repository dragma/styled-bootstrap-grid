import styled from 'styled-components';

import media from './media';

const Row = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  ${media.phone`
    padding-right: -15px;
    padding-left: -15px;
  `}

  ${media.tablet`
    padding-right: -15px;
    padding-left: -15px;
  `}

  ${media.desktop`
    padding-right: -15px;
    padding-left: -15px;
  `}

  ${media.giant`
    padding-right: -15px;
    padding-left: -15px;
  `}
`;

export default Row;

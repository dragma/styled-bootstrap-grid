import styled from 'styled-components';

import media from './media';

const ContainerFluid = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;

  ${media.phone`
    padding-right: 15px;
    padding-left: 15px;
  `}

  ${media.tablet`
    padding-right: 15px;
    padding-left: 15px;
  `}

  ${media.desktop`
    padding-right: 15px;
    padding-left: 15px;
  `}

  ${media.giant`
    padding-right: 15px;
    padding-left: 15px;
  `}
`;

export default ContainerFluid;

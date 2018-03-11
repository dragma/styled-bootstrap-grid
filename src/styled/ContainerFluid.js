import styled from 'styled-components';

import media from './media';

const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

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

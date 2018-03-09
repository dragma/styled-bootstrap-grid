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
  margin-right: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
  margin-left: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;

  ${media.phone`
    padding-right: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
    padding-left: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
  `}

  ${media.tablet`
    padding-right: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
    padding-left: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
  `}

  ${media.desktop`
    padding-right: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
    padding-left: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
  `}

  ${media.giant`
    padding-right: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
    padding-left: -${p => p.theme.styledBootstrapGrid.getRowPadding()}px;
  `}
`;

export default Row;

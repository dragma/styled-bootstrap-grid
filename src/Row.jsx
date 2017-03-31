import React from 'react';

import { Row } from './styled';

const row = props => <Row data-name="row">{props.children}</Row>;

row.propTypes = {
  children: React.PropTypes.any.isRequired,
};

row.defaultProps = {
  children: null,
};

export default row;

import React from 'react';

import { Row } from './styled';

const row = props => {
  const { children, ...otherProps } = props;
  return <Row
    data-name="row"
    {...otherProps}
  >
    {children}
  </Row>;
}

row.propTypes = {
  children: React.PropTypes.any,
};

row.defaultProps = {
  children: null,
};

export default row;

import React from 'react';

import buildProps from './utils/buildProps';
import { Row } from './styled';

const row = props => {
  const { children } = props;

  const propsKeys = [
    'children',
  ];

  const otherProps = buildProps(props, propsKeys);

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

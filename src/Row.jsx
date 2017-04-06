import React from 'react';

import { Row } from './styled';

const row = props => {
  const { children } = props;

  const propsKeys = [
    'children',
  ];

  const otherProps =
    Object
      .keys(props)
      .filter(key => propsKeys.indexOf(key) === -1)
      .reduce((acc, key) => (acc[key] = props[key]), {});

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

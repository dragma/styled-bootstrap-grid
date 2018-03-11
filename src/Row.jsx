import React from 'react';
import PropTypes from 'prop-types';

import { Row } from './styled';

const row = props => {
  const {
    children,
    alignItems,
    ...otherProps,
  } = props;

  let dataName = 'row';

  if (alignItems) {
    dataName = `${dataName} align-items-${alignItems}`
  }

  dataName = dataName.trim();
  return <Row
    alignItems={alignItems}
    data-name={dataName}
    {...otherProps}
  >
    {children}
  </Row>;
}

row.propTypes = {
  children: PropTypes.any,
  alignItems: PropTypes.string,
};

row.defaultProps = {
  children: null,
};

export default row;

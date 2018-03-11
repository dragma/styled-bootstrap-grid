import React from 'react';
import PropTypes from 'prop-types';

import { Row } from './styled';

const row = props => {
  const {
    children,
    alignItems,
    smAlignItems,
    mdAlignItems,
    lgAlignItems,
    xlAlignItems,
    ...otherProps,
  } = props;

  let dataName = 'row';

  if (alignItems) {
    dataName = `${dataName} align-items-${alignItems}`
  }
  if (smAlignItems) {
    dataName = `${dataName} align-items-sm-${smAlignItems}`
  }
  if (mdAlignItems) {
    dataName = `${dataName} align-items-md-${mdAlignItems}`
  }
  if (lgAlignItems) {
    dataName = `${dataName} align-items-lg-${lgAlignItems}`
  }
  if (xlAlignItems) {
    dataName = `${dataName} align-items-xl-${xlAlignItems}`
  }

  dataName = dataName.trim();
  return <Row
    alignItems={alignItems}
    smAlignItems={smAlignItems}
    mdAlignItems={mdAlignItems}
    lgAlignItems={lgAlignItems}
    xlAlignItems={xlAlignItems}
    data-name={dataName}
    {...otherProps}
  >
    {children}
  </Row>;
}

row.propTypes = {
  children: PropTypes.any,
  alignItems: PropTypes.string,
  smAlignItems: PropTypes.string,
  mdAlignItems: PropTypes.string,
  lgAlignItems: PropTypes.string,
  xlAlignItems: PropTypes.string,
};

row.defaultProps = {
  children: null,
};

export default row;

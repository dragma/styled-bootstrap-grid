import React from 'react';
import PropTypes from 'prop-types';

import buildProps from './utils/buildProps';
import { Col } from './styled';

const col = (props) => {

  let {
    col,
  } = props;

  const {
    children,
    ...otherProps
  } = props;

  let dataName = '';
  if (col) {
    if (!isNaN(parseInt(col, 10))) {
      dataName = `${dataName} col-${col}`;
    } else {
      dataName = `${dataName} col`;
    }
  }

  dataName = dataName.trim();
  return (
    <Col
      col={col}
      data-name={dataName}
      {...otherProps}
    >
      {children}
    </Col>
  );
};

const stringOrNumberReactPropType =
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired;
const stringOrNumberorBooleanReactPropType =
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired;

col.propTypes = {
  children: PropTypes.any.isRequired,
  col: stringOrNumberorBooleanReactPropType,
};

col.defaultProps = {
  children: null,
};

export default col;

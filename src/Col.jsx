import React from 'react';
import PropTypes from 'prop-types';

import buildProps from './utils/buildProps';
import { Col } from './styled';

const col = (props) => {

  const {
    col,
    children,
    offset,
    sm,
    smOffset,
    md,
    mdOffset,
    lg,
    lgOffset,
    xl,
    xlOffset,
    ...otherProps,
  } = props;

  let dataName = '';
  if (col) {
    if (!isNaN(parseInt(col, 10))) {
      dataName = `${dataName} col-${col}`;
    } else {
      dataName = `${dataName} col`;
    }
  }
  if (!isNaN(parseInt(offset, 10))) {
    dataName = `${dataName} offset-${offset}`;
  }
  if (!isNaN(parseInt(sm, 10))) {
    dataName = `${dataName} col-sm-${sm}`;
  }
  if (!isNaN(parseInt(smOffset, 10))) {
    dataName = `${dataName} offset-sm-${smOffset}`;
  }
  if (!isNaN(parseInt(md, 10))) {
    dataName = `${dataName} col-md-${md}`;
  }
  if (!isNaN(parseInt(mdOffset, 10))) {
    dataName = `${dataName} offset-md-${mdOffset}`;
  }
  if (!isNaN(parseInt(lg, 10))) {
    dataName = `${dataName} col-lg-${lg}`;
  }
  if (!isNaN(parseInt(lgOffset, 10))) {
    dataName = `${dataName} offset-lg-${lgOffset}`;
  }
  if (!isNaN(parseInt(xl, 10))) {
    dataName = `${dataName} col-xl-${xl}`;
  }
  if (!isNaN(parseInt(xlOffset, 10))) {
    dataName = `${dataName} offset-xl-${xlOffset}`;
  }

  dataName = dataName.trim();
  return (
    <Col
      col={col}
      offset={offset}

      sm={sm}
      smOffset={smOffset}

      md={md}
      mdOffset={mdOffset}

      lg={lg}
      lgOffset={lgOffset}

      xl={xl}
      xlOffset={xlOffset}

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
  ]);

const stringOrNumberorBooleanReactPropType =
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]);

col.propTypes = {
  children: PropTypes.any.isRequired,
  col: stringOrNumberorBooleanReactPropType,
  sm: stringOrNumberReactPropType,
  smOffset: stringOrNumberReactPropType,
  md: stringOrNumberReactPropType,
  mdOffset: stringOrNumberReactPropType,
};

col.defaultProps = {
  children: null,
};

export default col;

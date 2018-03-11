import React from 'react';
import PropTypes from 'prop-types';

import buildProps from './utils/buildProps';
import { Col } from './styled';

const col = (props) => {

  const {
    col,
    offset,
    auto,
    alignSelf,
    sm,
    smOffset,
    smAuto,
    smAlignSelf,
    md,
    mdOffset,
    mdAuto,
    mdAlignSelf,
    lg,
    lgOffset,
    lgAuto,
    lgAlignSelf,
    xl,
    xlOffset,
    xlAuto,
    xlAlignSelf,
    children,
    ...otherProps,
  } = props;
  console.log('alignSelf', alignSelf)
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
  if (auto) {
    dataName = `${dataName} col-auto`;
  }
  if (alignSelf) {
    dataName = `${dataName} align-self-${alignSelf}`;
  }

  if (sm) {
    if (!isNaN(parseInt(sm, 10))) {
      dataName = `${dataName} col-sm-${sm}`;
    } else {
      dataName = `${dataName} col-sm`;
    }
  }
  if (!isNaN(parseInt(smOffset, 10))) {
    dataName = `${dataName} offset-sm-${smOffset}`;
  }
  if (smAuto) {
    dataName = `${dataName} col-sm-auto`;
  }
  if (smAlignSelf) {
    dataName = `${dataName} align-self-sm-${smAlignSelf}`;
  }

  if (md) {
    if (!isNaN(parseInt(md, 10))) {
      dataName = `${dataName} col-md-${md}`;
    } else {
      dataName = `${dataName} col-md`;
    }
  }
  if (!isNaN(parseInt(mdOffset, 10))) {
    dataName = `${dataName} offset-md-${mdOffset}`;
  }
  if (mdAuto) {
    dataName = `${dataName} col-md-auto`;
  }
  if (mdAlignSelf) {
    dataName = `${dataName} align-self-md-${mdAlignSelf}`;
  }

  if (lg) {
    if (!isNaN(parseInt(lg, 10))) {
      dataName = `${dataName} col-lg-${lg}`;
    } else {
      dataName = `${dataName} col-lg`;
    }
  }
  if (!isNaN(parseInt(lgOffset, 10))) {
    dataName = `${dataName} offset-lg-${lgOffset}`;
  }
  if (lgAuto) {
    dataName = `${dataName} col-lg-auto`;
  }
  if (lgAlignSelf) {
    dataName = `${dataName} align-self-lg-${lgAlignSelf}`;
  }

  if (xl) {
    if (!isNaN(parseInt(xl, 10))) {
      dataName = `${dataName} col-xl-${xl}`;
    } else {
      dataName = `${dataName} col-xl`;
    }
  }
  if (!isNaN(parseInt(xlOffset, 10))) {
    dataName = `${dataName} offset-xl-${xlOffset}`;
  }
  if (xlAuto) {
    dataName = `${dataName} col-xl-auto`;
  }
  if (xlAlignSelf) {
    dataName = `${dataName} align-self-xl-${xlAlignSelf}`;
  }

  dataName = dataName.trim();
  return (
    <Col
      col={col}
      offset={offset}
      auto={auto}
      alignSelf={alignSelf}

      sm={sm}
      smOffset={smOffset}
      smAuto={smAuto}
      smAlignSelf={smAlignSelf}

      md={md}
      mdOffset={mdOffset}
      mdAuto={mdAuto}
      mdAlignSelf={mdAlignSelf}

      lg={lg}
      lgOffset={lgOffset}
      lgAuto={lgAuto}
      lgAlignSelf={lgAlignSelf}

      xl={xl}
      xlOffset={xlOffset}
      xlAuto={xlAuto}
      xlAlignSelf={xlAlignSelf}

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
  auto: PropTypes.bool,
  alignSelf: PropTypes.string,

  sm: stringOrNumberorBooleanReactPropType,
  smOffset: stringOrNumberReactPropType,
  smAuto: PropTypes.bool,
  smAlignSelf: PropTypes.string,

  md: stringOrNumberorBooleanReactPropType,
  mdOffset: stringOrNumberReactPropType,
  mdAuto: PropTypes.bool,
  mdAlignSelf: PropTypes.string,

  lg: stringOrNumberorBooleanReactPropType,
  lgOffset: stringOrNumberReactPropType,
  lgAuto: PropTypes.bool,
  lgAlignSelf: PropTypes.string,

  xl: stringOrNumberorBooleanReactPropType,
  xlOffset: stringOrNumberReactPropType,
  xlAuto: PropTypes.bool,
  xlAlignSelf: PropTypes.string,
};

col.defaultProps = {
  children: null,
};

export default col;

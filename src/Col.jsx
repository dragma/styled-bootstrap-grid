import React from 'react';

import { Col } from './styled';


const col = (props) => {

  const {
    sm,
    smOffset,
    smPush,
    md,
    mdOffset,
    mdPush,
    lg,
    lgOffset,
    lgPush,
    xl,
    xlOffset,
    xlPush,
    children,
  } = props;

  const propsKeys = [
    'sm',
    'smOffset',
    'smPush',
    'md',
    'mdOffset',
    'mdPush',
    'lg',
    'lgOffset',
    'lgPush',
    'xl',
    'xlOffset',
    'xlPush',
    'children',
  ];

  const otherProps =
    Object
      .keys(props)
      .filter(key => propsKeys.indexOf(key) === -1)
      .reduce((acc, key) => (acc[key] = props[key]), {});

  let dataName = '';
  // xs
  if (sm) {
    dataName = `${dataName}col-sm-${sm} `;
  }
  if (smOffset) {
    dataName = `${dataName}offset-sm-${smOffset}`;
  }
  if (smPush) {
    dataName = `${dataName}push-sm-${smPush}`;
  }

  // md
  if (md) {
    dataName = `${dataName}col-md-${md} `;
  }
  if (mdOffset) {
    dataName = `${dataName}offset-md-${mdOffset}`;
  }
  if (mdPush) {
    dataName = `${dataName}push-md-${mdPush}`;
  }

  // lg
  if (lg) {
    dataName = `${dataName}col-lg-${lg} `;
  }
  if (mdOffset) {
    dataName = `${dataName}offset-md-${mdOffset}`;
  }
  if (mdPush) {
    dataName = `${dataName}push-md-${mdPush}`;
  }

  // xl
  if (xl) {
    dataName = `${dataName}col-xl-${xl}`;
  }
  if (xlOffset) {
    dataName = `${dataName}offset-xl-${xlOffset}`;
  }
  if (xlPush) {
    dataName = `${dataName}push-xl-${xlPush}`;
  }

  return (
    <Col
      sm={sm}
      smOffset={smOffset}
      smPush={smPush}
      md={md}
      mdOffset={mdOffset}
      mdPush={mdPush}
      lg={lg}
      lgOffset={lgOffset}
      lgPush={lgPush}
      xl={xl}
      xlOffset={xlOffset}
      xlPush={xlPush}
      data-name={dataName}
      {...otherProps}
    >
      {children}
    </Col>
  );
};

const stringOrNumberReactPropType =
  React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired;

col.propTypes = {
  children: React.PropTypes.any.isRequired,
  sm: stringOrNumberReactPropType,
  md: stringOrNumberReactPropType,
  lg: stringOrNumberReactPropType,
  xl: stringOrNumberReactPropType,
  smOffset: stringOrNumberReactPropType,
  mdOffset: stringOrNumberReactPropType,
  lgOffset: stringOrNumberReactPropType,
  xlOffset: stringOrNumberReactPropType,
  smPush: stringOrNumberReactPropType,
  mdPush: stringOrNumberReactPropType,
  lgPush: stringOrNumberReactPropType,
  xlPush: stringOrNumberReactPropType,
};

col.defaultProps = {
  children: null,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  smOffset: 0,
  mdOffset: 0,
  lgOffset: 0,
  xlOffset: 0,
  smPush: 0,
  mdPush: 0,
  lgPush: 0,
  xlPush: 0,
};

export default col;

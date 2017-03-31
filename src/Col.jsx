import React from 'react';

import { Col } from './styled';


const col = (props) => {
  let dataName = '';
  // xs
  if (props.sm) {
    dataName = `${dataName}col-sm-${props.sm} `;
  }
  if (props.smOffset) {
    dataName = `${dataName}offset-sm-${props.smOffset}`;
  }
  if (props.smPush) {
    dataName = `${dataName}push-sm-${props.smPush}`;
  }

  // md
  if (props.md) {
    dataName = `${dataName}col-md-${props.md} `;
  }
  if (props.mdOffset) {
    dataName = `${dataName}offset-md-${props.mdOffset}`;
  }
  if (props.mdPush) {
    dataName = `${dataName}push-md-${props.mdPush}`;
  }

  // lg
  if (props.lg) {
    dataName = `${dataName}col-lg-${props.lg} `;
  }
  if (props.mdOffset) {
    dataName = `${dataName}offset-md-${props.mdOffset}`;
  }
  if (props.mdPush) {
    dataName = `${dataName}push-md-${props.mdPush}`;
  }

  // xl
  if (props.xl) {
    dataName = `${dataName}col-xl-${props.xl}`;
  }
  if (props.xlOffset) {
    dataName = `${dataName}offset-xl-${props.xlOffset}`;
  }
  if (props.xlPush) {
    dataName = `${dataName}push-xl-${props.xlPush}`;
  }

  return (
    <Col
      sm={props.sm}
      smOffset={props.smOffset}
      smPush={props.smPush}
      md={props.md}
      mdOffset={props.mdOffset}
      mdPush={props.mdPush}
      lg={props.lg}
      lgOffset={props.lgOffset}
      lgPush={props.lgPush}
      xl={props.xl}
      xlOffset={props.xlOffset}
      xlPush={props.xlPush}
      data-name={dataName}
    >
      {props.children}
    </Col>
  );
};

col.propTypes = {
  children: React.PropTypes.any.isRequired,
  sm: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  md: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  lg: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  xl: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  smOffset: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  mdOffset: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  lgOffset: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  xlOffset: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  smPush: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  mdPush: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  lgPush: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  xlPush: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
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

import React from 'react';
import PropTypes from 'prop-types';

import { Row } from './styled';

const MyRow = (props) => {
  const {
    forwardedRef,
    children,
    alignItems,
    smAlignItems,
    mdAlignItems,
    lgAlignItems,
    xlAlignItems,
    justifyContent,
    smJustifyContent,
    mdJustifyContent,
    lgJustifyContent,
    xlJustifyContent,
    ...otherProps
  } = props;

  let dataName = 'row';

  if (alignItems) {
    dataName = `${dataName} align-items-${alignItems}`;
  }
  if (smAlignItems) {
    dataName = `${dataName} align-items-sm-${smAlignItems}`;
  }
  if (mdAlignItems) {
    dataName = `${dataName} align-items-md-${mdAlignItems}`;
  }
  if (lgAlignItems) {
    dataName = `${dataName} align-items-lg-${lgAlignItems}`;
  }
  if (xlAlignItems) {
    dataName = `${dataName} align-items-xl-${xlAlignItems}`;
  }
  if (justifyContent) {
    dataName = `${dataName} justify-content-${justifyContent}`;
  }
  if (smJustifyContent) {
    dataName = `${dataName} justify-content-sm-${smJustifyContent}`;
  }
  if (mdJustifyContent) {
    dataName = `${dataName} justify-content-md-${mdJustifyContent}`;
  }
  if (lgJustifyContent) {
    dataName = `${dataName} justify-content-lg-${lgJustifyContent}`;
  }
  if (xlJustifyContent) {
    dataName = `${dataName} justify-content-xl-${xlJustifyContent}`;
  }

  dataName = dataName.trim();
  return (
    <Row
      alignItems={alignItems}
      smAlignItems={smAlignItems}
      mdAlignItems={mdAlignItems}
      lgAlignItems={lgAlignItems}
      xlAlignItems={xlAlignItems}
      justifyContent={justifyContent}
      smJustifyContent={smJustifyContent}
      mdJustifyContent={mdJustifyContent}
      lgJustifyContent={lgJustifyContent}
      xlJustifyContent={xlJustifyContent}
      data-name={dataName}
      ref={forwardedRef}
      {...otherProps}
    >
      {children}
    </Row>
  );
};

MyRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  alignItems: PropTypes.string,
  smAlignItems: PropTypes.string,
  mdAlignItems: PropTypes.string,
  lgAlignItems: PropTypes.string,
  xlAlignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  smJustifyContent: PropTypes.string,
  mdJustifyContent: PropTypes.string,
  lgJustifyContent: PropTypes.string,
  xlJustifyContent: PropTypes.string,
};


MyRow.defaultProps = {
  alignItems: null,
  smAlignItems: null,
  mdAlignItems: null,
  lgAlignItems: null,
  xlAlignItems: null,
  justifyContent: null,
  smJustifyContent: null,
  mdJustifyContent: null,
  lgJustifyContent: null,
  xlJustifyContent: null,
};

export default React.forwardRef((props, ref) => <MyRow forwardedRef={ref} {...props} />);

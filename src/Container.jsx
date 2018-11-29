import React from 'react';
import PropTypes from 'prop-types';

import { Container, ContainerFluid } from './styled';

const MyContainer = (props) => {
  const {
    fluid,
    children,
    forwardedRef,
    ...otherProps
  } = props;

  if (fluid) {
    return <ContainerFluid data-name="container-fluid" ref={forwardedRef} {...otherProps}>{children}</ContainerFluid>;
  }
  return <Container data-name="container" ref={forwardedRef} {...otherProps}>{children}</Container>;
};

MyContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  fluid: PropTypes.bool,
};

MyContainer.defaultProps = {
  fluid: false,
};

export default React.forwardRef((props, ref) => <MyContainer forwardedRef={ref} {...props} />);

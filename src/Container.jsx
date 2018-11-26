import React from 'react';
import PropTypes from 'prop-types';

import { Container, ContainerFluid } from './styled';

const container = React.forwardRef((props, ref) => {
  const {
    fluid,
    children,
    ...otherProps
  } = props;

  if (fluid) {
    return <ContainerFluid data-name="container-fluid" ref={ref} {...otherProps}>{children}</ContainerFluid>;
  }
  return <Container data-name="container" ref={ref} {...otherProps}>{children}</Container>;
});

container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  fluid: PropTypes.bool,
};

container.defaultProps = {
  fluid: false,
};

export default container;

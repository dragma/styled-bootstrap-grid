import React from 'react';
import PropTypes from 'prop-types';

import { Container, ContainerFluid } from './styled';

const container = (props) => {
  const {
    fluid,
    children,
    ...otherProps
  } = props;

  if (fluid) {
    return <ContainerFluid data-name="container-fluid" {...otherProps}>{children}</ContainerFluid>;
  }
  return <Container data-name="container" {...otherProps}>{children}</Container>;
};

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

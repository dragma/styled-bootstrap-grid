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
  children: PropTypes.any,
  fluid: PropTypes.bool.isRequired,
};

container.defaultProps = {
  children: null,
  fluid: false,
};

export default container;

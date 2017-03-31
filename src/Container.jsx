import React from 'react';

import { Container, ContainerFluid } from './styled';

const container = (props) => {
  if (props.fluid) {
    return <ContainerFluid data-name="container-fluid">{props.children}</ContainerFluid>;
  }
  return <Container data-name="container">{props.children}</Container>;
};

container.propTypes = {
  children: React.PropTypes.any.isRequired,
  fluid: React.PropTypes.bool.isRequired,
};

container.defaultProps = {
  children: null,
  fluid: false,
};

export default container;

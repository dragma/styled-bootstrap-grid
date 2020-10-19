import React from 'react';
import { StyledBootstrapGridProvider } from 'styled-bootstrap-grid';

const breakpoints = {
  xxl: 1401,
};

const App = () => (
  <StyledBootstrapGridProvider breakpoints={breakpoints}>
    <h1>
      {'styled-bootstrap-grid '}
      <small>(documentation)</small>
    </h1>
  </StyledBootstrapGridProvider>
);

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from './styled-bootstrap-grid';

const Pre = styled.pre`
  display: inline-block;
  width: 100%;
  background-color: #EEE;
  margin: 0;
  padding: 10px;
  white-space: normal;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6} mdOffset={3}>
            <Pre>
              container: fluid & sm: 12 & md: 6 & md-offset: 3
            </Pre>
          </Col>
          <Col sm={12} md={6}>
            <Pre>
              container: fluid & sm: 12 & md: 6
            </Pre>
          </Col>
          <Col sm={12} md={2}>
            <Pre>
              container: fluid & sm: 12 & md: 2
            </Pre>
          </Col>
          <Col sm={12} md={4}>
            <Pre>
              container: fluid & sm: 12 & md: 4
            </Pre>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

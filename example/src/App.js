import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from './styled-bootstrap-grid';

const TitleRow = styled(Row)`
  margin-bottom: 10px;
`
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
        <TitleRow>
          <Col col={12}>
            <h3>Auto-layout columns: Equal-width</h3>
            <a href="https://getbootstrap.com/docs/4.0/layout/grid/#equal-width">Bootstrap documentation</a>
          </Col>
        </TitleRow>
        <Row>
          <Col col>
            <Pre>
              &lt;div class="col-5" /&gt;
            </Pre>
          </Col>
          <Col col>
            <Pre>
              &lt;div class="col-4" /&gt;
            </Pre>
          </Col>
        </Row>
        <TitleRow>
          <Col col={12}>
            <h3>Auto-layout columns: Setting one column width</h3>
            <a href="https://getbootstrap.com/docs/4.0/layout/grid/#setting-one-column-width">Bootstrap documentation</a>
          </Col>
        </TitleRow>
        <Row>
          <Col col>
            <Pre>
              &lt;div class="col" /&gt;
            </Pre>
          </Col>
          <Col col={2}>
            <Pre>
              &lt;div class="col-2" /&gt;
            </Pre>
          </Col>
          <Col col>
            <Pre>
              &lt;div class="col" /&gt;
            </Pre>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

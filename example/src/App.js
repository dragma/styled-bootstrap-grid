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
        <TitleRow>
          <Col col={12}>
            <h3>Auto-layout columns: Variable width content</h3>
            <a href="https://getbootstrap.com/docs/4.0/layout/grid/#variable-width-content">Bootstrap documentation</a>
          </Col>
        </TitleRow>
        <Row>
          <Col col xl={2}>
            <Pre>
              &lt;div class="col col-xl-2" /&gt;
            </Pre>
          </Col>
          <Col col xlAuto>
            <Pre>
              &lt;div class=" col col-xl-auto" /&gt;
            </Pre>
          </Col>
          <Col col xl={2}>
            <Pre>
              &lt;div class="col col-xl-2" /&gt;
            </Pre>
          </Col>
        </Row>
        <TitleRow>
          <Col col={12}>
            <h3>Auto-layout columns: Stacked to horizontal</h3>
            <a href="https://getbootstrap.com/docs/4.0/layout/grid/#stacked-to-horizontal">Bootstrap documentation</a>
          </Col>
        </TitleRow>
        <Row>
          <Col col xl>
            <Pre>
              &lt;div class="col col-xl" /&gt;
            </Pre>
          </Col>
          <Col col={2} xl>
            <Pre>
              &lt;div class=" col-2 col-xl" /&gt;
            </Pre>
          </Col>
          <Col col xl>
            <Pre>
              &lt;div class="col col-xl" /&gt;
            </Pre>
          </Col>
        </Row>
        <TitleRow>
          <Col col={12}>
            <h3>Alignment: Vertical alignment</h3>
            <a href="https://getbootstrap.com/docs/4.0/layout/grid/#vertical-alignment">Bootstrap documentation</a>
          </Col>
        </TitleRow>
        <Row alignItems="start">
          <Col col={6}>
            <Pre>
              &lt;div class="row align-items-start" &gt;
            </Pre>
            <Pre>
              &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
            </Pre>
            <Pre>
              &lt;div /&gt;
            </Pre>
          </Col>
          <Col col={6}>
            <Pre>
              &lt;div class="col-6 offset-6" /&gt;
            </Pre>
          </Col>
        </Row>
        <br />
        <Row alignItems="center">
          <Col col={6}>
            <Pre>
              &lt;div class="row align-items-center" &gt;
            </Pre>
            <Pre>
              &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
            </Pre>
            <Pre>
              &lt;div /&gt;
            </Pre>
          </Col>
          <Col col={6}>
            <Pre>
              &lt;div class="col-6 offset-6" /&gt;
            </Pre>
          </Col>
        </Row>
        <br />
        <Row alignItems="end">
          <Col col={6}>
            <Pre>
              &lt;div class="row align-items-end" &gt;
            </Pre>
            <Pre>
              &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
            </Pre>
            <Pre>
              &lt;div /&gt;
            </Pre>
          </Col>
          <Col col={6}>
            <Pre>
              &lt;div class="col-6 offset-6" /&gt;
            </Pre>
          </Col>
        </Row>
        <br />
        <Row alignItems="baseline">
          <Col col={6}>
            <Pre>
              &lt;div class="row align-items-baseline" &gt;
            </Pre>
            <Pre>
              &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
            </Pre>
            <Pre>
              &lt;div /&gt;
            </Pre>
          </Col>
          <Col col={6}>
            <Pre>
              &lt;div class="col-6 offset-6" /&gt;
            </Pre>
          </Col>
        </Row>
        <br />
        <Row alignItems="stretch">
          <Col col={6}>
            <Pre>
              &lt;div class="row align-items-stretch" &gt;
            </Pre>
            <Pre>
              &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
            </Pre>
            <Pre>
              &lt;div /&gt;
            </Pre>
          </Col>
          <Col col={6}>
            <Pre>
              &lt;div class="col-6 offset-6" /&gt;
            </Pre>
          </Col>
        </Row>
        <TitleRow>
          <Col col={12}>
            <h3>Offsetting columns: Offset classes</h3>
            <a href="https://getbootstrap.com/docs/4.0/layout/grid/#offset-classes">Bootstrap documentation</a>
          </Col>
        </TitleRow>
        <Row>
          <Col offset={6} col={6}>
            <Pre>
              &lt;div class="col-6 offset-6" /&gt;
            </Pre>
          </Col>
        </Row>
        <Row>
          <Col smOffset={3} sm={6} col={12} xl={5} xlOffset={0}>
            <Pre>
              &lt;div class="col-sm-6 offset-sm-3 col-12 col-xl-5 offset-xl-0" /&gt;
            </Pre>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

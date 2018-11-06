import React from 'react';
import styled from 'styled-components';

import {
  Container, Row, Col, BaseCSS,
} from './styled-bootstrap-grid';

const TitleRow = styled(Row)`
  margin-bottom: 10px;
`;
const Pre = styled.pre`
  display: inline-block;
  width: 100%;
  background-color: #EEE;
  margin: 0;
  padding: 10px;
  white-space: normal;
`;

const customCss = `
  h3{
    font-family: 'Mali', cursive;
  }
`;

const App = props => (
  <Container>
    <BaseCSS css={customCss} />
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
          &lt;/div&gt;
        </Pre>
      </Col>
      <Col col={6}>
        <Pre>
          &lt;div class="col-6 offset-6" /&gt;
        </Pre>
      </Col>
    </Row>
    <br />
    <Row alignItems="center" smAlignItems="center">
      <Col col={6}>
        <Pre>
          &lt;div class="row align-items-center align-items-sm-center" &gt;
        </Pre>
        <Pre>
          &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
        </Pre>
        <Pre>
          &lt;/div&gt;
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
          &lt;/div&gt;
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
          &lt;/div&gt;
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
          &lt;/div&gt;
        </Pre>
      </Col>
      <Col col={6}>
        <Pre>
          &lt;div class="col-6 offset-6 " /&gt;
        </Pre>
      </Col>
    </Row>
    <br />
    <Row style={{ height: 150 }}>
      <Col col alignSelf="start">
        <Pre>
          &lt;div class="col align-self-start" /&gt;
        </Pre>
      </Col>
      <Col col alignSelf="center">
        <Pre>
          &lt;div class="col align-self-center" /&gt;
        </Pre>
      </Col>
      <Col col alignSelf="end">
        <Pre>
          &lt;div class="col align-self-end" /&gt;
        </Pre>
      </Col>
    </Row>
    <TitleRow>
      <Col col={12}>
        <h3>Alignment: Horizontal alignment</h3>
        <a href="https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment">Bootstrap documentation</a>
      </Col>
    </TitleRow>
    <Row justifyContent="start">
      <Col col={3}>
        <Pre>
          &lt;div class="row justify-content-start" &gt;
        </Pre>
        <Pre>
          &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
        </Pre>
        <Pre>
          &lt;/div&gt;
        </Pre>
      </Col>
      <Col col={3}>
        <Pre>
          &lt;div class="col-6 offset-6" /&gt;
        </Pre>
      </Col>
    </Row>
    <br />
    <Row justifyContent="end" smAlignItems="end">
      <Col col={3}>
        <Pre>
          &lt;div class="row justify-content-end justify-content-sm-end" &gt;
        </Pre>
        <Pre>
          &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
        </Pre>
        <Pre>
          &lt;/div&gt;
        </Pre>
      </Col>
      <Col col={3}>
        <Pre>
          &lt;div class="col-6 offset-6" /&gt;
        </Pre>
      </Col>
    </Row>
    <br />
    <Row justifyContent="center">
      <Col col={3}>
        <Pre>
          &lt;div class="row justify-content-center" &gt;
        </Pre>
        <Pre>
          &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
        </Pre>
        <Pre>
          &lt;/div&gt;
        </Pre>
      </Col>
      <Col col={3}>
        <Pre>
          &lt;div class="col-6 offset-6" /&gt;
        </Pre>
      </Col>
    </Row>
    <br />
    <Row justifyContent="between">
      <Col col={3}>
        <Pre>
          &lt;div class="row justify-content-between" &gt;
        </Pre>
        <Pre>
          &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
        </Pre>
        <Pre>
          &lt;/div&gt;
        </Pre>
      </Col>
      <Col col={3}>
        <Pre>
          &lt;div class="col-6 offset-6" /&gt;
        </Pre>
      </Col>
    </Row>
    <br />
    <Row justifyContent="around">
      <Col col={3}>
        <Pre>
          &lt;div class="row justify-content-around" &gt;
        </Pre>
        <Pre>
          &nbsp;&nbsp;&lt;div class="col-6 offset-6" /&gt;
        </Pre>
        <Pre>
          &lt;/div&gt;
        </Pre>
      </Col>
      <Col col={3}>
        <Pre>
          &lt;div class="col-6 offset-6" /&gt;
        </Pre>
      </Col>
    </Row>
    <TitleRow>
      <Col col={12}>
        <h3>Reordering: Order classes</h3>
        <a href="https://getbootstrap.com/docs/4.0/layout/grid/#order-classes">Bootstrap documentation</a>
      </Col>
    </TitleRow>
    <Row>
      <Col col order="last" xlOrder="last">
          Fourth, but first
        <Pre>
          &lt;div class="col order-last order-xl-last" /&gt;
        </Pre>
      </Col>
      <Col col>
            Second, but unordered
        <Pre>
          &lt;div class="col" /&gt;
        </Pre>
      </Col>
      <Col col>
            Third, but unordered
        <Pre>
          &lt;div class="col" /&gt;
        </Pre>
      </Col>
      <Col col order="first" xlOrder="first">
            first, but Fourth
        <Pre>
          &lt;div class="col order-first order-xl-first" /&gt;
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
    <TitleRow>
      <Col col={12}>
        <h3>Responsive utilities</h3>
        <a href="https://v4-alpha.getbootstrap.com/layout/responsive-utilities/">Bootstrap documentation</a>
      </Col>
    </TitleRow>
    <Row>
      <Col hiddenXsDown col={6}>        
        &lt;div class="hidden-xs-down" /&gt;
      </Col>
      <Col hiddenXsUp col={6}>
        &lt;div class="hidden-xs-up" /&gt;
      </Col>
    </Row>
    <Row>
      <Col hiddenSmDown col={6}>        
        &lt;div class="hidden-sm-down" /&gt;
      </Col>
      <Col hiddenSmUp col={6}>
        &lt;div class="hidden-sm-up" /&gt;
      </Col>
    </Row>
    <Row>
      <Col hiddenMdDown col={6}>        
        &lt;div class="hidden-md-down" /&gt;
      </Col>
      <Col hiddenMdUp col={6}>
        &lt;div class="hidden-md-up" /&gt;
      </Col>
    </Row>
    <Row>
      <Col hiddenLgDown col={6}>        
        &lt;div class="hidden-lg-down" /&gt;
      </Col>
      <Col hiddenLgUp col={6}>
        &lt;div class="hidden-lg-up" /&gt;
      </Col>
    </Row>
    <Row>
      <Col hiddenXlDown col={6}>        
        &lt;div class="hidden-xl-down" /&gt;
      </Col>
      <Col hiddenXlUp col={6}>
        &lt;div class="hidden-xl-up" /&gt;
      </Col>
    </Row>
  </Container>
);

export default App;

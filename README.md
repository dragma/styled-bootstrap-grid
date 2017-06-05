# styled-bootstrap-grid
[![npm version](https://badge.fury.io/js/styled-bootstrap-grid.svg)](https://badge.fury.io/js/styled-bootstrap-grid)

#### Credits
This module is based on the [styled-components](https://www.npmjs.com/package/styled-components) module.

This module is highly inspired by the awesome work done on the [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) module.

This module is also based on the [Twitter Bootstrap](https://v4-alpha.getbootstrap.com/getting-started/download/) v4.0.0-alpha.6 layout CSS.
**The css provided to styled bootstrap grid is not mine.**

> For more information about how does this grid system works *(I mean with classes like containers, row, col, offset, push)* , please refer to the official [Twitter Bootstrap layout documentation](https://v4-alpha.getbootstrap.com/layout/overview/).

## Install

`npm i -S styled-bootstrap-grid`

## Prerequisites

> Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`.
> *from [Bootstrap documentation](https://v4-alpha.getbootstrap.com/getting-started/introduction/#responsive-meta-tag)*

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

You also must inject the bootstrap base CSS in your application root file, like this.

```javascript
// app.js

import { injectLayoutBaseCSS } from 'styled-bootstrap-grid';

injectLayoutBaseCSS();

```

You also can inject your own css like this :

```javascript
const customCSS = `
  body {
    // whatever
  }
`;

injectLayoutBaseCSS(customCSS);
```

Basicaly, `injectLayoutBaseCSS` takes a string in param, and append the default bootstrap layout base CSS with this string with it.

the defaut bootstrap layout CSS is :

```css
@-ms-viewport {
  width: device-width;
}

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}
```

## Basics

```javascript
import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

export default (props) =>
  <Whatever>
    <Container>
      <Row>
        <Col xl="1" lg="2" md="3" sm="12">
            Hello Bootstrap Layout
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col xl={1} xlOffset={4}>
            Hello Bootstrap Fluid Layout
        </Col>
      </Row>
    </Container>
  </Whatever>;
```

## Advanced
This packages also exposes the `media` element. It can be used in your styled-components like this :

```javascript
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const CustomDiv = styled.div`
  color: black;
  ${media.phone`
    color: blue;
  `}
  ${media.tablet`
    color: red;
  `}
  ${media.desktop`
    color: purple;
  `}
  ${media.giant`
    color: yellow;
  `}
`;

export default CustomDiv;
```

Using this `media` object will help you to build media-queries that will fit the same way as Bootstrap do.

| name | css generated |
| - | - |
| phone | `@media (min-width: 576px) { /* */ }`
| tablet | `@media (min-width: 768px) { /* */ }`
| desktop | `@media (min-width: 992px) { /* */ }`
| giant | `@media (min-width: 1200px) { /* */ }`

## Props definition

### Container

| props | default | type | description |
| - | - | - | - |
| fluid | false | boolean | Equivalent to `container` and `container-fluid` |

Plus the ones inherited from [styled-components](https://www.npmjs.com/package/styled-components) `div`.

### Row
`Row` element has no props, except the ones inherited from [styled-components](https://www.npmjs.com/package/styled-components) `div`.

### Col
| props | default | type | description |
| - | - | - | - |
| sm | 0 | number *or* string | Goes from 1 to 12. Equivalent to `col-sm-*` |
| smOffset | 0 | number *or* string | Goes from 1 to 11. Equivalent to `offset-sm-*` |
| smPush | 0 | number *or* string | Goes from 1 to 11. Equivalent to `push-sm-*` |
| md | 0 | number *or* string | Goes from 1 to 12. Equivalent to `col-md-*` |
| mdOffset | 0 | number *or* string | Goes from 1 to 11. Equivalent to `offset-md-*` |
| mdPush | 0 | number *or* string | Goes from 1 to 11. Equivalent to `push-md-*` |
| lg | 0 | number *or* string | Goes from 1 to 12. Equivalent to `col-lg-*` |
| lgOffset | 0 | number *or* string | Goes from 1 to 11. Equivalent to `offset-lg-*` |
| lgPush | 0 | number *or* string | Goes from 1 to 11. Equivalent to `push-lg-*` |
| xl | 0 | number *or* string | Goes from 1 to 12. Equivalent to `col-xl-*` |
| xlOffset | 0 | number *or* string | Goes from 1 to 11. Equivalent to `offset-xl-*` |
| xlPush | 0 | number *or* string | Goes from 1 to 11. Equivalent to `push-xl-*` |

Plus the ones inherited from [styled-components](https://www.npmjs.com/package/styled-components) `div`.

## Dependencies
* [react](https://www.npmjs.com/package/react)
* [styled-components](https://www.npmjs.com/package/styled-components)

## todo
Any idea ?
Please [leave a suggestion](https://github.com/dragma/styled-bootstrap-grid/issues).

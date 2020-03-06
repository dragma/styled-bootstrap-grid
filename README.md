# styled-bootstrap-grid

![npm downloads](https://img.shields.io/npm/dt/styled-bootstrap-grid.svg?style=flat) ![npm version](https://img.shields.io/npm/v/styled-bootstrap-grid.svg?style=flat) ![definition types](https://img.shields.io/npm/types/styled-bootstrap-grid.svg)

#### Credits

This module is based on the [styled-components](https://www.npmjs.com/package/styled-components) module.

This module is highly inspired by the awesome work done on the [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) module.

This module is also based on the [Twitter Bootstrap](https://getbootstrap.com/) v4.1.3 `bootstrap-grid.css`.
**The css provided to styled bootstrap grid is not mine.**

> For more information about how does this grid system works *(I mean with classes like containers, row, col, offset, push)* , please refer to the official [Twitter Bootstrap layout documentation](https://getbootstrap.com/docs/4.1/layout/overview/).

## Install

`npm i -S styled-bootstrap-grid`

## Prerequisites

`npm i -S react styled-components`

> Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`.
> *from [Bootstrap documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/#responsive-meta-tag)*

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

You also must inject the bootstrap base CSS in your application root file, like this.

```javascript
// app.js

import { BaseCSS } from 'styled-bootstrap-grid';

export default (props) =>
  <Whatever>
    <BaseCSS />
  </Whatever>;

```

You also can inject your own css like this :

```javascript

import { BaseCSS } from 'styled-bootstrap-grid';

const customCSS = `
  body {
    color: red;
  }
`;

export default (props) =>
  <Whatever>
    <BaseCSS css={customCSS} />
  </Whatever>;
```

Basically, `BaseCSS` takes a string prop, and append the default bootstrap layout base CSS with this string.

the default bootstrap layout CSS is :

```css
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
        <Col col xl="1" lg="2" md="3" sm="6">
            Hello Bootstrap Layout
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col col={6} sm={5} md={4} mdOffset={4}>
            Hello Bootstrap Fluid Layout
        </Col>
      </Row>
    </Container>
  </Whatever>;
```

## Advanced

### Custom gutter

The package exposes a `GridThemeProvider` that allows few custom theming properties. With this provider you can :

- Define custom breakpoints
- Change the `Container` padding left and right default value
- Change the `Row` padding left and right default value
- Change the `Col` padding left and right default value

The `GridThemeProvider` can be wrapped (or wrapped-in) the `styled-component`'s `ThemeProvider`.

Example :

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

import App from './whatever/app/folder';

const gridTheme = {
  gridColumns: 24, // default 12
  breakpoints: { // defaults below
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
    // or you can use aliases
    // veryGiant: 1440,
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: { // defaults below
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
      // or you can use aliases
      // veryGiant: 1141,
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
};
const styledTheme = {
  mainColor: 'purple',
}

ReactDOM.render(
  <ThemeProvider
    theme={styledTheme}
  >
    <GridThemeProvider
      gridTheme={gridTheme}
    >
      <App />
    </GridThemeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

```

### MediaTypes

This packages also exposes the `media` element. It can be used in your styled-components like this :

```javascript
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const CustomDiv = styled.div`
  color: black;
  ${media.smaller`
    color: green;
  `}
  ${media.xs`
    color: green;
  `}
  ${media.phone`
    color: blue;
  `}
  ${media.sm`
    color: blue;
  `}
  ${media.tablet`
    color: red;
  `}
  ${media.md`
    color: red;
  `}
  ${media.desktop`
    color: purple;
  `}
  ${media.lg`
    color: purple;
  `}
  ${media.giant`
    color: yellow;
  `}
  ${media.xl`
    color: yellow;
  `}
  ${media.veryGiant`
    color: orange;
  `}
  ${media.xxl`
    color: orange;
  `}
`;

export default CustomDiv;
```

Using this `media` object will help you to build media-queries that will fit the same way as Bootstrap do.

| name | *aliases* | css generated |
| - | - | - |
| xs | smaller | all sizes: `@media (max-width: 575px) { /* */ }` |
| sm | phone | `@media (min-width: 576px) { /* */ }` |
| md | tablet | `@media (min-width: 768px) { /* */ }` |
| lg | desktop | `@media (min-width: 992px) { /* */ }` |
| xl | giant | `@media (min-width: 1200px) { /* */ }` |
| xxl | veryGiant | `@media (min-width: 1440px) { /* */ }` |

## Props definition

### GridThemeProvider

| props | default | type | description |
| - | - | - | - |
| gridTheme | undefined | Object | See description below(*) |

(*)

```javascript

const gridTheme = {
  gridColumns: 12, // default 12
  breakpoints: { // defaults below
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
    // or you can use aliases
    // veryGiant: 1440,
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: { // defaults below
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
      // or you can use aliases
      // veryGiant: 1141,
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
}

```

### Container

| props | default | type | description |
| - | - | - | - |
| fluid | false | boolean | Equivalent to `container` and `container-fluid` |

Plus the ones inherited from [styled-components](https://www.npmjs.com/package/styled-components) `div`.

### Row

| props | default | type | description |
| - | - | - | - |
| alignItems | `undefined` | `string` | `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-items-{value}` |
| smAlignItems | `undefined` | `string` | `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-items-sm-{value}` |
| mdAlignItems | `undefined` | `string` | `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-items-md-{value}` |
| lgAlignItems | `undefined` | `string` | `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-items-lg-{value}` |
| xlAlignItems | `undefined` | `string` | `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-items-xl-{value}` |
| justifyContent | `undefined` | `string` | `start` or `end` or `center` or `between` or `around`. Equivalent to `justify-content-{value}` |
| smJustifyContent | `undefined` | `string` | `start` or `end` or `center` or `between` or `around`. Equivalent to `justify-content-sm-{value}` |
| mdJustifyContent | `undefined` | `string` | `start` or `end` or `center` or `between` or `around`. Equivalent to `justify-content-md-{value}` |
| lgJustifyContent | `undefined` | `string` | `start` or `end` or `center` or `between` or `around`. Equivalent to `justify-content-lg-{value}` |
| xlJustifyContent | `undefined` | `string` | `start` or `end` or `center` or `between` or `around`. Equivalent to `justify-content-xl-{value}` |

Plus the ones inherited from [styled-components](https://www.npmjs.com/package/styled-components) `div`.

### Col

| props | default | type | description |
| - | - | - | - |
| col | `undefined` | `number` *or* `string` *or* `boolean` | Goes from 1 to 12. Equivalent to `col-*` (or `col` in case of `true`) |
| offset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-*` |
| auto | `undefined` | `boolean` | Equivalent to `col-auto` |
| alignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-{value}` |
| order | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-{value}` |
| noGutter | `undefined` | `boolean` | Equivalent to `no-gutter` |
| sm | `undefined` | `number` *or* `string` | Goes from 1 to 12. Equivalent to `col-sm-*` (or `col-sm` in case of `true`) |
| hiddenXsUp | `undefined` | `boolean` | Hides content from xs breakpoint to infinity |
| hiddenXsDown | `undefined` | `boolean` | Hides content from xs breakpoint to 0 |
| smOffset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-sm-*` |
| smAuto | `undefined` | `boolean` | Equivalent to `col-sm-auto` |
| smAlignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-sm-{value}` |
| smOrder | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-sm-{value}` |
| hiddenSmUp | `undefined` | `boolean` | Hides content from sm breakpoint to infinity |
| hiddenSmDown | `undefined` | `boolean` | Hides content from sm breakpoint to 0 |
| md | `undefined` | `number` *or* `string` | Goes from 1 to 12. Equivalent to `col-md-*` (or `col-md` in case of `true`) |
| mdOffset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-md-*` |
| mdAuto | `undefined` | `boolean` | Equivalent to `col-md-auto` |
| mdAlignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-md-{value}` |
| mdOrder | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-md-{value}` |
| hiddenMdUp | `undefined` | `boolean` | Hides content from md breakpoint to infinity |
| hiddenMdDown | `undefined` | `boolean` | Hides content from md breakpoint to 0 |
| lg | `undefined` | `number` *or* `string` | Goes from 1 to 12. Equivalent to `col-lg-*` (or `col-lg` in case of `true`) |
| lgOffset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-lg-*` |
| lgAuto | `undefined` | `boolean` | Equivalent to `col-lg-auto` |
| lgAlignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-lg-{value}` |
| lgOrder | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-lg-{value}` |
| hiddenLgUp | `undefined` | `boolean` | Hides content from lg breakpoint to infinity |
| hiddenLgDown | `undefined` | `boolean` | Hides content from lg breakpoint to 0 |
| xl | `undefined` | `number` *or* `string` | Goes from 1 to 12. Equivalent to `col-xl-*` (or `col-xl` in case of `true`) |
| xlOffset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-xl-*` |
| xlAuto | `undefined` | `boolean` | Equivalent to `col-xl-auto` |
| xlAlignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-xl-{value}` |
| xlOrder | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-xl-{value}` |
| hiddenXlUp | `undefined` | `boolean` | Hides content from xl breakpoint to infinity |
| hiddenXlDown | `undefined` | `boolean` | Hides content from xl breakpoint to 0 |

Plus the ones inherited from [styled-components](https://www.npmjs.com/package/styled-components) `div`.

## Run example

To run the example

1. Open a terminal and  go to `example`'s directory with `cd <styled-bootstrap-grid folder path>/example`
2. Install `example`'s dependencies with `yarn`
3. Run `yarn start`

## Dependencies

- [react](https://www.npmjs.com/package/react)
- [styled-components](https://www.npmjs.com/package/styled-components)

## todo

- complete web documentation

Any other idea ?
Please [leave a suggestion](https://github.com/dragma/styled-bootstrap-grid/issues).

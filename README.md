# styled-bootstrap-grid

[![npm version](https://badge.fury.io/js/styled-bootstrap-grid.svg)](https://badge.fury.io/js/styled-bootstrap-grid)

## DEPRECATED VERSION
[styled-components](https://www.npmjs.com/package/styled-components) has launched their v4 module, that has some breaking changes.
This npm version will be the last to support v3

#### Credits
This module is based on the [styled-components](https://www.npmjs.com/package/styled-components) module.

This module is highly inspired by the awesome work done on the [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) module.

This module is also based on the [Twitter Bootstrap](https://getbootstrap.com/) v4.0.0 `bootstrap-grid.css`.
**The css provided to styled bootstrap grid is not mine.**

> For more information about how does this grid system works *(I mean with classes like containers, row, col, offset, push)* , please refer to the official [Twitter Bootstrap layout documentation](https://v4-alpha.getbootstrap.com/layout/overview/).

## Install

`npm i -S styled-bootstrap-grid`

## Prerequisites

> Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`.
> *from [Bootstrap documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/#responsive-meta-tag)*

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
import { injectLayoutBaseCSS, GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

import App from './whatever/app/folder';

injectLayoutBaseCSS();

const gridTheme = {
  breakpoints: { // defaults below
    giant: 1200,
    xl: 1200,
    desktop: 992,
    lg: 992,
    tablet: 768,
    md: 768,
    phone: 576,
    sm: 576,
    smaller: 575,
    xs: 575,
  },
  row: {
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
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

### Media

This packages also exposes the `media` element. It can be used in your styled-components like this :

```javascript
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const CustomDiv = styled.div`
  color: black;
  ${media.col`
    color: orange;
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
`;

export default CustomDiv;
```

Using this `media` object will help you to build media-queries that will fit the same way as Bootstrap do.

| name | alias | css generated |
| - | - | - |
| xs | *smaller* | all sizes: `@media (max-width: 575px) { /* */ }` |
| sm | *phone* | `@media (min-width: 576px) { /* */ }` |
| md | *tablet* | `@media (min-width: 768px) { /* */ }` |
| lg | *desktop* | `@media (min-width: 992px) { /* */ }` |
| xl | *giant* | `@media (min-width: 1200px) { /* */ }` |

## Props definition

### GridThemeProvider

| props | default | type | description |
| - | - | - | - |
| gridTheme | undefined | Object | See description below(*) |

(*)

```javascript

const gridTheme = {
  breakpoints: { // defaults below
    giant: 1200,
    xl: 1200,
    desktop: 992,
    lg: 992,
    tablet: 768,
    md: 768,
    phone: 576,
    sm: 576,
    smaller: 575,
    xs: 575,
  },
  row: {
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
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
| smOffset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-sm-*` |
| smAuto | `undefined` | `boolean` | Equivalent to `col-sm-auto` |
| smAlignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-sm-{value}` |
| smOrder | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-sm-{value}` |
| md | `undefined` | `number` *or* `string` | Goes from 1 to 12. Equivalent to `col-md-*` (or `col-md` in case of `true`) |
| mdOffset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-md-*` |
| mdAuto | `undefined` | `boolean` | Equivalent to `col-md-auto` |
| mdAlignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-md-{value}` |
| mdOrder | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-md-{value}` |
| lg | `undefined` | `number` *or* `string` | Goes from 1 to 12. Equivalent to `col-lg-*` (or `col-lg` in case of `true`) |
| lgOffset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-lg-*` |
| lgAuto | `undefined` | `boolean` | Equivalent to `col-lg-auto` |
| lgAlignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-lg-{value}` |
| lgOrder | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-lg-{value}` |
| xl | `undefined` | `number` *or* `string` | Goes from 1 to 12. Equivalent to `col-xl-*` (or `col-xl` in case of `true`) |
| xlOffset | `undefined` | `number` *or* `string` | Goes from 0 to 11. Equivalent to `offset-xl-*` |
| xlAuto | `undefined` | `boolean` | Equivalent to `col-xl-auto` |
| xlAlignSelf | `undefined` | `string` | `auto` or `start` or `end` or `center` or `baseline` or `stretch`. Equivalent to `align-self-xl-{value}` |
| xlOrder | `undefined` | `number` *or* `string` | `first` or `last` or `0` to `12`. Equivalent to `order-xl-{value}` |

Plus the ones inherited from [styled-components](https://www.npmjs.com/package/styled-components) `div`.

## Run example

To run the example

1. Open a terminal and install `styled-bootstrap-grid`'s dependencies with `npm i`
2. Run `npm run build:watch`
3. Open a terminal and  go to `example`'s directory with `cd <styled-bootstrap-grid folder path>/example`
4. Install `example`'s dependencies with `yarn`
5. Run `yarn start`

## Dependencies

- [react](https://www.npmjs.com/package/react)
- [styled-components](https://www.npmjs.com/package/styled-components)

## todo

- complete web documentation

Any othre idea ?
Please [leave a suggestion](https://github.com/dragma/styled-bootstrap-grid/issues).

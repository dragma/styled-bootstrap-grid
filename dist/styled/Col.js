'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var css = {
  col: '\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%;\n  ',
  1: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.333333%;\n        -ms-flex: 0 0 8.333333%;\n            flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  ',
  2: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.666667%;\n        -ms-flex: 0 0 16.666667%;\n            flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  ',
  3: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n  ',
  4: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.333333%;\n        -ms-flex: 0 0 33.333333%;\n            flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  ',
  5: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.666667%;\n        -ms-flex: 0 0 41.666667%;\n            flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  ',
  6: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n  ',
  7: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.333333%;\n        -ms-flex: 0 0 58.333333%;\n            flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  ',
  8: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.666667%;\n        -ms-flex: 0 0 66.666667%;\n            flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  ',
  9: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n  ',
  10: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.333333%;\n        -ms-flex: 0 0 83.333333%;\n            flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  ',
  11: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.666667%;\n        -ms-flex: 0 0 91.666667%;\n            flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  ',
  12: '\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n  ',
  offset: {
    1: 'margin-left: 8.333333%;',
    2: 'margin-left: 16.666667%;',
    3: 'margin-left: 25%;',
    4: 'margin-left: 33.333333%;',
    5: 'margin-left: 41.666667%;',
    6: 'margin-left: 50%;',
    7: 'margin-left: 58.333333%;',
    8: 'margin-left: 66.666667%;',
    9: 'margin-left: 75%;',
    10: 'margin-left: 83.333333%;',
    11: 'margin-left: 91.666667%;'
  },
  push: {
    1: 'left: 8.333333%;',
    2: 'left: 16.666667%;',
    3: 'left: 25%;',
    4: 'left: 33.333333%;',
    5: 'left: 41.666667%;',
    6: 'left: 50%;',
    7: 'left: 58.333333%;',
    8: 'left: 66.666667%;',
    9: 'left: 75%;',
    10: 'left: 83.333333%;',
    11: 'left: 91.666667%;'
  }
};

var buildCSS = function buildCSS(colVal, offsetVal, pushVal) {
  var buildCss = '';
  if (colVal) {
    buildCss = '\n      ' + buildCss + '\n      ' + css[colVal] + '\n    ';
  }
  if (offsetVal) {
    buildCss = '\n      ' + buildCss + '\n      ' + css.offset[offsetVal] + '\n    ';
  }
  if (pushVal) {
    buildCss = '\n      ' + buildCss + '\n      ' + css.push[pushVal] + '\n    ';
  }
  return buildCss;
};

var Col = _styledComponents2.default.div(_templateObject, function (p) {
  return p.theme.styledBootstrapGrid.getColPadding();
}, function (p) {
  return p.theme.styledBootstrapGrid.getColPadding();
}, function (props) {
  return props.sm ? _media2.default.phone(_templateObject2, buildCSS(props.sm, props.smOffset, props.smPush)) : null;
}, function (props) {
  return props.md ? _media2.default.tablet(_templateObject2, buildCSS(props.md, props.mdOffset, props.mdPush)) : null;
}, function (props) {
  return props.lg ? _media2.default.desktop(_templateObject2, buildCSS(props.lg, props.lgOffset, props.lgPush)) : null;
}, function (props) {
  return props.xl ? _media2.default.giant(_templateObject2, buildCSS(props.xl, props.xlOffset, props.xlPush)) : null;
});

exports.default = Col;
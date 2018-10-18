'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n      @media (max-width: ', 'px) {\n        ', '\n      }\n    '], ['\n      @media (max-width: ', 'px) {\n        ', '\n      }\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      @media (min-width: ', 'px) {\n        ', '\n      }\n    '], ['\n      @media (min-width: ', 'px) {\n        ', '\n      }\n    ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultBreakpoints = {
  giant: 1200,
  xl: 1200,
  desktop: 992,
  lg: 992,
  tablet: 768,
  md: 768,
  phone: 576,
  sm: 576,
  smaller: 575,
  xs: 575
};

var getBreakpoints = function getBreakpoints(props) {
  if (props.theme && props.theme.grid && props.theme.grid.breakpoints) {
    return props.theme.grid.breakpoints;
  }
  return defaultBreakpoints;
};

var media = Object.keys(defaultBreakpoints).reduce(function (accumulator, label) {
  if (label === 'xs' || label === 'smaller') {
    accumulator[label] = function () {
      return (0, _styledComponents.css)(_templateObject, function (props) {
        return getBreakpoints(props).xs;
      }, _styledComponents.css.apply(undefined, arguments));
    };
  } else {
    accumulator[label] = function () {
      return (0, _styledComponents.css)(_templateObject2, function (props) {
        return getBreakpoints(props)[label];
      }, _styledComponents.css.apply(undefined, arguments));
    };
  }
  return accumulator;
}, {});

exports.default = media;
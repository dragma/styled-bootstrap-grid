'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultBreakpoints = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    @media (min-width: ', 'px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', 'px) {\n      ', '\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    @media (max-width: ', 'px) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'px) {\n      ', '\n    }\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultBreakpoints = exports.defaultBreakpoints = {
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
  if (props.theme && props.theme.styledBootstrapGrid && props.theme.styledBootstrapGrid.breakpoints) {
    return _extends({}, defaultBreakpoints, props.theme.styledBootstrapGrid.breakpoints);
  }
  return defaultBreakpoints;
};

var media = Object.keys(defaultBreakpoints).reduce(function (accumulator, label) {
  accumulator.max = accumulator.max || {};
  accumulator.min = accumulator.min || {};
  var minMedia = function minMedia() {
    return (0, _styledComponents.css)(_templateObject, function (props) {
      return getBreakpoints(props)[label];
    }, _styledComponents.css.apply(undefined, arguments));
  };
  var maxMedia = function maxMedia() {
    return (0, _styledComponents.css)(_templateObject2, function (props) {
      return getBreakpoints(props)[label];
    }, _styledComponents.css.apply(undefined, arguments));
  };
  if (label === 'xs' || label === 'smaller') {
    accumulator[label] = maxMedia;
  } else {
    accumulator[label] = minMedia;
  }
  accumulator.max[label] = maxMedia;
  accumulator.min[label] = minMedia;
  return accumulator;
}, {});

exports.default = media;
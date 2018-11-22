'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_ALIASES = {
  xs: 'smaller',
  sm: 'phone',
  md: 'tablet',
  lg: 'desktop',
  xl: 'giant'
};
var DEFAULT_ALIASES_REVERSE = {
  smaller: 'xs',
  phone: 'sm',
  tablet: 'md',
  desktop: 'lg',
  giant: 'xl'
};

var makeAliases = function makeAliases() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var data = Object.assign({}, breakpoints);
  Object.keys(breakpoints).forEach(function (key) {
    if (DEFAULT_ALIASES[key]) {
      data[DEFAULT_ALIASES[key]] = breakpoints[key];
    }
  });

  Object.keys(breakpoints).forEach(function (key) {
    if (DEFAULT_ALIASES_REVERSE[key] && !data[DEFAULT_ALIASES_REVERSE[key]]) {
      data[DEFAULT_ALIASES_REVERSE[key]] = breakpoints[key];
    }
  });
  return data;
};

exports.default = makeAliases;
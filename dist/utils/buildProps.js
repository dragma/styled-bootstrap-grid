'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var buildProps = function buildProps(props) {
  var propsKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['children'];

  var otherProps = Object.keys(props).filter(function (key) {
    return propsKeys.indexOf(key) === -1;
  }).reduce(function (acc, key) {
    acc[key] = props[key];
    return acc;
  }, {});
  return otherProps;
};

exports.default = buildProps;
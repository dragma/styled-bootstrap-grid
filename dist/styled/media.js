'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    @media (min-width: ', 'px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', 'px) {\n      ', '\n    }\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

var media = Object.keys(sizes).reduce(function (accumulator, label) {
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, sizes[label], _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});

exports.default = media;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t  @media (max-width: ', 'px) {\n\t    ', '\n\t  }\n\t'], ['\n\t  @media (max-width: ', 'px) {\n\t    ', '\n\t  }\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n      @media (min-width: ', 'px) {\n        ', '\n      }\n    '], ['\n      @media (min-width: ', 'px) {\n        ', '\n      }\n    ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

var media = Object.keys(sizes).reduce(function (accumulator, label) {
  if (label === 'phone') {
    accumulator[label] = function () {
      return (0, _styledComponents.css)(_templateObject, sizes.tablet - 1, _styledComponents.css.apply(undefined, arguments));
    };
  } else {
    accumulator[label] = function () {
      return (0, _styledComponents.css)(_templateObject2, sizes[label], _styledComponents.css.apply(undefined, arguments));
    };
  }
  return accumulator;
}, {});

exports.default = media;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultCSS = '\n  @-ms-viewport {\n    width: device-width;\n  }\n\n  html {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n  }\n';

exports.default = (0, _styledComponents.createGlobalStyle)(_templateObject, defaultCSS, function (p) {
  return p.css;
});
;
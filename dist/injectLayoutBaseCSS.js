'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultCSS = '\n  @-ms-viewport {\n    width: device-width;\n  }\n\n  html {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n  }\n';

exports.default = function () {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (css == null) {
    return (0, _styledComponents.injectGlobal)(_templateObject, defaultCSS);
  }
  return (0, _styledComponents.injectGlobal)(_templateObject2, defaultCSS, css);
};
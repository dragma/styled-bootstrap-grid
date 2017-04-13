'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n      ', '\n      ', '\n    '], ['\n      ', '\n      ', '\n    ']);

var _styledComponent = require('styled component');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultCSS = '\n  @-ms-viewport {\n    width: device-width;\n  }\n\n  html {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n  }\n';

exports.default = function () {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (css === null) {
    return (0, _styledComponent.injectGlobal)(_templateObject, defaultCSS);
  } else if (append) {
    return (0, _styledComponent.injectGlobal)(_templateObject2, defaultCSS, css);
  }
  return (0, _styledComponent.injectGlobal)(_templateObject, css);
};
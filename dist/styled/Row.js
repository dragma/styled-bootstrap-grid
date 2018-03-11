'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var css = {
  alignItems: {
    start: '\n      -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n      align-items: flex-start !important;\n    ',
    end: '\n      -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n      align-items: flex-end !important;\n    ',
    center: '\n      -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n      align-items: center !important;\n    ',
    baseline: '\n      -webkit-box-align: baseline !important;\n      -ms-flex-align: baseline !important;\n      align-items: baseline !important;\n    ',
    stretch: '\n      -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n      align-items: stretch !important;\n    '
  }
};

var Row = _styledComponents2.default.div(_templateObject, function (p) {
  return p.alignItems && css.alignItems[p.alignItems];
}, function (p) {
  return p.smAlignItems && _media2.default.sm(_templateObject2, css.alignItems[p.smAlignItems]);
}, function (p) {
  return p.mdAlignItems && _media2.default.md(_templateObject2, css.alignItems[p.mdAlignItems]);
}, function (p) {
  return p.lgAlignItems && _media2.default.lg(_templateObject2, css.alignItems[p.lgAlignItems]);
}, function (p) {
  return p.xlAlignItems && _media2.default.xl(_templateObject2, css.alignItems[p.xlAlignItems]);
});

exports.default = Row;
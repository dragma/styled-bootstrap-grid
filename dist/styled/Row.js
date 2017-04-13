'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding-right: -15px;\n    padding-left: -15px;\n  '], ['\n    padding-right: -15px;\n    padding-left: -15px;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = _styledComponents2.default.div(_templateObject, _media2.default.phone(_templateObject2), _media2.default.tablet(_templateObject2), _media2.default.desktop(_templateObject2), _media2.default.giant(_templateObject2));

exports.default = Row;
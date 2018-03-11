'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n  margin-right: auto;\n  margin-left: auto;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  width: 100%;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n  margin-right: auto;\n  margin-left: auto;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    max-width: 540px;\n  '], ['\n    max-width: 540px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    max-width: 720px;\n  '], ['\n    max-width: 720px;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    max-width: 960px;\n  '], ['\n    max-width: 960px;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    max-width: 1140px;\n  '], ['\n    max-width: 1140px;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (p) {
  if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getContainerPadding) {
    return 15;
  }
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, function (p) {
  if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getContainerPadding) {
    return 15;
  }
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, _media2.default.phone(_templateObject2), _media2.default.tablet(_templateObject3), _media2.default.desktop(_templateObject4), _media2.default.giant(_templateObject5));

exports.default = Container;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding-right: ', 'px;\n    padding-left: ', 'px;\n    width: 540px;\n    max-width: 100%;\n  '], ['\n    padding-right: ', 'px;\n    padding-left: ', 'px;\n    width: 540px;\n    max-width: 100%;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    padding-right: ', 'px;\n    padding-left: ', 'px;\n    width: 720px;\n    max-width: 100%;\n  '], ['\n    padding-right: ', 'px;\n    padding-left: ', 'px;\n    width: 720px;\n    max-width: 100%;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    padding-right: ', 'px;\n    padding-left: ', 'px;\n    width: 960px;\n    max-width: 100%;\n  '], ['\n    padding-right: ', 'px;\n    padding-left: ', 'px;\n    width: 960px;\n    max-width: 100%;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    padding-right: ', 'px;\n    padding-left: ', 'px;\n    width: 1140px;\n    max-width: 100%;\n  '], ['\n    padding-right: ', 'px;\n    padding-left: ', 'px;\n    width: 1140px;\n    max-width: 100%;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, _media2.default.phone(_templateObject2, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}), _media2.default.tablet(_templateObject3, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}), _media2.default.desktop(_templateObject4, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}), _media2.default.giant(_templateObject5, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, function (p) {
  return p.theme.styledBootstrapGrid.getContainerPadding();
}));

exports.default = Container;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n  margin-right: auto;\n  margin-left: auto;\n'], ['\n  width: 100%;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n  margin-right: auto;\n  margin-left: auto;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerFluid = _styledComponents2.default.div(_templateObject, function (p) {
  if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getContainerPadding) {
    return 15;
  }
  return p.theme.styledBootstrapGrid.getContainerPadding();
}, function (p) {
  if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getContainerPadding) {
    return 15;
  }
  return p.theme.styledBootstrapGrid.getContainerPadding();
});

exports.default = ContainerFluid;
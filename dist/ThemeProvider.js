'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultContainerMaxWidth = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _aliases = require('./aliases');

var _aliases2 = _interopRequireDefault(_aliases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultContainerMaxWidth = exports.defaultContainerMaxWidth = {
  xl: 1140,
  lg: 960,
  md: 720,
  sm: 540,
  xs: 540
};

exports.default = function (props) {
  var _props$gridTheme = props.gridTheme,
      theme = _props$gridTheme === undefined ? {} : _props$gridTheme;

  var getContainerPadding = function getContainerPadding() {
    if (myTheme.styledBootstrapGrid.container) {
      if (isNumber(myTheme.styledBootstrapGrid.container.padding)) {
        return myTheme.styledBootstrapGrid.container.padding;
      }
    }
    return 15;
  };
  var getContainerMaxWidth = function getContainerMaxWidth(breakpoint) {
    if (myTheme.styledBootstrapGrid.container && myTheme.styledBootstrapGrid.container.maxWidth) {
      var size = myTheme.styledBootstrapGrid.container.maxWidth[breakpoint];
      if (isNumber(size)) {
        return size;
      }
      return defaultContainerMaxWidth[breakpoint];
    }
  };
  var getRowPadding = function getRowPadding() {
    if (myTheme.styledBootstrapGrid.row) {
      if (isNumber(myTheme.styledBootstrapGrid.row.padding)) {
        return myTheme.styledBootstrapGrid.row.padding;
      }
    }
    return 15;
  };
  var getColPadding = function getColPadding() {
    if (myTheme.styledBootstrapGrid.col) {
      if (isNumber(myTheme.styledBootstrapGrid.col.padding)) {
        return myTheme.styledBootstrapGrid.col.padding;
      }
    }
    return 15;
  };

  var myTheme = {
    styledBootstrapGrid: {
      breakpoints: (0, _aliases2.default)(theme.breakpoints),
      col: theme.col,
      row: theme.row,
      container: _extends({}, theme.container, {
        maxWidth: _extends({}, (0, _aliases2.default)(defaultContainerMaxWidth), (0, _aliases2.default)((theme.container || {}).maxWidth || {}))
      }),
      getContainerPadding: getContainerPadding,
      getContainerMaxWidth: getContainerMaxWidth,
      getRowPadding: getRowPadding,
      getColPadding: getColPadding
    }
  };

  return _react2.default.createElement(_styledComponents.ThemeProvider, _extends({ theme: myTheme }, props));
};

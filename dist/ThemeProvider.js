'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var _props$gridTheme = props.gridTheme,
      theme = _props$gridTheme === undefined ? {} : _props$gridTheme;

  var myTheme = {
    styledBootstrapGrid: {
      breakpoints: theme.breakpoints,
      col: theme.col || {},
      row: theme.row || {},
      container: theme.container || {},
      getContainerPadding: function getContainerPadding() {
        if (theme.container) {
          if (!Number.isNaN(parseInt(theme.container.padding, 10))) {
            return theme.container.padding;
          }
        }
        return 15;
      },
      getRowPadding: function getRowPadding() {
        if (theme.row) {
          if (!Number.isNaN(parseInt(theme.row.padding, 10))) {
            return theme.row.padding;
          }
        }
        return 15;
      },
      getColPadding: function getColPadding() {
        if (theme.col) {
          if (!Number.isNaN(parseInt(theme.col.padding, 10))) {
            return theme.col.padding;
          }
        }
        return 15;
      }
    }
  };
  console.log(myTheme);

  return _react2.default.createElement(_styledComponents.ThemeProvider, _extends({ theme: myTheme }, props));
};
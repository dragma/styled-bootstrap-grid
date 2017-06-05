'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buildProps = require('./utils/buildProps');

var _buildProps2 = _interopRequireDefault(_buildProps);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var row = function row(props) {
  var children = props.children;


  var propsKeys = ['children'];

  var otherProps = (0, _buildProps2.default)(props, propsKeys);

  return _react2.default.createElement(
    _styled.Row,
    _extends({
      'data-name': 'row'
    }, otherProps),
    children
  );
};

row.propTypes = {
  children: _react2.default.PropTypes.any
};

row.defaultProps = {
  children: null
};

exports.default = row;
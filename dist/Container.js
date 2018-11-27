'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MyContainer = function MyContainer(props) {
  var fluid = props.fluid,
      children = props.children,
      forwardedRef = props.forwardedRef,
      otherProps = _objectWithoutProperties(props, ['fluid', 'children', 'forwardedRef']);

  if (fluid) {
    return _react2.default.createElement(
      _styled.ContainerFluid,
      _extends({ 'data-name': 'container-fluid', ref: forwardedRef }, otherProps),
      children
    );
  }
  return _react2.default.createElement(
    _styled.Container,
    _extends({ 'data-name': 'container', ref: forwardedRef }, otherProps),
    children
  );
};

MyContainer.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired,
  fluid: _propTypes2.default.bool
};

MyContainer.defaultProps = {
  fluid: false
};

exports.default = _react2.default.forwardRef(function (props, ref) {
  return _react2.default.createElement(MyContainer, _extends({ forwardedRef: ref }, props));
});
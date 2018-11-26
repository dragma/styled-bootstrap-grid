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

var container = function container(props, ref) {
  var fluid = props.fluid,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ['fluid', 'children']);

  if (fluid) {
    return _react2.default.createElement(
      _styled.ContainerFluid,
      _extends({ 'data-name': 'container-fluid', ref: ref }, otherProps),
      children
    );
  }
  return _react2.default.createElement(
    _styled.Container,
    _extends({ 'data-name': 'container', ref: ref }, otherProps),
    children
  );
};

container.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired,
  fluid: _propTypes2.default.bool
};

container.defaultProps = {
  fluid: false
};

exports.default = _react2.default.forwardRef(container);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = function container(props) {
  var fluid = props.fluid,
      children = props.children;


  var propsKeys = ['fluid', 'children'];

  var otherProps = Object.keys(props).filter(function (key) {
    return propsKeys.indexOf(key) === -1;
  }).reduce(function (acc, key) {
    return acc[key] = props[key];
  }, {});

  if (fluid) {
    return _react2.default.createElement(
      _styled.ContainerFluid,
      _extends({ 'data-name': 'container-fluid' }, otherProps),
      children
    );
  }
  return _react2.default.createElement(
    _styled.Container,
    _extends({ 'data-name': 'container' }, otherProps),
    children
  );
};

container.propTypes = {
  children: _react2.default.PropTypes.any,
  fluid: _react2.default.PropTypes.bool.isRequired
};

container.defaultProps = {
  children: null,
  fluid: false
};

exports.default = container;
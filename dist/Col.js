'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var col = function col(props) {
  var sm = props.sm,
      smOffset = props.smOffset,
      smPush = props.smPush,
      md = props.md,
      mdOffset = props.mdOffset,
      mdPush = props.mdPush,
      lg = props.lg,
      lgOffset = props.lgOffset,
      lgPush = props.lgPush,
      xl = props.xl,
      xlOffset = props.xlOffset,
      xlPush = props.xlPush,
      children = props.children;


  var propsKeys = ['sm', 'smOffset', 'smPush', 'md', 'mdOffset', 'mdPush', 'lg', 'lgOffset', 'lgPush', 'xl', 'xlOffset', 'xlPush', 'children'];

  var otherProps = Object.keys(props).filter(function (key) {
    return propsKeys.indexOf(key) === -1;
  }).reduce(function (acc, key) {
    return acc[key] = props[key];
  }, {});

  var dataName = '';
  // xs
  if (sm) {
    dataName = dataName + 'col-sm-' + sm + ' ';
  }
  if (smOffset) {
    dataName = dataName + 'offset-sm-' + smOffset;
  }
  if (smPush) {
    dataName = dataName + 'push-sm-' + smPush;
  }

  // md
  if (md) {
    dataName = dataName + 'col-md-' + md + ' ';
  }
  if (mdOffset) {
    dataName = dataName + 'offset-md-' + mdOffset;
  }
  if (mdPush) {
    dataName = dataName + 'push-md-' + mdPush;
  }

  // lg
  if (lg) {
    dataName = dataName + 'col-lg-' + lg + ' ';
  }
  if (mdOffset) {
    dataName = dataName + 'offset-md-' + mdOffset;
  }
  if (mdPush) {
    dataName = dataName + 'push-md-' + mdPush;
  }

  // xl
  if (xl) {
    dataName = dataName + 'col-xl-' + xl;
  }
  if (xlOffset) {
    dataName = dataName + 'offset-xl-' + xlOffset;
  }
  if (xlPush) {
    dataName = dataName + 'push-xl-' + xlPush;
  }

  return _react2.default.createElement(
    _styled.Col,
    _extends({
      sm: sm,
      smOffset: smOffset,
      smPush: smPush,
      md: md,
      mdOffset: mdOffset,
      mdPush: mdPush,
      lg: lg,
      lgOffset: lgOffset,
      lgPush: lgPush,
      xl: xl,
      xlOffset: xlOffset,
      xlPush: xlPush,
      'data-name': dataName
    }, otherProps),
    children
  );
};

var stringOrNumberReactPropType = _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired;

col.propTypes = {
  children: _react2.default.PropTypes.any.isRequired,
  sm: stringOrNumberReactPropType,
  md: stringOrNumberReactPropType,
  lg: stringOrNumberReactPropType,
  xl: stringOrNumberReactPropType,
  smOffset: stringOrNumberReactPropType,
  mdOffset: stringOrNumberReactPropType,
  lgOffset: stringOrNumberReactPropType,
  xlOffset: stringOrNumberReactPropType,
  smPush: stringOrNumberReactPropType,
  mdPush: stringOrNumberReactPropType,
  lgPush: stringOrNumberReactPropType,
  xlPush: stringOrNumberReactPropType
};

col.defaultProps = {
  children: null,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  smOffset: 0,
  mdOffset: 0,
  lgOffset: 0,
  xlOffset: 0,
  smPush: 0,
  mdPush: 0,
  lgPush: 0,
  xlPush: 0
};

exports.default = col;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _buildProps = require('./utils/buildProps');

var _buildProps2 = _interopRequireDefault(_buildProps);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var col = function col(props) {
  var col = props.col,
      offset = props.offset,
      auto = props.auto,
      sm = props.sm,
      smOffset = props.smOffset,
      smAuto = props.smAuto,
      md = props.md,
      mdOffset = props.mdOffset,
      mdAuto = props.mdAuto,
      lg = props.lg,
      lgOffset = props.lgOffset,
      lgAuto = props.lgAuto,
      xl = props.xl,
      xlOffset = props.xlOffset,
      xlAuto = props.xlAuto,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ['col', 'offset', 'auto', 'sm', 'smOffset', 'smAuto', 'md', 'mdOffset', 'mdAuto', 'lg', 'lgOffset', 'lgAuto', 'xl', 'xlOffset', 'xlAuto', 'children']);

  var dataName = '';
  if (col) {
    if (!isNaN(parseInt(col, 10))) {
      dataName = dataName + ' col-' + col;
    } else {
      dataName = dataName + ' col';
    }
  }
  if (!isNaN(parseInt(offset, 10))) {
    dataName = dataName + ' offset-' + offset;
  }
  if (auto) {
    dataName = dataName + ' col-auto';
  }

  if (sm) {
    if (!isNaN(parseInt(sm, 10))) {
      dataName = dataName + ' col-sm-' + sm;
    } else {
      dataName = dataName + ' col-sm';
    }
  }
  if (!isNaN(parseInt(smOffset, 10))) {
    dataName = dataName + ' offset-sm-' + smOffset;
  }
  if (smAuto) {
    dataName = dataName + ' col-sm-auto';
  }

  if (md) {
    if (!isNaN(parseInt(md, 10))) {
      dataName = dataName + ' col-md-' + md;
    } else {
      dataName = dataName + ' col-md';
    }
  }
  if (!isNaN(parseInt(mdOffset, 10))) {
    dataName = dataName + ' offset-md-' + mdOffset;
  }
  if (mdAuto) {
    dataName = dataName + ' col-md-auto';
  }

  if (lg) {
    if (!isNaN(parseInt(lg, 10))) {
      dataName = dataName + ' col-lg-' + lg;
    } else {
      dataName = dataName + ' col-lg';
    }
  }
  if (!isNaN(parseInt(lgOffset, 10))) {
    dataName = dataName + ' offset-lg-' + lgOffset;
  }
  if (lgAuto) {
    dataName = dataName + ' col-lg-auto';
  }

  if (xl) {
    if (!isNaN(parseInt(xl, 10))) {
      dataName = dataName + ' col-xl-' + xl;
    } else {
      dataName = dataName + ' col-xl';
    }
  }
  if (!isNaN(parseInt(xlOffset, 10))) {
    dataName = dataName + ' offset-xl-' + xlOffset;
  }
  if (xlAuto) {
    dataName = dataName + ' col-xl-auto';
  }

  dataName = dataName.trim();
  return _react2.default.createElement(
    _styled.Col,
    _extends({
      col: col,
      offset: offset,
      auto: auto,

      sm: sm,
      smOffset: smOffset,
      smAuto: smAuto,

      md: md,
      mdOffset: mdOffset,
      mdAuto: mdAuto,

      lg: lg,
      lgOffset: lgOffset,
      lgAuto: lgAuto,

      xl: xl,
      xlOffset: xlOffset,
      xlAuto: xlAuto,

      'data-name': dataName
    }, otherProps),
    children
  );
};

var stringOrNumberReactPropType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

var stringOrNumberorBooleanReactPropType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]);

col.propTypes = {
  children: _propTypes2.default.any.isRequired,
  col: stringOrNumberorBooleanReactPropType,
  auto: _propTypes2.default.bool,

  sm: stringOrNumberorBooleanReactPropType,
  smOffset: stringOrNumberReactPropType,
  smAuto: _propTypes2.default.bool,

  md: stringOrNumberorBooleanReactPropType,
  mdOffset: stringOrNumberReactPropType,
  mdAuto: _propTypes2.default.bool,

  lg: stringOrNumberorBooleanReactPropType,
  lgOffset: stringOrNumberReactPropType,
  lgAuto: _propTypes2.default.bool,

  xl: stringOrNumberorBooleanReactPropType,
  xlOffset: stringOrNumberReactPropType,
  xlAuto: _propTypes2.default.bool
};

col.defaultProps = {
  children: null
};

exports.default = col;
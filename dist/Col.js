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

var col = function col(props) {
  var col = props.col,
      offset = props.offset,
      auto = props.auto,
      alignSelf = props.alignSelf,
      order = props.order,
      sm = props.sm,
      smOffset = props.smOffset,
      smAuto = props.smAuto,
      smAlignSelf = props.smAlignSelf,
      smOrder = props.smOrder,
      md = props.md,
      mdOffset = props.mdOffset,
      mdAuto = props.mdAuto,
      mdAlignSelf = props.mdAlignSelf,
      mdOrder = props.mdOrder,
      lg = props.lg,
      lgOffset = props.lgOffset,
      lgAuto = props.lgAuto,
      lgAlignSelf = props.lgAlignSelf,
      lgOrder = props.lgOrder,
      xl = props.xl,
      xlOffset = props.xlOffset,
      xlAuto = props.xlAuto,
      xlAlignSelf = props.xlAlignSelf,
      xlOrder = props.xlOrder,
      noGutter = props.noGutter,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ['col', 'offset', 'auto', 'alignSelf', 'order', 'sm', 'smOffset', 'smAuto', 'smAlignSelf', 'smOrder', 'md', 'mdOffset', 'mdAuto', 'mdAlignSelf', 'mdOrder', 'lg', 'lgOffset', 'lgAuto', 'lgAlignSelf', 'lgOrder', 'xl', 'xlOffset', 'xlAuto', 'xlAlignSelf', 'xlOrder', 'noGutter', 'children']);

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
  if (alignSelf) {
    dataName = dataName + ' align-self-' + alignSelf;
  }
  if (!isNaN(parseInt(order, 10)) || order === 'first' || order === 'last') {
    dataName = dataName + ' order-' + order;
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
  if (smAlignSelf) {
    dataName = dataName + ' align-self-sm-' + smAlignSelf;
  }
  if (!isNaN(parseInt(smOrder, 10)) || smOrder === 'first' || smOrder === 'last') {
    dataName = dataName + ' order-sm-' + smOrder;
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
  if (mdAlignSelf) {
    dataName = dataName + ' align-self-md-' + mdAlignSelf;
  }
  if (!isNaN(parseInt(mdOrder, 10)) || mdOrder === 'first' || mdOrder === 'last') {
    dataName = dataName + ' order-md-' + mdOrder;
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
  if (lgAlignSelf) {
    dataName = dataName + ' align-self-lg-' + lgAlignSelf;
  }
  if (!isNaN(parseInt(lgOrder, 10)) || lgOrder === 'first' || lgOrder === 'last') {
    dataName = dataName + ' order-lg-' + lgOrder;
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
  if (xlAlignSelf) {
    dataName = dataName + ' align-self-xl-' + xlAlignSelf;
  }
  if (!isNaN(parseInt(xlOrder, 10)) || xlOrder === 'first' || xlOrder === 'last') {
    dataName = dataName + ' order-xl-' + xlOrder;
  }

  if (noGutter) {
    dataName = dataName + ' no-gutter';
  }

  dataName = dataName.trim();
  return _react2.default.createElement(
    _styled.Col,
    _extends({
      col: col,
      offset: offset,
      auto: auto,
      alignSelf: alignSelf,
      order: order,

      sm: sm,
      smOffset: smOffset,
      smAuto: smAuto,
      smAlignSelf: smAlignSelf,
      smOrder: smOrder,

      md: md,
      mdOffset: mdOffset,
      mdAuto: mdAuto,
      mdAlignSelf: mdAlignSelf,
      mdOrder: mdOrder,

      lg: lg,
      lgOffset: lgOffset,
      lgAuto: lgAuto,
      lgAlignSelf: lgAlignSelf,
      lgOrder: lgOrder,

      xl: xl,
      xlOffset: xlOffset,
      xlAuto: xlAuto,
      xlAlignSelf: xlAlignSelf,
      xlOrder: xlOrder,

      noGutter: noGutter,
      'data-name': dataName
    }, otherProps),
    children
  );
};

var stringOrNumberReactPropType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

var stringOrNumberorBooleanReactPropType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]);

col.propTypes = {
  children: _propTypes2.default.any,
  noGutter: _propTypes2.default.bool,

  col: stringOrNumberorBooleanReactPropType,
  auto: _propTypes2.default.bool,
  alignSelf: _propTypes2.default.string,
  order: stringOrNumberReactPropType,

  sm: stringOrNumberorBooleanReactPropType,
  smOffset: stringOrNumberReactPropType,
  smAuto: _propTypes2.default.bool,
  smAlignSelf: _propTypes2.default.string,
  smOrder: stringOrNumberReactPropType,

  md: stringOrNumberorBooleanReactPropType,
  mdOffset: stringOrNumberReactPropType,
  mdAuto: _propTypes2.default.bool,
  mdAlignSelf: _propTypes2.default.string,
  mdOrder: stringOrNumberReactPropType,

  lg: stringOrNumberorBooleanReactPropType,
  lgOffset: stringOrNumberReactPropType,
  lgAuto: _propTypes2.default.bool,
  lgAlignSelf: _propTypes2.default.string,
  lgOrder: stringOrNumberReactPropType,

  xl: stringOrNumberorBooleanReactPropType,
  xlOffset: stringOrNumberReactPropType,
  xlAuto: _propTypes2.default.bool,
  xlAlignSelf: _propTypes2.default.string,
  xlOrder: stringOrNumberReactPropType
};

col.defaultProps = {
  children: null
};

exports.default = col;
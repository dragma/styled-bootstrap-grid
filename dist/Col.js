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

var MyCol = function MyCol(props) {
  var col = props.col,
      offset = props.offset,
      auto = props.auto,
      alignSelf = props.alignSelf,
      order = props.order,
      xs = props.xs,
      xsOffset = props.xsOffset,
      xsAuto = props.xsAuto,
      xsAlignSelf = props.xsAlignSelf,
      xsOrder = props.xsOrder,
      hiddenXsUp = props.hiddenXsUp,
      hiddenXsDown = props.hiddenXsDown,
      sm = props.sm,
      smOffset = props.smOffset,
      smAuto = props.smAuto,
      smAlignSelf = props.smAlignSelf,
      smOrder = props.smOrder,
      hiddenSmUp = props.hiddenSmUp,
      hiddenSmDown = props.hiddenSmDown,
      md = props.md,
      mdOffset = props.mdOffset,
      mdAuto = props.mdAuto,
      mdAlignSelf = props.mdAlignSelf,
      mdOrder = props.mdOrder,
      hiddenMdUp = props.hiddenMdUp,
      hiddenMdDown = props.hiddenMdDown,
      lg = props.lg,
      lgOffset = props.lgOffset,
      lgAuto = props.lgAuto,
      lgAlignSelf = props.lgAlignSelf,
      lgOrder = props.lgOrder,
      hiddenLgUp = props.hiddenLgUp,
      hiddenLgDown = props.hiddenLgDown,
      xl = props.xl,
      xlOffset = props.xlOffset,
      xlAuto = props.xlAuto,
      xlAlignSelf = props.xlAlignSelf,
      xlOrder = props.xlOrder,
      hiddenXlUp = props.hiddenXlUp,
      hiddenXlDown = props.hiddenXlDown,
      noGutter = props.noGutter,
      children = props.children,
      forwardedRef = props.forwardedRef,
      otherProps = _objectWithoutProperties(props, ['col', 'offset', 'auto', 'alignSelf', 'order', 'xs', 'xsOffset', 'xsAuto', 'xsAlignSelf', 'xsOrder', 'hiddenXsUp', 'hiddenXsDown', 'sm', 'smOffset', 'smAuto', 'smAlignSelf', 'smOrder', 'hiddenSmUp', 'hiddenSmDown', 'md', 'mdOffset', 'mdAuto', 'mdAlignSelf', 'mdOrder', 'hiddenMdUp', 'hiddenMdDown', 'lg', 'lgOffset', 'lgAuto', 'lgAlignSelf', 'lgOrder', 'hiddenLgUp', 'hiddenLgDown', 'xl', 'xlOffset', 'xlAuto', 'xlAlignSelf', 'xlOrder', 'hiddenXlUp', 'hiddenXlDown', 'noGutter', 'children', 'forwardedRef']);

  var dataName = '';
  if (col) {
    if (!Number.isNaN(parseInt(col, 10))) {
      dataName = dataName + ' col-' + col;
    } else {
      dataName = dataName + ' col';
    }
  }
  if (!Number.isNaN(parseInt(offset, 10))) {
    dataName = dataName + ' offset-' + offset;
  }
  if (auto) {
    dataName = dataName + ' col-auto';
  }
  if (alignSelf) {
    dataName = dataName + ' align-self-' + alignSelf;
  }
  if (!Number.isNaN(parseInt(order, 10)) || order === 'first' || order === 'last') {
    dataName = dataName + ' order-' + order;
  }

  // XS
  if (xs) {
    if (!Number.isNaN(parseInt(xs, 10))) {
      dataName = dataName + ' col-xs-' + xs;
    } else {
      dataName = dataName + ' col-xs';
    }
  }
  if (!Number.isNaN(parseInt(xsOffset, 10))) {
    dataName = dataName + ' offset-xs-' + xsOffset;
  }
  if (xsAuto) {
    dataName = dataName + ' col-xs-auto';
  }
  if (xsAlignSelf) {
    dataName = dataName + ' align-self-xs-' + xsAlignSelf;
  }
  if (!Number.isNaN(parseInt(xsOrder, 10)) || xsOrder === 'first' || xsOrder === 'last') {
    dataName = dataName + ' order-xs-' + xsOrder;
  }
  if (hiddenXsDown) {
    dataName = dataName + ' hidden-xs-down';
  }
  if (hiddenXsUp) {
    dataName = dataName + ' hidden-xs-up';
  }

  // SM
  if (sm) {
    if (!Number.isNaN(parseInt(sm, 10))) {
      dataName = dataName + ' col-sm-' + sm;
    } else {
      dataName = dataName + ' col-sm';
    }
  }
  if (!Number.isNaN(parseInt(smOffset, 10))) {
    dataName = dataName + ' offset-sm-' + smOffset;
  }
  if (smAuto) {
    dataName = dataName + ' col-sm-auto';
  }
  if (smAlignSelf) {
    dataName = dataName + ' align-self-sm-' + smAlignSelf;
  }
  if (!Number.isNaN(parseInt(smOrder, 10)) || smOrder === 'first' || smOrder === 'last') {
    dataName = dataName + ' order-sm-' + smOrder;
  }
  if (hiddenSmDown) {
    dataName = dataName + ' hidden-sm-down';
  }
  if (hiddenSmUp) {
    dataName = dataName + ' hidden-sm-up';
  }

  // MD
  if (md) {
    if (!Number.isNaN(parseInt(md, 10))) {
      dataName = dataName + ' col-md-' + md;
    } else {
      dataName = dataName + ' col-md';
    }
  }
  if (!Number.isNaN(parseInt(mdOffset, 10))) {
    dataName = dataName + ' offset-md-' + mdOffset;
  }
  if (mdAuto) {
    dataName = dataName + ' col-md-auto';
  }
  if (mdAlignSelf) {
    dataName = dataName + ' align-self-md-' + mdAlignSelf;
  }
  if (!Number.isNaN(parseInt(mdOrder, 10)) || mdOrder === 'first' || mdOrder === 'last') {
    dataName = dataName + ' order-md-' + mdOrder;
  }
  if (hiddenMdDown) {
    dataName = dataName + ' hidden-xs-down';
  }
  if (hiddenMdUp) {
    dataName = dataName + ' hidden-xs-up';
  }

  // LG
  if (lg) {
    if (!Number.isNaN(parseInt(lg, 10))) {
      dataName = dataName + ' col-lg-' + lg;
    } else {
      dataName = dataName + ' col-lg';
    }
  }
  if (!Number.isNaN(parseInt(lgOffset, 10))) {
    dataName = dataName + ' offset-lg-' + lgOffset;
  }
  if (lgAuto) {
    dataName = dataName + ' col-lg-auto';
  }
  if (lgAlignSelf) {
    dataName = dataName + ' align-self-lg-' + lgAlignSelf;
  }
  if (!Number.isNaN(parseInt(lgOrder, 10)) || lgOrder === 'first' || lgOrder === 'last') {
    dataName = dataName + ' order-lg-' + lgOrder;
  }
  if (hiddenLgDown) {
    dataName = dataName + ' hidden-xs-down';
  }
  if (hiddenLgUp) {
    dataName = dataName + ' hidden-xs-up';
  }

  // XL
  if (xl) {
    if (!Number.isNaN(parseInt(xl, 10))) {
      dataName = dataName + ' col-xl-' + xl;
    } else {
      dataName = dataName + ' col-xl';
    }
  }
  if (!Number.isNaN(parseInt(xlOffset, 10))) {
    dataName = dataName + ' offset-xl-' + xlOffset;
  }
  if (xlAuto) {
    dataName = dataName + ' col-xl-auto';
  }
  if (xlAlignSelf) {
    dataName = dataName + ' align-self-xl-' + xlAlignSelf;
  }
  if (!Number.isNaN(parseInt(xlOrder, 10)) || xlOrder === 'first' || xlOrder === 'last') {
    dataName = dataName + ' order-xl-' + xlOrder;
  }
  if (hiddenXlDown) {
    dataName = dataName + ' hidden-xs-down';
  }
  if (hiddenXlUp) {
    dataName = dataName + ' hidden-xs-up';
  }

  if (noGutter) {
    dataName = dataName + ' no-gutter';
  }

  dataName = dataName.trim();

  var allProps = _extends({
    col: col,
    offset: offset,
    auto: auto,
    alignSelf: alignSelf,
    order: order,

    xs: xs,
    xsOffset: xsOffset,
    xsAuto: xsAuto,
    xsAlignSelf: xsAlignSelf,
    xsOrder: xsOrder,
    hiddenXsDown: hiddenXsDown,
    hiddenXsUp: hiddenXsUp,

    sm: sm,
    smOffset: smOffset,
    smAuto: smAuto,
    smAlignSelf: smAlignSelf,
    smOrder: smOrder,
    hiddenSmDown: hiddenSmDown,
    hiddenSmUp: hiddenSmUp,

    md: md,
    mdOffset: mdOffset,
    mdAuto: mdAuto,
    mdAlignSelf: mdAlignSelf,
    mdOrder: mdOrder,
    hiddenMdDown: hiddenMdDown,
    hiddenMdUp: hiddenMdUp,

    lg: lg,
    lgOffset: lgOffset,
    lgAuto: lgAuto,
    lgAlignSelf: lgAlignSelf,
    lgOrder: lgOrder,
    hiddenLgDown: hiddenLgDown,
    hiddenLgUp: hiddenLgUp,

    xl: xl,
    xlOffset: xlOffset,
    xlAuto: xlAuto,
    xlAlignSelf: xlAlignSelf,
    xlOrder: xlOrder,
    hiddenXlDown: hiddenXlDown,
    hiddenXlUp: hiddenXlUp,

    noGutter: noGutter,
    'data-name': dataName
  }, otherProps);

  return _react2.default.createElement(
    _styled.Col,
    _extends({ ref: forwardedRef }, allProps),
    children
  );
};

var stringOrNumberReactPropType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

var stringOrNumberorBooleanReactPropType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]);

MyCol.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]).isRequired,
  noGutter: _propTypes2.default.bool,

  col: stringOrNumberorBooleanReactPropType,
  auto: _propTypes2.default.bool,
  alignSelf: _propTypes2.default.string,
  order: stringOrNumberReactPropType,

  xs: stringOrNumberorBooleanReactPropType,
  xsOffset: stringOrNumberReactPropType,
  xsAuto: _propTypes2.default.bool,
  xsAlignSelf: _propTypes2.default.string,
  xsOrder: stringOrNumberReactPropType,

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

MyCol.defaultProps = {
  noGutter: null,
  col: null,
  auto: null,
  alignSelf: null,
  order: null,
  xs: null,
  xsOffset: null,
  xsAuto: null,
  xsAlignSelf: null,
  xsOrder: null,
  sm: null,
  smOffset: null,
  smAuto: null,
  smAlignSelf: null,
  smOrder: null,
  md: null,
  mdOffset: null,
  mdAuto: null,
  mdAlignSelf: null,
  mdOrder: null,
  lg: null,
  lgOffset: null,
  lgAuto: null,
  lgAlignSelf: null,
  lgOrder: null,
  xl: null,
  xlOffset: null,
  xlAuto: null,
  xlAlignSelf: null,
  xlOrder: null
};

exports.default = _react2.default.forwardRef(function (props, ref) {
  return _react2.default.createElement(MyCol, _extends({ forwardedRef: ref }, props));
});
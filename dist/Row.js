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

var row = function row(props) {
  var children = props.children,
      alignItems = props.alignItems,
      smAlignItems = props.smAlignItems,
      mdAlignItems = props.mdAlignItems,
      lgAlignItems = props.lgAlignItems,
      xlAlignItems = props.xlAlignItems,
      justifyContent = props.justifyContent,
      smJustifyContent = props.smJustifyContent,
      mdJustifyContent = props.mdJustifyContent,
      lgJustifyContent = props.lgJustifyContent,
      xlJustifyContent = props.xlJustifyContent,
      otherProps = _objectWithoutProperties(props, ['children', 'alignItems', 'smAlignItems', 'mdAlignItems', 'lgAlignItems', 'xlAlignItems', 'justifyContent', 'smJustifyContent', 'mdJustifyContent', 'lgJustifyContent', 'xlJustifyContent']);

  var dataName = 'row';

  if (alignItems) {
    dataName = dataName + ' align-items-' + alignItems;
  }
  if (smAlignItems) {
    dataName = dataName + ' align-items-sm-' + smAlignItems;
  }
  if (mdAlignItems) {
    dataName = dataName + ' align-items-md-' + mdAlignItems;
  }
  if (lgAlignItems) {
    dataName = dataName + ' align-items-lg-' + lgAlignItems;
  }
  if (xlAlignItems) {
    dataName = dataName + ' align-items-xl-' + xlAlignItems;
  }
  if (justifyContent) {
    dataName = dataName + ' justify-content-' + justifyContent;
  }
  if (smJustifyContent) {
    dataName = dataName + ' justify-content-sm-' + smJustifyContent;
  }
  if (mdJustifyContent) {
    dataName = dataName + ' justify-content-md-' + mdJustifyContent;
  }
  if (lgJustifyContent) {
    dataName = dataName + ' justify-content-lg-' + lgJustifyContent;
  }
  if (xlJustifyContent) {
    dataName = dataName + ' justify-content-xl-' + xlJustifyContent;
  }

  dataName = dataName.trim();
  return _react2.default.createElement(
    _styled.Row,
    _extends({
      alignItems: alignItems,
      smAlignItems: smAlignItems,
      mdAlignItems: mdAlignItems,
      lgAlignItems: lgAlignItems,
      xlAlignItems: xlAlignItems,
      justifyContent: justifyContent,
      smJustifyContent: smJustifyContent,
      mdJustifyContent: mdJustifyContent,
      lgJustifyContent: lgJustifyContent,
      xlJustifyContent: xlJustifyContent,
      'data-name': dataName
    }, otherProps),
    children
  );
};

row.propTypes = {
  children: _propTypes2.default.any,
  alignItems: _propTypes2.default.string,
  smAlignItems: _propTypes2.default.string,
  mdAlignItems: _propTypes2.default.string,
  lgAlignItems: _propTypes2.default.string,
  xlAlignItems: _propTypes2.default.string,
  justifyContent: _propTypes2.default.string,
  smJustifyContent: _propTypes2.default.string,
  mdJustifyContent: _propTypes2.default.string,
  lgJustifyContent: _propTypes2.default.string,
  xlJustifyContent: _propTypes2.default.string
};

row.defaultProps = {
  children: null
};

exports.default = row;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ', 'px;\n  padding-left: ', 'px;\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var css = {
  col: {
    true: '\n      -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n      -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n      max-width: 100%;\n    ',
    auto: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n      width: auto;\n      max-width: none;\n    ',
    1: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.333333%;\n      flex: 0 0 8.333333%;\n      max-width: 8.333333%;\n    ',
    2: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.666667%;\n      flex: 0 0 16.666667%;\n      max-width: 16.666667%;\n    ',
    3: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n      flex: 0 0 25%;\n      max-width: 25%;\n        ',
    4: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.333333%;\n      flex: 0 0 33.333333%;\n      max-width: 33.333333%;\n        ',
    5: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.666667%;\n      flex: 0 0 41.666667%;\n      max-width: 41.666667%;\n        ',
    6: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n      flex: 0 0 50%;\n      max-width: 50%;\n    ',
    7: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.333333%;\n      flex: 0 0 58.333333%;\n      max-width: 58.333333%;\n    ',
    8: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.666667%;\n      flex: 0 0 66.666667%;\n      max-width: 66.666667%;\n    ',
    9: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n      flex: 0 0 75%;\n      max-width: 75%;\n    ',
    10: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.333333%;\n      flex: 0 0 83.333333%;\n      max-width: 83.333333%;\n    ',
    11: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.666667%;\n      flex: 0 0 91.666667%;\n      max-width: 91.666667%;\n    ',
    12: '\n      -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n      max-width: 100%;\n    '
  },
  offset: {
    0: 'margin-left: 0;',
    1: 'margin-left: 8.333333%;',
    2: 'margin-left: 16.666667%;',
    3: 'margin-left: 25%;',
    4: 'margin-left: 33.333333%;',
    5: 'margin-left: 41.666667%;',
    6: 'margin-left: 50%;',
    7: 'margin-left: 58.333333%;',
    8: 'margin-left: 66.666667%;',
    9: 'margin-left: 75%;',
    10: 'margin-left: 83.333333%;',
    11: 'margin-left: 91.666667%;'
  },
  order: {
    first: '\n      -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n      order: -1;\n    ',
    last: '\n      -webkit-box-ordinal-group: 14;\n      -ms-flex-order: 13;\n      order: 13;\n    ',
    0: '\n      -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n      order: 0;\n    ',
    1: '\n      -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n      order: 1;\n    ',
    2: '\n      -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n      order: 2;\n    ',
    3: '\n      -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n      order: 3;\n    ',
    4: '\n      -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n      order: 4;\n    ',
    5: '\n      -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n      order: 5;\n    ',
    6: '\n      -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n      order: 6;\n    ',
    7: '\n      -webkit-box-ordinal-group: 8;\n      -ms-flex-order: 7;\n      order: 7;\n    ',
    8: '\n      -webkit-box-ordinal-group: 9;\n      -ms-flex-order: 8;\n      order: 8;\n    ',
    9: '\n      -webkit-box-ordinal-group: 10;\n      -ms-flex-order: 9;\n      order: 9;\n    ',
    10: '\n      -webkit-box-ordinal-group: 11;\n      -ms-flex-order: 10;\n      order: 10;\n    ',
    11: '\n      -webkit-box-ordinal-group: 12;\n      -ms-flex-order: 11;\n      order: 11;\n    ',
    12: '\n      -webkit-box-ordinal-group: 13;\n      -ms-flex-order: 12;\n      order: 12;\n    '
  },
  alignSelf: {
    auto: '\n      -ms-flex-item-align: auto !important;\n      align-self: auto !important;\n    ',
    start: '\n      -ms-flex-item-align: start !important;\n      align-self: flex-start !important;\n    ',
    end: '\n      -ms-flex-item-align: end !important;\n      align-self: flex-end !important;\n    ',
    center: '\n      -ms-flex-item-align: center !important;\n      align-self: center !important;\n    ',
    baseline: '\n      -ms-flex-item-align: baseline !important;\n      align-self: baseline !important;\n    ',
    stretch: '\n      -ms-flex-item-align: stretch !important;\n      align-self: stretch !important;\n    '
  },
  noGutter: '\n    margin-right: 0;\n    margin-left: 0;\n  '
};

var Col = _styledComponents2.default.div(_templateObject, function (p) {
  if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getColPadding) {
    return 15;
  }
  return p.theme.styledBootstrapGrid.getColPadding();
}, function (p) {
  if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getColPadding) {
    return 15;
  }
  return p.theme.styledBootstrapGrid.getColPadding();
}, function (p) {
  console.log(p);
  return p.noGutter && css.noGutter;
}, function (p) {
  return p.col && css.col[p.col];
}, function (p) {
  return p.offset && css.offset[p.offset];
}, function (p) {
  return p.auto && css.col.auto;
}, function (p) {
  return p.alignSelf && css.alignSelf[p.alignSelf];
}, function (p) {
  return p.order && css.order[p.order];
}, function (p) {
  return p.sm && _media2.default.sm(_templateObject2, css.col[p.sm]);
}, function (p) {
  return !isNaN(parseInt(p.smOffset, 10)) && _media2.default.sm(_templateObject2, css.offset[p.smOffset]);
}, function (p) {
  return p.smAuto && _media2.default.sm(_templateObject2, css.col.auto);
}, function (p) {
  return p.smAlignSelf && _media2.default.sm(_templateObject2, css.alignSelf[p.smAlignSelf]);
}, function (p) {
  return p.smOrder && _media2.default.sm(_templateObject2, css.order[p.smOrder]);
}, function (p) {
  return p.md && _media2.default.md(_templateObject2, css.col[p.md]);
}, function (p) {
  return !isNaN(parseInt(p.mdOffset, 10)) && _media2.default.md(_templateObject2, css.offset[p.mdOffset]);
}, function (p) {
  return p.mdAuto && _media2.default.md(_templateObject2, css.col.auto);
}, function (p) {
  return p.mdAlignSelf && _media2.default.md(_templateObject2, css.alignSelf[p.mdAlignSelf]);
}, function (p) {
  return p.mdOrder && _media2.default.md(_templateObject2, css.order[p.mdOrder]);
}, function (p) {
  return p.lg && _media2.default.lg(_templateObject2, css.col[p.lg]);
}, function (p) {
  return !isNaN(parseInt(p.lgOffset, 10)) && _media2.default.lg(_templateObject2, css.offset[p.lgOffset]);
}, function (p) {
  return p.lgAuto && _media2.default.lg(_templateObject2, css.col.auto);
}, function (p) {
  return p.lgAlignSelf && _media2.default.lg(_templateObject2, css.alignSelf[p.lgAlignSelf]);
}, function (p) {
  return p.lgOrder && _media2.default.lg(_templateObject2, css.order[p.lgOrder]);
}, function (p) {
  return p.xl && _media2.default.xl(_templateObject2, css.col[p.xl]);
}, function (p) {
  return !isNaN(parseInt(p.xlOffset, 10)) && _media2.default.xl(_templateObject2, css.offset[p.xlOffset]);
}, function (p) {
  return p.xlAuto && _media2.default.xl(_templateObject2, css.col.auto);
}, function (p) {
  return p.xlAlignSelf && _media2.default.xl(_templateObject2, css.alignSelf[p.xlAlignSelf]);
}, function (p) {
  return p.xlOrder && _media2.default.xl(_templateObject2, css.order[p.xlOrder]);
});

exports.default = Col;
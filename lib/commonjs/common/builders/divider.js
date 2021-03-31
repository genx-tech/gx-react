"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = divider;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function divider(item, value, inline, key, styles) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      paddingTop: 12,
      paddingBottom: 12
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      height: 0.5,
      width: '100%'
    }
  }));
}
//# sourceMappingURL=divider.js.map
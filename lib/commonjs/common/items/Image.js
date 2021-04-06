"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JVImage;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JVImage({
  meta,
  key
}) {
  const {
    url
  } = meta;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      padding: 16,
      width: '100%'
    },
    key: key
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: {
      uri: url
    },
    style: {
      width: '100%'
    }
  }));
}
//# sourceMappingURL=Image.js.map
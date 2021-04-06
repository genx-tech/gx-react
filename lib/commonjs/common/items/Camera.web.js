"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JVCamera;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _galioFramework = require("galio-framework");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JVCamera({
  meta,
  inline,
  key,
  styles,
  store
}) {
  const {
    name
  } = meta;
  const uri = store.getValue(name);
  return /*#__PURE__*/_react.default.createElement(_galioFramework.Block, null, /*#__PURE__*/_react.default.createElement(_galioFramework.Block, {
    key: key,
    style: {
      padding: 8
    }
  }, store.readOnly ? uri ? /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: {
      uri: store.getValue(name)
    },
    style: {
      width: '100%'
    }
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, '尚未上传照片。') : /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.errorText
  }, '请在手机App上拍照。')));
}
//# sourceMappingURL=Camera.web.js.map
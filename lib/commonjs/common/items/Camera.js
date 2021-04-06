"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JVCamera;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _galioFramework = require("galio-framework");

var _reactNativeElements = require("react-native-elements");

var _reactNativeCamera = require("react-native-camera");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function JVCamera({
  meta,
  value,
  inline,
  key,
  styles
}) {
  const refCamera = (0, _react.useRef)(null);

  const takePicture = async () => {
    if (refCamera.current) {
      const options = {
        quality: 0.5,
        base64: true
      };
      const data = await refCamera.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_galioFramework.Block, null, /*#__PURE__*/_react.default.createElement(_reactNativeCamera.RNCamera, {
    ref: refCamera,
    type: _reactNativeCamera.RNCamera.Constants.Type.back,
    flashMode: _reactNativeCamera.RNCamera.Constants.FlashMode.on,
    androidCameraPermissionOptions: {
      title: 'Permission to use camera',
      message: 'We need your permission to use your camera',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel'
    }
  }, ({
    camera,
    status,
    recordAudioPermissionStatus
  }) => {
    if (status !== 'READY') return /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, null);
    return /*#__PURE__*/_react.default.createElement(_galioFramework.Block, {
      key: key,
      style: {
        padding: 8
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNativeElements.Button, {
      title: '拍照',
      onPress: () => takePicture()
    }));
  }));
}
//# sourceMappingURL=Camera.js.map
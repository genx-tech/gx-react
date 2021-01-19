"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _reactNative = require("react-native");

var _reactNativeFontGlobal = _interopRequireDefault(require("react-native-font-global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(globalFontFamily, allowScaling) {
  if (_reactNative.Platform.OS === 'android') {
    const oldRender = _reactNative.Text.render;

    _reactNative.Text.render = function (...args) {
      const origin = oldRender.call(this, ...args);
      return React.cloneElement(origin, {
        style: [{
          fontFamily: globalFontFamily
        }, origin.props.style]
      });
    };
  }

  (0, _reactNativeFontGlobal.default)(globalFontFamily);

  if (allowScaling != null) {
    _reactNative.Text.defaultProps = _reactNative.Text.defaultProps || {};
    _reactNative.Text.defaultProps.allowFontScaling = allowScaling;
  }
}
//# sourceMappingURL=defaultFont.js.map
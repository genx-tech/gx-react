"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _react = _interopRequireDefault(require("react"));

var _reactNativeFlashMessage = _interopRequireDefault(require("react-native-flash-message"));

var _Runtime = require("../../Runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize({
  position = 'top'
} = {}) {
  (0, _Runtime.applyScreenComposer)(elScreen => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, elScreen, /*#__PURE__*/_react.default.createElement(_reactNativeFlashMessage.default, {
    position: position
  })));
}
//# sourceMappingURL=flashMessage.js.map
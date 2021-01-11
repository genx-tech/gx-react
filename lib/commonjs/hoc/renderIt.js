"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderIt;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderIt(anything) {
  if (anything) {
    if ( /*#__PURE__*/_react.default.isValidElement(anything)) {
      return anything;
    }

    const AnyComponent = anything;
    return /*#__PURE__*/_react.default.createElement(AnyComponent, null);
  }

  return false;
}
//# sourceMappingURL=renderIt.js.map
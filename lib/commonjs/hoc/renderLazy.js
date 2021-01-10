"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderLazy;

var _react = _interopRequireDefault(require("react"));

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderLazy(componentUrl, props) {
  let Component = componentUrl;

  if (typeof componentUrl === 'string') {
    Component = /*#__PURE__*/_react.default.lazy(() => _Runtime.default.import_(componentUrl));
  }

  return /*#__PURE__*/_react.default.createElement(Component, props);
}
//# sourceMappingURL=renderLazy.js.map
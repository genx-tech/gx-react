"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (styles, styleMode) => Component => {
  styleMode != null || (styleMode = _Runtime.default.defaultStyleMode);
  const withStyles = _Runtime.default[`${styleMode}Styles`];

  if (typeof withStyles === 'function') {
    return withStyles(Component, styles);
  }

  return Component;
};

exports.default = _default;
//# sourceMappingURL=withStyles.js.map
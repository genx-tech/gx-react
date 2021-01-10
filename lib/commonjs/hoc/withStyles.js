"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Runtime = _interopRequireDefault(require("../Runtime"));

var _inject = _interopRequireDefault(require("./inject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (styles, styleMode) => Component => {
  styleMode != null || (styleMode = _Runtime.default.defaultStyleMode);

  const withStyles = _Runtime.default["".concat(styleMode, "Styles")];

  const extraProps = {};

  if (typeof withStyles === 'function') {
    const [wrappedComponent, useStyles] = withStyles(Component, styles);
    Component = wrappedComponent;
    extraProps.useStyles = useStyles;
  }

  return (0, _inject.default)(extraProps)(Component);
};

exports.default = _default;
//# sourceMappingURL=withStyles.js.map
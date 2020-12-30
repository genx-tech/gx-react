"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _runtimeConfig = _interopRequireDefault(require("../runtimeConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (styleMode, styles) => Component => {
  styleMode != null || (styleMode = _runtimeConfig.default.defaultStyleMode);

  const withStyles = _runtimeConfig.default["".concat(styleMode, "Styles")];

  const extraProps = {};

  if (typeof withStyles === 'function') {
    const [wrappedComponent, useStyles] = withStyles(Component, styles);
    Component = wrappedComponent;
    extraProps.useStyles = useStyles;
  }

  return (...props) => /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, extraProps));
};

exports.default = _default;
//# sourceMappingURL=withUseStyles.js.map
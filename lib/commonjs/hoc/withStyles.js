"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (styles, styleMode) => Component => {
  styleMode != null || (styleMode = _Runtime.default.defaultStyleMode);

  const withStyles = _Runtime.default["".concat(styleMode, "Styles")];

  if (typeof withStyles === 'function') {
    const [wrappedComponent, useStyles] = withStyles(Component, styles);
    Component = wrappedComponent;
    return props => {
      const classes = useStyles(props);
      return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
        classes: classes
      }));
    };
  }

  return Component;
};

exports.default = _default;
//# sourceMappingURL=withStyles.js.map
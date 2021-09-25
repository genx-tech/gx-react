"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _Runtime = require("../Runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

(0, _Runtime.updateRuntime)({
  muiStyles: (Component, styles) => {
    const useStyles = (0, _styles.makeStyles)(styles);
    return props => {
      const classes = useStyles(props);
      return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
        styles: classes
      }));
    };
  }
});

function initialize(theme) {
  return App => ({
    props
  }) => /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(App, props));
}
//# sourceMappingURL=muiStyles.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Runtime = require("../Runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _Runtime.updateRuntime)({
  muiStyles: (Component, styles) => [Component, (0, _styles.makeStyles)(styles)]
});

function initialize(theme) {
  const muiTheme = (0, _styles.createMuiTheme)(theme);
  return App => ({
    props
  }) => /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: muiTheme
  }, /*#__PURE__*/_react.default.createElement(App, props));
}
//# sourceMappingURL=muiStyles.js.map
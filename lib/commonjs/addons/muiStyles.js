"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _styles = require("@material-ui/core/styles");

var _Runtime = require("../Runtime");

(0, _Runtime.updateRuntime)({
  muiStyles: (Component, styles) => [Component, (0, _styles.makeStyles)(styles)]
});

function initialize(theme) {
  const muiTheme = (0, _styles.createMuiTheme)(theme);
  return App => ({
    props
  }) => /*#__PURE__*/React.createElement(_styles.ThemeProvider, {
    theme: muiTheme
  }, /*#__PURE__*/React.createElement(App, props));
}
//# sourceMappingURL=muiStyles.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _react = _interopRequireDefault(require("react"));

var _galioFramework = require("galio-framework");

var _Runtime = require("../Runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _Runtime.updateRuntime)({
  galioStyles: (Component, styles) => [(0, _galioFramework.withGalio)(Component, styles), model => model.props.styles]
});

function initialize(theme) {
  return App => ({
    props
  }) => /*#__PURE__*/_react.default.createElement(_galioFramework.GalioProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(App, props));
}

;
//# sourceMappingURL=galioStyles.js.map
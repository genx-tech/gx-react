"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _galioFramework = require("galio-framework");

var _Runtime = require("../Runtime");

(0, _Runtime.updateRuntime)({
  galioStyles: (Component, styles) => [(0, _galioFramework.withGalio)(Component, styles), model => model.props.styles]
});

function initialize() {}
//# sourceMappingURL=galioStyles.js.map
"use strict";

var _galioFramework = require("galio-framework");

var _runtimeConfig = require("../runtimeConfig");

(0, _runtimeConfig.updateRuntime)({
  galioStyles: (Component, styles) => [(0, _galioFramework.withGalio)(Component, styles), model => model.props.styles]
});
//# sourceMappingURL=galioStyles.js.map
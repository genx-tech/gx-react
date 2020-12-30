"use strict";

var _styles = require("@material-ui/styles");

var _runtimeConfig = require("../runtimeConfig");

(0, _runtimeConfig.updateRuntime)({
  muiStyles: (Component, styles) => [Component, (0, _styles.makeStyles)(styles)]
});
//# sourceMappingURL=muiStyles.js.map
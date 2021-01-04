"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.updateRuntime = void 0;
let config = {
  defaultStyleMode: 'mui',
  onError: error => console.error(error)
};

const updateRuntime = override => Object.assign(config, override);

exports.updateRuntime = updateRuntime;
var _default = config;
exports.default = _default;
//# sourceMappingURL=runtimeConfig.js.map
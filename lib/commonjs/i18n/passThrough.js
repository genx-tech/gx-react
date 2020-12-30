"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _runtimeConfig = _interopRequireDefault(require("../runtimeConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = t => {
  var _Runtime$reportMissin;

  (_Runtime$reportMissin = _runtimeConfig.default.reportMissingTranslation) === null || _Runtime$reportMissin === void 0 ? void 0 : _Runtime$reportMissin.call(_runtimeConfig.default, t);
  return t;
};

exports.default = _default;
//# sourceMappingURL=passThrough.js.map
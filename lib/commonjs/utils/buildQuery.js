"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const buildQuery = data => data.entries().map(([k, v]) => encodeURIComponent(k) + '=' + (v == null ? '' : encodeURIComponent(v))).join('&');

var _default = buildQuery;
exports.default = _default;
//# sourceMappingURL=buildQuery.js.map
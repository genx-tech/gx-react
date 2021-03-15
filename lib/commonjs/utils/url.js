"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = join;
exports.queryStringToObject = queryStringToObject;
exports.default = void 0;

var _string = require("./string");

function join(base, extraPath) {
  return base ? extraPath ? (0, _string.dropIfEndsWith)(base, '/') + (0, _string.ensureStartsWith)(extraPath, '/') : base : extraPath;
}

function queryStringToObject(qs) {
  if (!qs) {
    return {};
  }

  const query = qs[0] === '?' ? qs.substr(1) : qs;
  const parts = query.split('&');
  return parts.reduce((r, pair) => {
    const [k, v] = pair.split('=');
    r[decodeURIComponent(k)] = v !== null && v !== void 0 ? v : decodeURIComponent(v);
    return r;
  }, {});
}

var _default = {
  join,
  queryStringToObject
};
exports.default = _default;
//# sourceMappingURL=url.js.map
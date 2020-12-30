"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = join;

var _string = require("./string");

function join(base, extraPath) {
  return base ? extraPath ? (0, _string.dropIfEndsWith)(base, '/') + (0, _string.ensureStartsWith)(extraPath, '/') : base : extraPath;
}
//# sourceMappingURL=url.js.map
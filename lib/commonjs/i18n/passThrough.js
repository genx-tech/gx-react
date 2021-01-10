"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = t => {
  _Runtime.default.log('warning', () => "i18n pass-through applied for id: ".concat(t));

  return t;
};

exports.default = _default;
//# sourceMappingURL=passThrough.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Text = _interopRequireDefault(require("./items/Text"));

var _Divider = _interopRequireDefault(require("./items/Divider"));

var _DefaultRow = _interopRequireDefault(require("./items/DefaultRow"));

var _DefaultInline = _interopRequireDefault(require("./items/DefaultInline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  text: _Text.default,
  divider: _Divider.default,
  $row: _DefaultRow.default,
  $nline: _DefaultInline.default
};
exports.default = _default;
//# sourceMappingURL=viewItems.js.map
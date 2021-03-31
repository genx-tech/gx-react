"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultRow;

var _react = _interopRequireDefault(require("react"));

var _galioFramework = require("galio-framework");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultRow(content, key) {
  return /*#__PURE__*/_react.default.createElement(_galioFramework.Block, {
    style: {
      width: '95%',
      paddingLeft: 12,
      paddingBottom: 8
    },
    key
  }, content);
}
//# sourceMappingURL=defaultRow.js.map
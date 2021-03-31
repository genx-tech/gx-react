"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultInline;

var _react = _interopRequireDefault(require("react"));

var _galioFramework = require("galio-framework");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultInline(content, key) {
  return /*#__PURE__*/_react.default.createElement(_galioFramework.Block, {
    row: true,
    style: {
      width: '95%',
      flexWrap: 'wrap',
      paddingLeft: 12
    },
    key
  }, content);
}
//# sourceMappingURL=defaultInline.js.map
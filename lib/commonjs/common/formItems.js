"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _viewItems = _interopRequireDefault(require("./viewItems"));

var _InputNumber = _interopRequireDefault(require("./items/InputNumber"));

var _Radio = _interopRequireDefault(require("./items/Radio"));

var _Camera = _interopRequireDefault(require("./items/Camera"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = { ..._viewItems.default,
  numberInput: _InputNumber.default,
  radio: _Radio.default,
  camera: _Camera.default
};
exports.default = _default;
//# sourceMappingURL=formItems.js.map
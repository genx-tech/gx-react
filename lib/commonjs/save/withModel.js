"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _makeModel = _interopRequireDefault(require("./makeModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = model => component => {
  const modelObject = {};

  if (model.reactive) {
    component = (0, _mobxReact.observer)(component);
  }

  if (model.external) {
    component = (0, _mobxReact.inject)(...model.external)(component);
  }

  return (...props) => /*#__PURE__*/_react.default.createElement("component", _extends({}, props, {
    useModel: (0, _makeModel.default)(modelObject, props)
  }));
};

exports.default = _default;
//# sourceMappingURL=withModel.js.map
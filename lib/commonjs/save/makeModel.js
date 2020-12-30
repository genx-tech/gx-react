"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (model, props) => context => {
  const state = {};
  model.state && model.state.entries.forEach(([name, initValue]) => {
    const [stateValue, setState] = _react.default.useState(initValue);

    Object.defineProperty(state, name, {
      get: () => stateValue,
      set: newValue => setState(newValue),
      enumerable: true
    });
  });
  const modelInstance = {
    getValue: (name, defaultValue) => (0, _get.default)(modelInstance, name, defaultValue),
    props,
    state,
    context
  };
  return modelInstance;
};

exports.default = _default;
//# sourceMappingURL=makeModel.js.map
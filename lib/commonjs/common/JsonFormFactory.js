"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _JsonViewFactory = _interopRequireDefault(require("./JsonViewFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FormFactory extends _JsonViewFactory.default {
  build(meta, store, inline, key) {
    const Component = this.getComponent(meta.type);
    return Component && /*#__PURE__*/_react.default.createElement(Component, {
      meta,
      store,
      value: store.values,
      inline,
      key,
      styles: this.styles
    });
  }

}

var _default = FormFactory;
exports.default = _default;
//# sourceMappingURL=JsonFormFactory.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ViewFactory {
  constructor(components, styles) {
    this.components = components;
    this.styles = styles;
  }

  getComponent(type) {
    const Component = this.components[type];

    if (!Component) {
      _Runtime.default.log('warning', () => `Unsupported component type: ${type}`);

      return false;
    }

    return Component;
  }

  build(meta, value, inline, key) {
    const Component = this.getComponent(meta.type);
    return Component && /*#__PURE__*/_react.default.createElement(Component, {
      meta,
      value,
      inline,
      key,
      styles: this.styles
    });
  }

  wrap(wrapperType, content, key) {
    const Wrapper = this.getComponent(wrapperType);
    return Wrapper && /*#__PURE__*/_react.default.createElement(Wrapper, {
      content,
      key
    });
  }

}

var _default = ViewFactory;
exports.default = _default;
//# sourceMappingURL=JsonViewFactory.js.map
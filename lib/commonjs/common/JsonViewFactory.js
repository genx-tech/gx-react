"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ViewFactory {
  constructor(builders, styles) {
    this.builders = builders;
    this.styles = styles;
  }

  build(item, value, inline, key) {
    const builder = this.builders[item.type];
    console.log(item, value, inline, key);

    if (!builder) {
      _Runtime.default.log('error', () => `Unknown view item type: ${item.type}`);

      return false;
    }

    return builder(item, value, inline, key, this.styles);
  }

  wrapInlineRow(content, key) {
    const wrapper = this.builders['$inline'];
    return wrapper(content, key);
  }

  wrapRow(content, key) {
    const wrapper = this.builders['$row'];
    return wrapper(content, key);
  }

}

var _default = ViewFactory;
exports.default = _default;
//# sourceMappingURL=JsonViewFactory.js.map
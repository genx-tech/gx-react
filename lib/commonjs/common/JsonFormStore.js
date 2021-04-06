"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FormStore {
  constructor(initValues, readOnly) {
    this.values = initValues || {};
    this.readOnly = readOnly;
  }

  getValue(name) {
    return (0, _get2.default)(this.values, name);
  }

  setValue(name, value) {
    if (this.readOnly) {
      _Runtime.default.log('warning', () => `Trying to set the field "${name}" of a read-only form.`);
    } else {
      (0, _set2.default)(this.values, name, value);
    }
  }

}

var _default = FormStore;
exports.default = _default;
//# sourceMappingURL=JsonFormStore.js.map
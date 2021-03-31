"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = pathBuilder => async (locale, moduleName) => {
  const path = pathBuilder(locale, moduleName);

  _Runtime.default.log('verbose', () => `"importLoader" loader is loading locale data from "${path}"`);

  const localeModule = await _Runtime.default.import_(path);
  const {
    default: localeConfig
  } = localeModule;
  return localeConfig;
};

exports.default = _default;
//# sourceMappingURL=importLoader.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _superagent = _interopRequireDefault(require("superagent"));

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = urlBuilder => async (locale, moduleName) => {
  const url = urlBuilder(locale, moduleName);

  _Runtime.default.log('verbose', () => "\"httpLoader\" loader is loading locale data from \"".concat(url, "\""));

  const res = await _superagent.default.get(url);
  return res.body;
};

exports.default = _default;
//# sourceMappingURL=httpLoader.js.map
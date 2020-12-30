"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _superagent = _interopRequireDefault(require("superagent"));

var _runtimeConfig = _interopRequireDefault(require("../runtimeConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = urlBuilder => async (locale, moduleName) => {
  var _Runtime$reportLoadin;

  const url = urlBuilder(locale, moduleName);
  (_Runtime$reportLoadin = _runtimeConfig.default.reportLoadingLocale) === null || _Runtime$reportLoadin === void 0 ? void 0 : _Runtime$reportLoadin.call(_runtimeConfig.default, 'httpLoader', url);
  const res = await _superagent.default.get(url);
  return res.body;
};

exports.default = _default;
//# sourceMappingURL=httpLoader.js.map
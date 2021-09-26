"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useI18n", {
  enumerable: true,
  get: function () {
    return _useI18n.default;
  }
});
Object.defineProperty(exports, "registerLocale", {
  enumerable: true,
  get: function () {
    return _useI18n.registerLocale;
  }
});
exports.I18nProvider = exports.passThrough = exports.importLoader = exports.httpLoader = void 0;

var _httpLoader = _interopRequireWildcard(require("./httpLoader"));

exports.httpLoader = _httpLoader;

var _importLoader = _interopRequireWildcard(require("./importLoader"));

exports.importLoader = _importLoader;

var _passThrough = _interopRequireWildcard(require("./passThrough"));

exports.passThrough = _passThrough;

var _I18nProvider = _interopRequireWildcard(require("./I18nProvider"));

exports.I18nProvider = _I18nProvider;

var _useI18n = _interopRequireWildcard(require("./useI18n"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map
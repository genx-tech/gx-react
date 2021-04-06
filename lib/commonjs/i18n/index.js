"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "httpLoader", {
  enumerable: true,
  get: function () {
    return _httpLoader.default;
  }
});
Object.defineProperty(exports, "importLoader", {
  enumerable: true,
  get: function () {
    return _importLoader.default;
  }
});
Object.defineProperty(exports, "passThrough", {
  enumerable: true,
  get: function () {
    return _passThrough.default;
  }
});
Object.defineProperty(exports, "I18nProvider", {
  enumerable: true,
  get: function () {
    return _I18nProvider.default;
  }
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

var _httpLoader = _interopRequireDefault(require("./httpLoader"));

var _importLoader = _interopRequireDefault(require("./importLoader"));

var _passThrough = _interopRequireDefault(require("./passThrough"));

var _I18nProvider = _interopRequireDefault(require("./I18nProvider"));

var _useI18n = _interopRequireWildcard(require("./useI18n"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map
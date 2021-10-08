"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _I18nProvider = _interopRequireDefault(require("../i18n/I18nProvider"));

var _Runtime = require("../Runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WebAppContainer = ({
  locale,
  localeLoader,
  iconFamilies,
  children
}) => {
  const elWrapped = (0, _react.useMemo)(() => (0, _Runtime.setupProviders)(children), [children]);
  return /*#__PURE__*/_react.default.createElement(_Runtime.AppContext.Provider, {
    value: {
      iconFamilies
    }
  }, /*#__PURE__*/_react.default.createElement(_I18nProvider.default, {
    locale: locale,
    loader: localeLoader
  }, elWrapped));
};

var _default = WebAppContainer;
exports.default = _default;
//# sourceMappingURL=WebAppContainer.js.map
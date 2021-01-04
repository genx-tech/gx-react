"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = I18nProvider;
exports.I18nContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const I18nContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * I18nProvider component.
 * @param {Object} props
 * @property {stirng} props.locale
 * @property {stirng} props.defaultLocale
 * @property {Function} props.loader
 */

exports.I18nContext = I18nContext;

function I18nProvider({
  loader,
  children,
  ...props
}) {
  return /*#__PURE__*/_react.default.createElement(I18nContext.Provider, {
    value: {
      loader,
      cache: {}
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.IntlProvider, props, children));
}
//# sourceMappingURL=I18nProvider.js.map
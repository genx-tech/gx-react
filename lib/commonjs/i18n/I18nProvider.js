"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = I18nProvider;
exports.I18nContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _Runtime = _interopRequireDefault(require("../Runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      loader
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.IntlProvider, _extends({}, props, {
    onError: error => {
      if (error.message.startsWith('[@formatjs/intl Error MISSING_TRANSLATION]')) {
        return;
      }

      _Runtime.default.log('error', () => error);
    }
  }), children));
}
//# sourceMappingURL=I18nProvider.js.map
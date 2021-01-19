"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReactLite = require("mobx-react-lite");

var _native = require("@react-navigation/native");

var _galioFramework = require("galio-framework");

var _Runtime = require("../Runtime");

var _I18nProvider = _interopRequireDefault(require("../i18n/I18nProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppContainer = ({
  locale,
  children,
  ...props
}) => {
  const elMainScreen = (0, _Runtime.setupScreen)(children);
  return /*#__PURE__*/_react.default.createElement(_I18nProvider.default, {
    locale: locale
  }, /*#__PURE__*/_react.default.createElement(_native.NavigationContainer, props, /*#__PURE__*/_react.default.createElement(_galioFramework.Block, {
    flex: true
  }, elMainScreen)));
};

var _default = (0, _mobxReactLite.observer)(AppContainer);

exports.default = _default;
//# sourceMappingURL=AppContainer.js.map
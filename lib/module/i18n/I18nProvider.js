function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { createContext } from 'react';
import { IntlProvider } from 'react-intl';
export const I18nContext = /*#__PURE__*/createContext();
/**
 * I18nProvider component.
 * @param {Object} props
 * @property {stirng} props.locale
 * @property {stirng} props.defaultLocale
 * @property {Function} props.loader
 */

export default function I18nProvider({
  loader,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement(I18nContext.Provider, {
    value: {
      loader,
      cache: {}
    }
  }, /*#__PURE__*/React.createElement(IntlProvider, _extends({}, props, {
    onError: error => {
      if (error.message.startsWith('[@formatjs/intl Error MISSING_TRANSLATION]')) {
        return;
      }

      console.error(error);
    }
  }), children));
}
//# sourceMappingURL=I18nProvider.js.map
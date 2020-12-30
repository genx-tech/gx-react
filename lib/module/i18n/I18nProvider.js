import React, { createContext } from 'react';
import { IntlProvider } from 'react-intl';
export const I18nContext = /*#__PURE__*/createContext();
/**
 * I18nProvider component.
 * @param {Object} props
 * @property {stirng} props.locale
 * @property {Function} props.loader
 */

export default function I18nProvider({
  locale,
  loader,
  children
}) {
  return /*#__PURE__*/React.createElement(I18nContext.Provider, {
    value: {
      loader,
      cache: {}
    }
  }, /*#__PURE__*/React.createElement(IntlProvider, {
    locale: locale,
    onError: error => {
      if (error.message.startsWith('[React Intl Error MISSING_TRANSLATION]')) {
        return;
      }

      console.error(error);
    }
  }, children));
}
//# sourceMappingURL=I18nProvider.js.map
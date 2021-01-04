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
  }, /*#__PURE__*/React.createElement(IntlProvider, props, children));
}
//# sourceMappingURL=I18nProvider.js.map
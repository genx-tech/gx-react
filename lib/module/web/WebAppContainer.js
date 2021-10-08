import React, { useMemo } from 'react';
import I18nProvider from '../i18n/I18nProvider';
import { AppContext, setupProviders } from '../Runtime';

const WebAppContainer = ({
  locale,
  localeLoader,
  iconFamilies,
  children
}) => {
  const elWrapped = useMemo(() => setupProviders(children), [children]);
  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: {
      iconFamilies
    }
  }, /*#__PURE__*/React.createElement(I18nProvider, {
    locale: locale,
    loader: localeLoader
  }, elWrapped));
};

export default WebAppContainer;
//# sourceMappingURL=WebAppContainer.js.map
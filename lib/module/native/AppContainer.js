import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { Block } from 'galio-framework';
import { setupScreen } from '../Runtime';
import I18nProvider from '../i18n/I18nProvider';

const AppContainer = ({
  locale,
  children,
  ...props
}) => {
  const elMainScreen = setupScreen(children);
  return /*#__PURE__*/React.createElement(I18nProvider, {
    locale: locale
  }, /*#__PURE__*/React.createElement(NavigationContainer, props, /*#__PURE__*/React.createElement(Block, {
    flex: true
  }, elMainScreen)));
};

export default observer(AppContainer);
//# sourceMappingURL=AppContainer.js.map
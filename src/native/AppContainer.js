import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { Block } from 'galio-framework';
import { setupScreen } from '../Runtime';
import I18nProvider from '../i18n/I18nProvider';

const AppContainer = ({ locale, children, ...props }) => {
    const elMainScreen = setupScreen(children);

    return (
        <I18nProvider locale={locale}>
            <NavigationContainer {...props}>
                <Block flex>{elMainScreen}</Block>
            </NavigationContainer>
        </I18nProvider>
    );
};

export default observer(AppContainer);

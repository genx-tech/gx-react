import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Block } from 'galio-framework';
import { setupScreen } from '../Runtime';
import I18nProvider from '../i18n/I18nProvider';

export const AppContext = React.createContext({});

const AppContainer = ({ locale, children, iconFamilies, ...props }) => {
    const elMainScreen = setupScreen(children);

    return (
        <AppContext.Provider value={{ iconFamilies }}>
            <I18nProvider locale={locale}>
                <SafeAreaProvider>
                    <NavigationContainer {...props}>
                        <Block flex>{elMainScreen}</Block>
                    </NavigationContainer>
                </SafeAreaProvider>
            </I18nProvider>
        </AppContext.Provider>
    );
};

export default AppContainer;

import React, { useMemo } from 'react';
import I18nProvider from '../i18n/I18nProvider';
import { AppContext, setupProviders } from '../Runtime';

const WebAppContainer = ({ locale, localeLoader, iconFamilies, children }) => {
    const elWrapped = useMemo(() => setupProviders(children), [children]);

    return (
        <AppContext.Provider value={{ iconFamilies }}>
            <I18nProvider locale={locale} loader={localeLoader}>
                {elWrapped}
            </I18nProvider>
        </AppContext.Provider>
    );
};

export default WebAppContainer;

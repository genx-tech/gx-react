import React, { createContext } from 'react';
import { IntlProvider } from 'react-intl';

export const I18nContext = createContext();

/**
 * I18nProvider component.
 * @param {Object} props
 * @property {stirng} props.locale
 * @property {Function} props.loader
 */
export default function I18nProvider({ locale, loader, children }) {
    return (
        <I18nContext.Provider value={{ loader, cache: {} }}>
            <IntlProvider
                locale={locale}
                onError={(error) => {
                    if (
                        error.message.startsWith(
                            '[React Intl Error MISSING_TRANSLATION]'
                        )
                    ) {
                        return;
                    }

                    console.error(error);
                }}
            >
                {children}
            </IntlProvider>
        </I18nContext.Provider>
    );
}

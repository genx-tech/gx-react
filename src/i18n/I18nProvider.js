import React, { createContext } from 'react';
import { IntlProvider } from 'react-intl';

export const I18nContext = createContext();

/**
 * I18nProvider component.
 * @param {Object} props
 * @property {stirng} props.locale
 * @property {stirng} props.defaultLocale
 * @property {Function} props.loader
 */
export default function I18nProvider({ loader, children, ...props }) {
    return (
        <I18nContext.Provider value={{ loader, cache: {} }}>
            <IntlProvider
                {...props}
                onError={(error) => {
                    if (
                        error.message.startsWith(
                            '[@formatjs/intl Error MISSING_TRANSLATION]'
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

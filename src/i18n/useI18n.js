import { useContext } from 'react';
import { useIntl, defineMessages } from 'react-intl';

import Runtime from '../Runtime';
import useAsyncMemo from '../hooks/useAsyncMemo';
import { I18nContext } from './I18nProvider';
import passThrough from './passThrough';

/**
 * Features:
 *  Lazy locale loading, better performance for web app
 *  Messages grouped by modules
 *
 * @see {@link https://formatjs.io/docs/core-concepts/icu-syntax} for message syntax
 */

const cache = {};
const identity = (v) => v;

/**
 * Register a preloaded locale module
 * @param {*} loader
 * @param {*} locale
 * @param {*} moduleName
 */
export const registerLocale = (locale, moduleName, loadedModule) => {
    const { messages, ...others } = loadedModule;
    const messagesWithId = {};

    for (let key in messages) {
        const msg = messages[key];
        const id = `${moduleName}.${key}`;

        //todo: be replaced with pre-compiled locale data
        messagesWithId[key] =
            typeof msg === 'string'
                ? {
                      id,
                      defaultMessage: msg,
                  }
                : {
                      ...msg,
                      id,
                  };
    }

    const moduleKey = `${locale}/${moduleName}`;

    return (cache[moduleKey] = {
        ...others,
        key: moduleKey,
        messages: defineMessages(messagesWithId),
    });
};

/**
 * Returns a translator { t = (text, variables) => <translated and injected text> } of specified locale module.
 * @param {string} [moduleName]
 * @returns {Object} { loading, t }
 */
export default function useI18n(moduleName) {
    const { loader } = useContext(I18nContext);
    const intl = useIntl();

    const state = useAsyncMemo(async () => {
        if (moduleName) {
            const moduleKey = `${intl.locale}/${moduleName}`;

            const cachedModule = cache[moduleKey];
            if (cachedModule) {
                Runtime.log(
                    'verbose',
                    () => `Load locale data "${moduleKey}" from cache.`
                );
                return cachedModule;
            }

            return (
                loader &&
                registerLocale(
                    intl.locale,
                    moduleName,
                    await loader(intl.locale, moduleName)
                )
            );
        }

        return null;
    }, [loader, intl.locale, moduleName]);

    if (state.loading || state.value == null) {
        return {
            ...state,
            intl,
            T: identity,
        };
    }

    const intlMessages = state.value.messages;

    return {
        loading: false,
        intl,
        T: (messageId, vars) =>
            intlMessages[messageId] == null
                ? passThrough(messageId)
                : intl.formatMessage(intlMessages[messageId], vars),
    };
}

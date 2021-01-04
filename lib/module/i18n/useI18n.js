import { useContext } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import useAsyncMemo from '../hooks/useAsyncMemo';
import { identity } from '../utils/callback';
import { I18nContext } from './I18nProvider';
import passThrough from './passThrough';
/**
 * Features:
 *  Lazy locale loading, better performance for web app 
 *  Messages grouped by modules 
 *  
 * @see {@link https://formatjs.io/guides/message-syntax/} for message syntax
 */

/**
 * Returns a translator { t = (text, variables) => <translated and injected text> } of specified locale module.
 * @param {string} [moduleName]
 * @returns {Object} { loading, t }
 */

export default function useI18n(moduleName) {
  const {
    loader,
    cache
  } = useContext(I18nContext);
  const intl = useIntl();
  const moduleKey = "".concat(intl.locale, "/").concat(moduleName);
  const state = useAsyncMemo(async () => {
    const cachedModule = cache[moduleKey];

    if (cachedModule) {
      return cachedModule;
    }

    const {
      messages,
      ...others
    } = await loader(intl.locale, moduleName);
    const messagesWithId = {};

    for (let key in messages) {
      const msg = messages[key];
      const id = "".concat(moduleName, ".").concat(key);
      messagesWithId[key] = typeof msg === 'string' ? {
        id,
        defaultMessage: msg
      } : { ...msg,
        id
      };
    }

    return cache[moduleKey] = { ...others,
      messages: defineMessages(messagesWithId)
    };
  }, [loader, intl.locale, moduleName]);

  if (state.loading || state.value == null) {
    return { ...state,
      t: identity
    };
  }

  const intlMessages = state.value.messages;
  return {
    loading: false,
    t: (messageId, vars) => intlMessages[messageId] == null ? passThrough(messageId) : intl.formatMessage(intlMessages[messageId], vars)
  };
}
//# sourceMappingURL=useI18n.js.map
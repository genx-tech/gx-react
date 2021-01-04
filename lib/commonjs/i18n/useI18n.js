"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useI18n;

var _react = require("react");

var _reactIntl = require("react-intl");

var _useAsyncMemo = _interopRequireDefault(require("../hooks/useAsyncMemo"));

var _callback = require("../utils/callback");

var _I18nProvider = require("./I18nProvider");

var _passThrough = _interopRequireDefault(require("./passThrough"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function useI18n(moduleName) {
  const {
    loader,
    cache
  } = (0, _react.useContext)(_I18nProvider.I18nContext);
  const intl = (0, _reactIntl.useIntl)();
  const moduleKey = "".concat(intl.locale, "/").concat(moduleName);
  const state = (0, _useAsyncMemo.default)(async () => {
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
      messages: (0, _reactIntl.defineMessages)(messagesWithId)
    };
  }, [loader, intl.locale, moduleName]);

  if (state.loading || state.value == null) {
    return { ...state,
      t: _callback.identity
    };
  }

  const intlMessages = state.value.messages;
  return {
    loading: false,
    t: (messageId, vars) => intlMessages[messageId] == null ? (0, _passThrough.default)(messageId) : intl.formatMessage(intlMessages[messageId], vars)
  };
}
//# sourceMappingURL=useI18n.js.map
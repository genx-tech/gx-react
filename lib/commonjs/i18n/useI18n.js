"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useI18n;
exports.registerLocale = void 0;

var _react = require("react");

var _reactIntl = require("react-intl");

var _Runtime = _interopRequireDefault(require("../Runtime"));

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
const cache = {};
/**
 * Register a preloaded locale module
 * @param {*} loader
 * @param {*} locale
 * @param {*} moduleName
 */

const registerLocale = (locale, moduleName, loadedModule) => {
  const {
    messages,
    ...others
  } = loadedModule;
  const messagesWithId = {};

  for (let key in messages) {
    const msg = messages[key];
    const id = `${moduleName}.${key}`; //todo: be replaced with pre-compiled locale data

    messagesWithId[key] = typeof msg === 'string' ? {
      id,
      defaultMessage: msg
    } : { ...msg,
      id
    };
  }

  const moduleKey = `${locale}/${moduleName}`;
  return cache[moduleKey] = { ...others,
    key: moduleKey,
    messages: (0, _reactIntl.defineMessages)(messagesWithId)
  };
};
/**
 * Returns a translator { t = (text, variables) => <translated and injected text> } of specified locale module.
 * @param {string} [moduleName]
 * @returns {Object} { loading, t }
 */


exports.registerLocale = registerLocale;

function useI18n(moduleName) {
  const {
    loader
  } = (0, _react.useContext)(_I18nProvider.I18nContext);
  const intl = (0, _reactIntl.useIntl)();
  const state = (0, _useAsyncMemo.default)(async () => {
    if (moduleName) {
      const moduleKey = `${intl.locale}/${moduleName}`;
      const cachedModule = cache[moduleKey];

      if (cachedModule) {
        _Runtime.default.log('verbose', () => `Load locale data "${moduleKey}" from cache.`);

        return cachedModule;
      }

      return loader && registerLocale(intl.locale, moduleName, await loader(intl.locale, moduleName));
    }

    return null;
  }, [loader, intl.locale, moduleName]);

  if (state.loading || state.value == null) {
    return { ...state,
      intl,
      t: _callback.identity
    };
  }

  const intlMessages = state.value.messages;
  return {
    loading: false,
    intl,
    t: (messageId, vars) => intlMessages[messageId] == null ? (0, _passThrough.default)(messageId) : intl.formatMessage(intlMessages[messageId], vars)
  };
}
//# sourceMappingURL=useI18n.js.map
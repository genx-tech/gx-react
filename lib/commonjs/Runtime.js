"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setupScreen = exports.updateRuntime = exports.applyScreenComposer = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkJsRuntime = _interopRequireDefault(require("./utils/checkJsRuntime"));

var _logger = require("./utils/logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const applyScreenComposer = hoc => config.screenComposers.push(hoc);

exports.applyScreenComposer = applyScreenComposer;

const updateRuntime = addon => Object.assign(config, addon);

exports.updateRuntime = updateRuntime;

const setupScreen = elScreen => config.screenComposers.reduce((r, hoc) => r = hoc(elScreen), elScreen);

exports.setupScreen = setupScreen;
const jsRuntime = (0, _checkJsRuntime.default)();
const modulesRegistry = {};

const finalizeConfig = () => {
  //...
  Object.freeze(config);
};

const config = {
  //configurable runtime settings
  jsRuntime,
  // web, native, node
  defaultStyleMode: jsRuntime === 'native' ? 'galio' : 'mui',
  useMobxProvider: false,
  screenComposers: [],
  //i18n
  localePathBuilder: (locale, moduleName) => "assets/locale/".concat(locale, "/").concat(moduleName, ".json"),
  //dynamic loading
  import_: url => modulesRegistry[url],
  register: (url, loadedModule) => {
    modulesRegistry[url] = loadedModule;
  },

  /**
   *
   * @param {*} url - component url
   */
  lazyLoad: url => config.import_(url) || config.notFoundFallbabck,
  notFoundFallbabck: () => null,
  suspenseFallbabck: () => null,
  //logger related
  log: (0, _logger.makeLogger)(_logger.consoleLogger),
  makeLogger: _logger.makeLogger,
  getLogLevel: _logger.getLogLevel,
  setLogLevel: _logger.setLogLevel,
  //updater
  update: updateRuntime,
  finalize: finalizeConfig
};
var _default = config;
exports.default = _default;
//# sourceMappingURL=Runtime.js.map
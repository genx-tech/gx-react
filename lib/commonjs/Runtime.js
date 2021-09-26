"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setupScreen = exports.defaultRuntime = exports.updateRuntime = exports.composeScreen = void 0;

var _logger = require("./utils/logger");

var _defaults2 = _interopRequireDefault(require("lodash/defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const composeScreen = hoc => config.screenComposers.push(hoc);

exports.composeScreen = composeScreen;

const updateRuntime = addon => Object.assign(config, addon);

exports.updateRuntime = updateRuntime;

const defaultRuntime = addon => (0, _defaults2.default)(config, addon);

exports.defaultRuntime = defaultRuntime;

const setupScreen = elScreen => config.screenComposers.reduce((r, hoc) => r = hoc(elScreen), elScreen);

exports.setupScreen = setupScreen;
const modulesRegistry = {};
const config = {
  //configurable runtime settings
  defaultStyleMode: 'galio',
  useMobxProvider: false,
  screenComposers: [],
  //i18n
  localePathBuilder: (locale, moduleName) => `assets/locale/${locale}/${moduleName}.json`,
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
  default: defaultRuntime
};
var _default = config;
exports.default = _default;
//# sourceMappingURL=Runtime.js.map
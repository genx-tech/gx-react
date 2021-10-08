"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setupProviders = exports.useGlobalProvider = exports.setupScreens = exports.updateRuntime = exports.composeScreen = exports.AppContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _logger = require("./utils/logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ReactRuntime
 */
const AppContext = /*#__PURE__*/_react.default.createContext({});

exports.AppContext = AppContext;

const composeScreen = hoc => globalScreenComposers.push(hoc);

exports.composeScreen = composeScreen;

const updateRuntime = addon => Object.assign(config, addon);

exports.updateRuntime = updateRuntime;

const setupScreens = children => globalScreenComposers.reduce((r, hoc) => r = hoc(r), children);

exports.setupScreens = setupScreens;

const useGlobalProvider = Provider => globalProviders.push(Provider);

exports.useGlobalProvider = useGlobalProvider;

const setupProviders = children => globalProviders.reduce((r, Provider) => r = /*#__PURE__*/_react.default.createElement(Provider, null, "r"), children);

exports.setupProviders = setupProviders;
const modulesRegistry = {};
const globalScreenComposers = [];
const globalProviders = [];

const finalizeConfig = () => {
  //todo: detect debug param in url and then set log level
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //all runtime configs are supposed to be unchanged during the whole app life cycle
    Object.freeze(config);
    Object.freeze(modulesRegistry);
    Object.freeze(globalScreenComposers);
    Object.freeze(globalProviders);
  }
};

const config = {
  //configurable runtime settings
  defaultStyleMode: 'galio',
  useNativeView: false,
  //dynamic loading
  require: moduleName => modulesRegistry[moduleName],
  register: (moduleName, loadedModule) => {
    modulesRegistry[moduleName] = loadedModule;
  },
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
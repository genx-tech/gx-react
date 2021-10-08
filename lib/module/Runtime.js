/**
 * @module ReactRuntime
 */
import React from 'react';
import { makeLogger, consoleLogger, getLogLevel, setLogLevel } from './utils/logger';
export const AppContext = /*#__PURE__*/React.createContext({});
export const composeScreen = hoc => globalScreenComposers.push(hoc);
export const updateRuntime = addon => Object.assign(config, addon);
export const setupScreens = children => globalScreenComposers.reduce((r, hoc) => r = hoc(r), children);
export const useGlobalProvider = Provider => globalProviders.push(Provider);
export const setupProviders = children => globalProviders.reduce((r, Provider) => r = /*#__PURE__*/React.createElement(Provider, null, "r"), children);
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
  log: makeLogger(consoleLogger),
  makeLogger,
  getLogLevel: getLogLevel,
  setLogLevel: setLogLevel,
  //updater
  update: updateRuntime,
  finalize: finalizeConfig
};
export default config;
//# sourceMappingURL=Runtime.js.map